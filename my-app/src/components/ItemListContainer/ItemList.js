//Componentes
import ItemListContainer from "./ItemListContainer";

//JSON
import PostData from "./data/productos";

const ItemList = () => {
  return (
    <section className="productos">
      {PostData.map((postDetail) => {
        return (
          <div>
            <ItemListContainer
              key={postDetail.id}
              title={postDetail.title}
              image={postDetail.Image}
              description={postDetail.description}
              stock={postDetail.stock}
            />
          </div>
        );
      })}
    </section>
  );
};
export default ItemList;
