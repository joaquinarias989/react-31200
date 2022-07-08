import firestoreDB from "././config";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  limit,
  orderBy,
  query,
  startAfter,
  where,
} from "firebase/firestore";

const prodsRef = collection(firestoreDB, "productos");
const limitCondition = limit(2);

export const getProds = async (id, category) => {
  return id
    ? await getDoc(doc(prodsRef, id))
    : category
    ? await getDocs(
        query(prodsRef, where("category", "==", category), limitCondition)
      )
    : await getDocs(query(prodsRef, limitCondition));
};
export const getMoreProds = async (lastDoc, category) => {
  return category
    ? await getDocs(
        query(
          prodsRef,
          where("category", "==", category),
          startAfter(lastDoc),
          limitCondition
        )
      )
    : await getDocs(query(prodsRef, startAfter(lastDoc), limitCondition));
};

// getMoreProds(lastDoc, category)
//       .then((data) => {
//         console.log(data);
//         if (data != null) {
//           setProducts([...products, data]);
//           setLastDoc(data[data.length - 1]);
//         } else {
//           Toast.fire({
//             icon: "warning",
//             title: `No quedan ${category ? category : "productos"} por cargar`,
//           });
//         }
//       })
//       .catch((err) => {
//         setLoadButton(false);
//         console.log(err);
//       })
//       .finally(() => setLoadButton(false));

// export const getProdsPrueba = async (id, category) => {
//   return id
//     ? await getDoc(doc(prodsRef, id))
//     : category
//     ? await getDocs(
//         query(prodsRef, where("category", "==", category), limitCondition)
//       ).then((data) => {
//         return [
//           data.docs[data.docs.length - 1],
//           data.docs.map((item) => ({ id: item.id, ...item.data() })),
//         ];
//       })
//     : await getDocs(query(prodsRef, limitCondition)).then((data) => {
//         return data.docs.map((item) => ({ id: item.id, ...item.data() }));
//       });
// };

// getProdsPrueba(undefined, "Remeras").then((data) => console.log(data[0]));
