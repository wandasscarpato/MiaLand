//Componentes
import Item from "./Item";

const ItemList = ({products}) => {
  
  return (
    <section className="productos">
      {products.map((postDetail) => {
        return (
          <div>
            <Item
              key={postDetail.id}
              title={postDetail.title}
              image={postDetail.Image}
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
