import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { defmoodList } from '@/data/list';

export const useMoodStore = defineStore('moodstore', () => {
    const list = ref([]);
    const moodInput = ref('');
    const moodReaction = ref('');
    const Addoredit = ref('Add');
    const editMoodId = ref(null);

    const moodCount = computed(() => list.value.length);
    const isEditing = computed(() => Addoredit.value === 'Edit');

    function resetForm() {
        moodInput.value = '';
        moodReaction.value = '';
        Addoredit.value = 'Add';
        editMoodId.value = null;
    }

    function sendMood() {
        if (Addoredit.value === 'Edit' && editMoodId.value !== null) {
            const index = list.value.findIndex(m => m.id === editMoodId.value);
            if (index !== -1) {
                list.value[index] = {
                    ...list.value[index],
                    emoji: defmoodList.find(m => m.id === moodReaction.value)?.emoji || list.value[index].emoji,
                    emoname: moodInput.value || 'Unnamed Mood',
                    description: moodInput.value ? `Feeling ${defmoodList.find(m => m.id === moodReaction.value)?.emoname || 'Unknown Mood'}` : 'No description provided'
                };
            }
        } else {
            const newMood = {
                id: Date.now(),
                emoji: defmoodList.find(m => m.id === moodReaction.value)?.emoji || '❓',
                emoname: moodInput.value || 'Unnamed Mood',
                description: moodInput.value ? `Feeling ${defmoodList.find(m => m.id === moodReaction.value)?.emoname || 'Unknown Mood'}` : 'No description provided'
            };
            list.value.push(newMood);
        }
        resetForm();
    }

    function handleEdit(mood) {
        moodInput.value = mood.emoname;
        moodReaction.value = defmoodList.find(m => m.emoji === mood.emoji)?.id || '';
        Addoredit.value = 'Edit';
        editMoodId.value = mood.id;
    }

    function handleDelete(id) {
        list.value = list.value.filter(m => m.id !== id);
    }

    return {
        list,
        moodInput,
        moodReaction,
        Addoredit,
        editMoodId,
        moodCount,
        isEditing,
        sendMood,
        handleEdit,
        handleDelete,
        resetForm
    };
});