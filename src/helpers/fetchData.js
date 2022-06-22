const products = [
  {
    id: "RMPN",
    title: "Remera Phenomenally",
    price: 2380,
    description: "Lorem ipsum dolor",
    color: "Negro",
    size: "M",
    stock: 5,
    img: "https://i.ibb.co/Jq4bPGY/shirt-yellow.webp",
    quantity: 0,
    category: "Remeras",
  },
  {
    id: "RRDA",
    title: "Remera Risks and Dreams",
    price: 2499,
    description: "Lorem ipsum dolor",
    color: "Amarillo",
    size: "XL",
    stock: 3,
    img: "https://i.ibb.co/SBYCf9h/tshirt-2.webp",
    quantity: 0,
    category: "Remeras",
  },
  {
    id: "BR",
    title: "Buzo Rose",
    price: 4630,
    description: "Lorem ipsum dolor",
    color: "Negro",
    size: "L",
    stock: 3,
    img: "https://i.ibb.co/MMnBqr6/buzo-2.webp",
    quantity: 0,
    category: "Abrigos",
  },
  {
    id: "JBN-S",
    title: "Jacket Bomber",
    price: 5500,
    description: "Lorem ipsum dolor",
    color: "Negro",
    size: "S",
    stock: 5,
    img: "https://i.ibb.co/1G0F6rw/campera.webp",
    quantity: 0,
    category: "Abrigos",
  },
];

export const fetchData = async (id, category) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      id
        ? resolve(products.find((p) => p.id === id))
        : category
        ? resolve(products.filter((p) => p.category === category))
        : resolve(products);
    }, 500);
  });
};
