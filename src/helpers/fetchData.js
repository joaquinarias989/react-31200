const products = [
  {
    id: "RMPN",
    titulo: "Remera Phenomenally",
    precio: 2380,
    descripcion: "Lorem ipsum dolor",
    color: "Negro",
    talle: "M",
    stock: 5,
    img: "https://i.ibb.co/Jq4bPGY/shirt-yellow.webp",
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
    img: "https://i.ibb.co/SBYCf9h/tshirt-2.webp",
    cantidad: 0,
    categoria: "Remeras",
  },
  {
    id: "BR",
    titulo: "Buzo Rose",
    precio: 4630,
    descripcion: "Lorem ipsum dolor",
    color: "Negro",
    talle: "L",
    stock: 3,
    img: "https://i.ibb.co/MMnBqr6/buzo-2.webp",
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
    img: "https://i.ibb.co/1G0F6rw/campera.webp",
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
