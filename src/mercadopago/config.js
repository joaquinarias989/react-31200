// import { useState, useEffect } from "react";

// export default function App() {
//   const [pokes, setPokes] = useState([]);
//   const pokemonID = 1;

//   //const getFetch = async () => {
//   //  const getPokesJson = await fetch("https://pokeapi.co/api/v2/pokemon/");
//   //  const pokeJsonParse = await getPokesJson.json();
//   //  setPokes(pokeJsonParse.results);
//   //};

//   //curl -X POST \
//   //    'https://api.mercadopago.com/checkout/preferences' \
//   //    -H 'Authorization: Bearer YOUR_ACCESS_TOKEN' \
//   //    -H 'Content-Type: application/json' \
//   //    -d '{
//   //  "items": [
//   //    {
//   //      "title": "Dummy Title",
//   //      "description": "Dummy description",
//   //      "picture_url": "http://www.myapp.com/myimage.jpg",
//   //      "category_id": "cat123",
//   //      "quantity": 1,
//   //      "currency_id": "U$",
//   //      "unit_price": 10
//   //    }
//   //  ],
//   //  "payer": {
//   //    "phone": {},
//   //    "identification": {},
//   //    "address": {}
//   //  },
//   //  "payment_methods": {
//   //    "excluded_payment_methods": [
//   //      {}
//   //    ],
//   //    "excluded_payment_types": [
//   //      {}
//   //    ]
//   //  },
//   //  "shipments": {
//   //    "free_methods": [
//   //      {}
//   //    ],
//   //    "receiver_address": {}
//   //  },
//   //  "back_urls": {},
//   //  "differential_pricing": {},
//   //  "tracks": [
//   //    {
//   //      "type": "google_ad"
//   //    }
//   //  ]
//   //}'

//   // acá esta la documentación de mercado pago
//   // https://www.mercadopago.com.ar/developers/es/reference/preferences/_checkout_preferences/post

//   const data = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization:
//         "Aca va su key, que le da mercado pago developer cuando se loguean",
//     },
//     body: JSON.stringify({
//       items: [
//         {
//           title: "Dummy Title",
//           description: "Dummy description",
//           picture_url:
//             "https://www.digitalsport.com.ar/files/products/61018b1d0af10-556975-500x500.jpg",
//           category_id: "cat123",
//           quantity: 2,
//           currency_id: "ARS",
//           unit_price: 10,
//         },
//       ],
//     }),
//   };

//   useEffect(() => {
//     //getFetch();
//     fetch("https://api.mercadopago.com/checkout/preferences", data)
//       .then(function (resp) {
//         return resp.json();
//       })
//       .then((resp) => setPokes(resp.init_point));
//   }, []);

//   console.log(pokes);
//   return (
//     <div className="App">
//       <h1>Hello CodeSandbox</h1>
//       <h2>Start editing to see some magic happen!</h2>
//       <button>
//         <a href={pokes}>Pagar</a>
//       </button>
//       {
//         //pokes.map((poke) => (
//         //<h2 key={poke.name}>{poke.name}</h2>
//         //))
//       }
//     </div>
//   );
// }
