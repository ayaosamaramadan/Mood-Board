import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { defmoodList } from '@/data/list';
import { auth } from '@/auth/services/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { listenMoods, addMood, updateMood, deleteMood } from '@/auth/services/firestoreService';

export const useMoodStore = defineStore('moodstore', () => {
    const list = ref([]);
    const moodInput = ref('');
    const moodReaction = ref('');
    const Addoredit = ref('Add');
    const editMoodId = ref(null);
    const loading = ref(false);
    const unsubscribeMoods = ref(null);
    let authUnsub = null;

    const moodCount = computed(() => list.value.length);
    const isEditing = computed(() => Addoredit.value === 'Edit');

    function resetForm() {
        moodInput.value = '';
        moodReaction.value = '';
        Addoredit.value = 'Add';
        editMoodId.value = null;
    }

    function startMoodsListener() {
        if (authUnsub) return; // already started
        authUnsub = onAuthStateChanged(auth, user => {
            if (unsubscribeMoods.value) {
                unsubscribeMoods.value();
                unsubscribeMoods.value = null;
            }
            if (user) {
                unsubscribeMoods.value = listenMoods(user.uid, moods => {
                    list.value = moods;
                });
            } else {
                list.value = [];
            }
        });
    }

    function stopMoodsListener() {
        if (unsubscribeMoods.value) {
            unsubscribeMoods.value();
            unsubscribeMoods.value = null;
        }
        if (authUnsub) {
            authUnsub();
            authUnsub = null;
        }
    }

    async function sendMood() {
        const user = auth.currentUser;
        if (!user) return; // not authenticated

        if (Addoredit.value === 'Edit' && editMoodId.value !== null) {
            const idx = list.value.findIndex(m => m.id === editMoodId.value || m.firestoreId === editMoodId.value || m.id === editMoodId.value)
            if (idx !== -1) {
                const updated = {
                    ...list.value[idx],
                    emoji: defmoodList.find(m => m.id === moodReaction.value)?.emoji || list.value[idx].emoji,
                    emoname: moodInput.value || 'Unnamed Mood',
                    description: moodInput.value ? `Feeling ${defmoodList.find(m => m.id === moodReaction.value)?.emoname || 'Unknown Mood'}` : 'No description provided'
                };
                // update in firestore if has id
                try {
                    const fid = updated.id || updated.firestoreId
                    if (fid) await updateMood(user.uid, fid, {
                        emoji: updated.emoji,
                        emoname: updated.emoname,
                        description: updated.description
                    })
                } catch (err) {
                    console.error('Failed to update mood:', err)
                }
            }
        } else {
            const newMood = {
                id: Date.now(),
                emoji: defmoodList.find(m => m.id === moodReaction.value)?.emoji || '❓',
                emoname: moodInput.value || 'Unnamed Mood',
                description: moodInput.value ? `Feeling ${defmoodList.find(m => m.id === moodReaction.value)?.emoname || 'Unknown Mood'}` : 'No description provided'
            };
            try {
                const fid = await addMood(user.uid, newMood)
                newMood.firestoreId = fid
            } catch (err) {
                console.error('Failed to save mood:', err)
            }
            // listener will sync — optimistic push for immediate UI
            list.value.unshift(newMood)
        }
        resetForm();
    }

    function handleEdit(mood) {
        moodInput.value = mood.emoname;
        moodReaction.value = defmoodList.find(m => m.emoji === mood.emoji)?.id || '';
        Addoredit.value = 'Edit';
        editMoodId.value = mood.id || mood.firestoreId || null;
    }

    async function handleDelete(id) {
        const user = auth.currentUser;
        // remove locally
        const idx = list.value.findIndex(m => m.id === id || m.firestoreId === id)
        const mood = idx !== -1 ? list.value[idx] : null
        if (idx !== -1) list.value.splice(idx, 1)
        if (user && mood?.firestoreId) {
            try {
                await deleteMood(user.uid, mood.firestoreId)
            } catch (err) {
                console.error('Failed to delete mood:', err)
            }
        }
    }

    return {
        list,
        moodInput,
        moodReaction,
        Addoredit,
        editMoodId,
        loading,
        moodCount,
        isEditing,
        sendMood,
        handleEdit,
        handleDelete,
        resetForm,
        startMoodsListener,
        stopMoodsListener
    };
});