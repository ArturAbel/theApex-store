import { useDataContext } from "../../../context/DataContext";
import { ALL_SHOES } from "../../../utilities/variables";
import { Product } from "../Product/Product";


import "./FootwearLayout.css";

export const FootwearLayout = ({ text }) => {
  const { products } = useDataContext();

  const filteredProducts = products.filter((product) => {
    if (text === ALL_SHOES) {
      return products;
    }
    return product.type === text;
  });

  return (
    <section className="footwear-layout-section">
      <h4 className="footwear-layout-title">{text}</h4>
      <div className="footwear-layout">
        {filteredProducts.map((product) => {
          const { image, name, type, rate, id } = product;
          return (
            <Product
              key={id}
              image={image}
              name={name}
              type={type}
              rate={rate}
            />
          );
        })}
      </div>
    </section>
  );
};
