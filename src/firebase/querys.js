import {
  collection,
  doc,
  getFirestore,
  query,
  where,
} from "firebase/firestore";

export const queryGetProds = (id, category) => {
  const db = getFirestore();
  let qry;
  id
    ? (qry = doc(db, "productos", id))
    : category
    ? (qry = query(
        collection(db, "productos"),
        where("category", "==", category)
      ))
    : (qry = collection(db, "productos"));
  return qry;
};
