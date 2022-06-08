import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({ greeting }) => {
  return (
    <section className="py-5" id="products">
      <h1 className="title-primary mb-5">{greeting}</h1>
      <ItemList></ItemList>
    </section>
  );
};

export default ItemListContainer;
