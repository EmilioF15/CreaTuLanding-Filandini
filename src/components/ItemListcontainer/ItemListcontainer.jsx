import { useEffect, useState } from "react";
import { getProducts, getProductsByCategory } from "../../asyncMock.js";
import ItemList from "../ItemList/ItemList.jsx";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const asyncFunc = categoryId ? getProductsByCategory : getProducts;
    asyncFunc(categoryId)
      .then((response) => {
        setProducts(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [categoryId]);
  return (
    <div>
      <h1>{greeting}</h1>
      <ItemList products={products}></ItemList>
    </div>
  );
};
export default ItemListContainer;
