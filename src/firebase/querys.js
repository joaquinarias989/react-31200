import {
  collection,
  doc,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
export const queryGetProds = (id, category) => {
  const db = getFirestore();
  let q;
  id
    ? (q = doc(db, "productos", id))
    : category
    ? (q = query(
        collection(db, "productos"),
        where("category", "==", category)
      ))
    : (q = collection(db, "productos"));
  return q;
};
