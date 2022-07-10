import firestoreDB from "././config";
import {
  collection,
  doc,
  documentId,
  getDoc,
  getDocs,
  limit,
  query,
  startAfter,
  where,
  writeBatch,
} from "firebase/firestore";

const prodsRef = collection(firestoreDB, "productos");
const limitCondition = limit(2);

////// GET PRODUCTS //////
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
export const getCategories = async () => {
  return await getDocs(collection(firestoreDB, "categories"));
};

////// ORDER //////
export const verifyStock = async (items) => {
  const prodsOutOfStock = [];
  for (const item of items) {
    const prod = await getDoc(doc(prodsRef, item.id));
    if (prod.data().stock < item.quantity)
      prodsOutOfStock.push({ id: prod.id, ...prod.data() });
  }
  return prodsOutOfStock.length === 0 ? true : prodsOutOfStock;
};
export const createOrder = async (order, cart) => {
  let resp = "";
  try {
    const batch = writeBatch(firestoreDB);

    const orderCollection = collection(firestoreDB, "orders");
    const orderRef = doc(orderCollection);
    const resOrder = batch.set(orderRef, order);
    resp = resOrder._mutations[0].key.path.segments[1];
    //No hago addDoc porque eso agrega la orden directamente, y yo lo que quiero es "guardarla" en la transaccion hasta hacer el commit.
    //Ya que en caso de error en la parte de actualizar stock, la "transaccion" tiraría error y no se crearía ni la orden ni se actualizaría stock.

    await updateStock(cart, batch);
    await batch.commit();
    return resp;
  } catch (error) {
    resp = "Algo salió mal";
    return resp;
  }
};
const updateStock = async (cart, batch) => {
  const queryUpdateStock = await query(
    prodsRef,
    where(
      documentId(),
      "in",
      cart.map((it) => it.id)
    )
  );
  await getDocs(queryUpdateStock).then((resp) => {
    resp.docs.forEach((doc) =>
      batch.update(doc.ref, {
        stock:
          doc.data().stock - cart.find((item) => item.id === doc.id).quantity,
      })
    );
  });
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
