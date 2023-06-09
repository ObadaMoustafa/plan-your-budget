import { getDatabase, ref, push, set, update } from "firebase/database";
import { auth } from "../firebaseConfige";

export const pushDataToDb = async (path, element) => {
  // Create a new post reference with an auto-generated id
  const db = getDatabase();
  const { uid } = auth.currentUser;
  const postListRef = ref(db, `users/${uid}/${path}`);
  const newPostRef = push(postListRef);
  await set(newPostRef, element);
  return newPostRef.key;
};

export const updateSingleExpenseInDb = async (expenseID, value) => {
  const db = getDatabase();
  const { uid } = auth.currentUser;
  const DBRef = ref(db, `users/${uid}/expenses/${expenseID}`);
  await set(DBRef, value);
};
export const updateSingleIncomeInDb = async (incomeKey, value) => {
  const db = getDatabase();
  const { uid } = auth.currentUser;
  const DBRef = ref(db, `users/${uid}/income/${incomeKey}`);
  await set(DBRef, value);
};

export async function editDataInDb(path, value) {
  const uid = auth.currentUser.uid;
  const db = getDatabase();
  await set(ref(db, `users/${uid}/${path}`), value);
}
