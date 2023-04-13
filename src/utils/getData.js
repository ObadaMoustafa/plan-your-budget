import { getDatabase, ref, child, get, set } from "firebase/database";
import { auth } from "../firebaseConfige";

export async function getDataFormDb(path) {
  const uid = auth.currentUser.uid;
  const dbRef = ref(getDatabase());
  const snapshot = await get(child(dbRef, `users/${uid}/${path}`));
  const data = snapshot.val();
  return data;
}

export async function editDataInDb(path, value) {
  const uid = auth.currentUser.uid;
  const db = getDatabase();
  await set(ref(db, `users/${uid}/${path}`), value);
}
