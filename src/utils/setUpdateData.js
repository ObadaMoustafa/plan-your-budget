import { getDatabase, ref, push, set } from "firebase/database";
import { auth } from "../firebaseConfige";

export const updateDbDate = async (path, element) => {
  // Create a new post reference with an auto-generated id
  const db = getDatabase();
  const { uid } = auth.currentUser;
  const postListRef = ref(db, `users/${uid}/${path}`);
  const newPostRef = push(postListRef);
  try {
    await set(newPostRef, element);
    return newPostRef.key;
  } catch (error) {
    console.log("couldn't push element", error.message);
  }
};
