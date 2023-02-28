import { getDatabase, ref, push } from 'firebase/database'

export const sendComments = async (form: object) => {
  const database = getDatabase(
    undefined,
    'https://wedding-6978f-default-rtdb.asia-southeast1.firebasedatabase.app/'
  )
  push(ref(database, '/'), form)
    .then(() => {
      return true
    })
    .catch(error => {
      return false
    })
}
