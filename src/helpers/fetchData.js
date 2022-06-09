const products = [
  {
    id: "RMPN",
    titulo: "Remera Phenomenally",
    precio: 2380,
    descripcion: "Lorem ipsum dolor",
    color: "Negro",
    talle: "M",
    stock: 5,
    img: "",
    cantidad: 0,
    categoria: "Remeras",
  },
  {
    id: "RRDA",
    titulo: "Remera Risks and Dreams",
    precio: 2499,
    descripcion: "Lorem ipsum dolor",
    color: "Amarillo",
    talle: "XL",
    stock: 3,
    img: "",
    cantidad: 0,
    categoria: "Remeras",
  },
  {
    id: "BCN",
    titulo: "Buzo Chineze",
    precio: 4630,
    descripcion: "Lorem ipsum dolor",
    color: "Negro",
    talle: "L",
    stock: 3,
    img: "",
    cantidad: 0,
    categoria: "Buzos",
  },
  {
    id: "JBN",
    titulo: "Jacket Bomber",
    precio: 5500,
    descripcion: "Lorem ipsum dolor",
    color: "Negro",
    talle: "S",
    stock: 5,
    img: "",
    cantidad: 0,
    categoria: "Camperas",
  },
];

export const fetchData = async (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      id ? resolve(products.find((p) => p.id === id)) : resolve(products);
    }, 2000);
  });
};

// const fetchData = async () => {
//   try {
//     const res = await fetch("data/data.json"); //"https://api.mercadolibre.com/sites/MLA/search?q=remera"
//     const data = await res.json();

//     setProducts(data); //data.results;
//   } catch (error) {
//     console.log(error);
//   }
// };
