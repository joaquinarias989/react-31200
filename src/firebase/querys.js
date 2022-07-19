import firestoreDB from "././config";
import {
  addDoc,
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

const prodsRef = collection(firestoreDB, "products");
const limitCondition = limit(4);

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

///// CATEGORIES /////
export const getCategories = async () => {
  return await getDocs(collection(firestoreDB, "categories"));
};

////// ORDER //////
export const verifyStock = async (items) => {
  const prodsOutOfStock = [];
  for (const item of items) {
    const prod = await getDoc(doc(prodsRef, item.id));
    //verify if the product has enough stock for each size
    prod.data().size.forEach((size) => {
      const index = item.size.indexOf(size);
      if (item.quantity[index] > prod.data().stock[index]) {
        prodsOutOfStock.push({
          id: item.id,
          title: item.title,
          size: size,
          index: index,
        });
      }
    });
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
    resp = resOrder._mutations[0].key.path.segments[1]; //idOrder

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
    resp.docs.forEach((doc) => {
      const newStock = [];
      const prodToUpdate = cart.find((item) => item.id === doc.id);
      const oldStock = doc.data().stock;
      oldStock.forEach((s) => {
        const index = oldStock.indexOf(s);
        newStock.push(oldStock[index] - prodToUpdate.quantity[index]);
      });

      batch.update(doc.ref, {
        stock: newStock,
      });
    });
  });
};

////// CONTACT /////
export const sendContact = async (contact) => {
  let resp = "";
  const contactCollection = collection(firestoreDB, "contacts");
  await addDoc(contactCollection, contact)
    .then((doc) => (resp = doc.id), console.log(doc.id))
    .catch(
      (error) => (resp = "No pudimos procesar su consulta, intente nuevamente")
    );
  return resp;
};
