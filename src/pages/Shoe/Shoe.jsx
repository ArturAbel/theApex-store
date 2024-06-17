import { useDataContext } from "../../context/DataContext";
import { Loader } from "../../components/Loader/Loader";
import { LuChevronDown } from "react-icons/lu";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import "./Shoe.css";

export const Shoe = () => {
  const [performance, sePerformance] = useState(false);
  const [shipping, setShipping] = useState(false);
  const { products, loading } = useDataContext();
  const [details, setDetails] = useState(true);
  const [data, setData] = useState([]);
  const { id } = useParams();

  const product = products.find((product) => product.id === id);

  useEffect(() => {
    setData(product);
  }, []);

  const { name, image, rate, color, description } = product || { data };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <section className="shoe-section">
          <div className="shoe-image-container">
            <img src={image} alt="image" />
          </div>
          <div className="shoe-content-container">
            <h4 className="shoe-content-name">{name}</h4>
            <h4 className="shoe-content-color">{color}</h4>
            <h4 className="shoe-content-price">€ {rate}</h4>
            <button className="shoe-content-button">Add to Cart</button>
            <div className="shoe-content-sub">
              <h4
                onClick={() => setDetails((previous) => !previous)}
                className="shoe-content-subtitle"
              >
                details <LuChevronDown className="shoe-content-chevron" />
              </h4>
              {details && (
                <div className="shoe-content-description">{description}</div>
              )}
              <h4
                onClick={() => sePerformance((previous) => !previous)}
                className="shoe-content-subtitle"
              >
                performance features
                <LuChevronDown className="shoe-content-chevron" />
              </h4>
              {performance && (
                <div className="shoe-content-description">
                  <p>
                    <strong> Ultra Packable</strong>
                    <br />
                    Lightweight materials make The Apex easy to pack for any
                    adventure.
                  </p>
                  <p>
                    <strong>Water Friendly</strong> <br />
                    Utilizes AirTech™ and Drainsole™ technologies, ensuring you
                    can get wet and dry quickly.
                  </p>
                  <p>
                    <strong>Quick Dry</strong> <br />
                    Equipped with drainage holes, The Apex sneakers offer
                    quick-drying capabilities.
                  </p>
                </div>
              )}
              <h4
                onClick={() => setShipping((previous) => !previous)}
                className="shoe-content-subtitle"
              >
                shipping <LuChevronDown className="shoe-content-chevron" />
              </h4>
              {shipping && (
                <div className="shoe-content-description">
                  <p>
                    <strong>Standard Shipping:</strong> Typically takes 3 to 6
                    business days.
                  </p>
                  <p>
                    <strong>Asia, Australia, and Canada:</strong> Expect 7 to 10
                    business days.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>
      )}
    </>
  );
};
