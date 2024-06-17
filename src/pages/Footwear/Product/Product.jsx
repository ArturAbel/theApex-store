import "./ProductResponsive.css";
import "./Product.css";

export const Product = ({ image, name, type, rate }) => {
  return (
    <section className="footwear-product-container">
      <div className="footwear-product-image-container">
        <img className="footwear-product-image" src={image} alt="" />
      </div>
      <h4 className="footwear-product-name">{name}</h4>
      <h4 className="footwear-product-type">{type}</h4>
      <h4 className="footwear-product-rate">{`€ ${rate}`}</h4>
    </section>
  );
};
