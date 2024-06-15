import { Link } from "react-router-dom";
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
          return (
            <Link
              className="footwear-shoe-link"
              to={product.id}
              key={product.id}
              params={{}}
            >
              <Product {...product} />;
            </Link>
          );
        })}
      </div>
    </section>
  );
};
