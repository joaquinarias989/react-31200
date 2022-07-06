import {
  collection,
  doc,
  getFirestore,
  limit,
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
        where("category", "==", category),
        limit(2)
      ))
    : (qry = query(collection(db, "productos"), limit(2)));
  return qry;
};
