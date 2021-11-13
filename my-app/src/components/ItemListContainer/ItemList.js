//Componentes
import Item from "./Item";

const ItemList = ({ products }) => {
  console.log(products.id);
  return (
    <section className="productos">
      {products.map((postDetail) => {
        return (
          <div>
            <Item
              key={postDetail.id}
              title={postDetail.title}
              image={postDetail.image}
              description={postDetail.description}
              stock={postDetail.stock}
              price={postDetail.price}
              id={postDetail.id}
            />
          </div>
        );
      })}
    </section>
  );
};
export default ItemList;
