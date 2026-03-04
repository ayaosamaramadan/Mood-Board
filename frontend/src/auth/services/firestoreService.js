import { db } from './firebase'
import {
  collection,
  addDoc,
  query,
  orderBy,
  getDocs,
  onSnapshot,
  doc,
  updateDoc,
  deleteDoc,
  serverTimestamp
} from 'firebase/firestore'

export const moodsCollectionRef = (uid) => collection(db, 'users', uid, 'moods')

export async function addMood(uid, mood) {
  const ref = moodsCollectionRef(uid)
  const docRef = await addDoc(ref, { ...mood, timestamp: serverTimestamp(), userId: uid })
  return docRef.id
}

export async function fetchMoodsOnce(uid) {
  const q = query(moodsCollectionRef(uid), orderBy('timestamp', 'desc'))
  const snap = await getDocs(q)
  return snap.docs.map(d => ({ id: d.id, ...d.data() }))
}

export function listenMoods(uid, onChange) {
  const q = query(moodsCollectionRef(uid), orderBy('timestamp', 'desc'))
  return onSnapshot(q, snap => onChange(snap.docs.map(d => ({ id: d.id, ...d.data() }))))
}

export async function updateMood(uid, id, data) {
  await updateDoc(doc(db, 'users', uid, 'moods', id), { ...data, updatedAt: serverTimestamp() })
}

export async function deleteMood(uid, id) {
  await deleteDoc(doc(db, 'users', uid, 'moods', id))
}
