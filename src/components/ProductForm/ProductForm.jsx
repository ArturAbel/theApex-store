import { useEffect, useState } from "react";
import useForm from "../../hooks/useForm";

import "./ProductForm.css";

export const ProductForm = ({
  handleDisplayForm,
  handleFormAction,
  product,
  text,
}) => {
  const { inputProduct, setInputProduct, handleInputChange } = useForm({});
  const { name, type, rate, color, image, description } = inputProduct;

  useEffect(() => {
    setInputProduct(product);
  }, []);

  return (
    <div className="product-form-container">
      <h4 className="product-form-title">{text} Product</h4>
      <form className="product-form">
        <div className="product-form-input-container">
          <input
            className="product-form-input"
            onChange={handleInputChange}
            placeholder="Product Name"
            value={name}
            type="name"
            name="name"
          />
          <input
            placeholder='Type ("trail" or "water proof")'
            className="product-form-input"
            onChange={handleInputChange}
            value={type}
            type="text"
            name="type"
          />
          <input
            className="product-form-input product-rate"
            onChange={handleInputChange}
            placeholder="Rate €"
            type="number"
            value={rate}
            name="rate"
            min={0}
          />
          <input
            className="product-form-input"
            onChange={handleInputChange}
            placeholder="Color"
            value={color}
            type="text"
            name="color"
          />
          <input
            className="product-form-input"
            onChange={handleInputChange}
            placeholder="Image URL"
            value={image}
            name="image"
            type="text"
          />
          <textarea
            className="product-form-input product-description"
            onChange={handleInputChange}
            placeholder="Description"
            value={description}
            name="description"
            maxLength={200}
            type="text"
          />
        </div>
      </form>
      <div className="product-form-buttons">
        <button
          className="product-form-button update"
          disabled={!name || !rate}
          onClick={() => {
            handleFormAction(inputProduct);
            handleDisplayForm();
          }}
        >
          {text}
        </button>
        <button
          className="product-form-button remove"
          onClick={handleDisplayForm}
        >
          cancel
        </button>
      </div>
    </div>
  );
};
