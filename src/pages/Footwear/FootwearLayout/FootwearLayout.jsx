import { ErrorFetch } from "../../../components/ErrorFetch/ErrorFetch";
import { useDataContext } from "../../../context/DataContext";
import { Loader } from "../../../components/Loader/Loader";
import { ALL_SHOES, ERROR_MESSAGE } from "../../../utilities/variables";
import { Product } from "../Product/Product";
import { Link } from "react-router-dom";


import "./FootwearLayout.css";

export const FootwearLayout = ({ text }) => {
  const { loading, products, error } = useDataContext();

  const filteredProducts = products.filter((product) => {
    if (text === ALL_SHOES) {
      return products;
    }
    return product.type === text;
  });

  return (
    <section className="footwear-layout-section">
      <h4 className="footwear-layout-title">{text}</h4>
      {loading ? (
        <Loader />
      ) : error ? (
        <ErrorFetch message={ERROR_MESSAGE}/>
      ) : (
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
      )}
    </section>
  );
};
