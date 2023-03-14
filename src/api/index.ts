import { getDatabase, ref, push, refFromURL, remove } from 'firebase/database'
import { firebaseApp } from '../lib/firebase'

export const sendComments = async (form: object) => {
  const database = getDatabase(
    firebaseApp,
    import.meta.env.VITE_FIREBASE_RDB_URL
  )
  await push(ref(database, '/comments'), form)
    .then(() => {
      return true
    })
    .catch(error => {
      console.log('error', error)
      return false
    })
}

export const removeComment = async (id: string) => {
  try {
    const database = getDatabase(
      firebaseApp,
      import.meta.env.VITE_FIREBASE_RDB_URL
    )
    await remove(ref(database, `/comments/${id}`))
    return true
  } catch (error) {
    console.log('error', error)
    return false
  }
}
