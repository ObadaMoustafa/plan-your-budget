import { getDatabase, ref, child, get, set } from "firebase/database";
import { auth } from "../firebaseConfige";

export async function getDataFromDb(path) {
  const uid = auth.currentUser.uid;
  const dbRef = ref(getDatabase(), `users/${uid}`);
  const snapshot = await get(child(dbRef, path));
  const data = snapshot.val();
  return data;
}
