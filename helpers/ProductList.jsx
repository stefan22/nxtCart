import Product from "../components/product/";

const ProductList = props => {
  return (
    <div className="product-list">
      {props.products.map((product, index) => (
        <Product product={product} key={index} />
      ))}
    </div>
  );
};
export default ProductList;
