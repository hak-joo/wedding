import { getDatabase, ref, push } from 'firebase/database'

export const sendComments = async (form: object) => {
  const database = getDatabase(
    undefined,
    import.meta.env.VITE_FIREBASE_RDB_URL
  )
  push(ref(database, '/comments'), form)
    .then(() => {
      return true
    })
    .catch(error => {
      return false
    })
}
