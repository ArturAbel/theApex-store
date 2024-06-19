import { useDataContext } from "../../context/DataContext";

import "./AdminShoeTab.css";

export const AdminShoeTab = ({
  handleDisplayUpdate,
  setInitialProduct,
  product,
}) => {
  const { handleRemoveProduct } = useDataContext();

  const removeProduct = () => {
    handleRemoveProduct(product);
  };

  const { description, image, name, type, rate, color } = product;

  return (
    <div className="admin-shoe-tab">
      <div className="shoe-tab-name-container">
        <p className="shoe-tab-name">{name}</p>
      </div>
      <div className="shoe-tab-image-container">
        <img className="shoe-tab-image" src={image} alt="image" />
      </div>
      <div className="shoe-tab-type-container">
        <p>{type}</p>
      </div>
      <div className="shoe-tab-color-container">
        <p>{color}</p>
      </div>
      <div className="shoe-tab-rate-container">
        <p>{`€ ${rate}`}</p>
      </div>
      <div className="shoe-tab-description-container">
        <p className="shoe-tab-description">{description}</p>
      </div>
      <div className="shoe-tab-buttons">
        <button
          className="shoe-tab-button update"
          onClick={() => {
            setInitialProduct(product);
            handleDisplayUpdate();
          }}
        >
          update
        </button>
        <button className="shoe-tab-button remove" onClick={removeProduct}>
          remove
        </button>
      </div>
    </div>
  );
};
