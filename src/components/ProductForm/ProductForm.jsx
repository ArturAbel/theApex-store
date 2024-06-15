import { useState } from "react";

import "./ProductForm.css";

export const ProductForm = ({ handleDisplayForm, product }) => {
  const [name, setName] = useState(product.name);
  const [type, setType] = useState(product.type);
  const [rate, setRate] = useState(product.rate);
  const [color, setColor] = useState(product.color);
  const [image, setImage] = useState(product.image);
  const [description, setDescription] = useState(product.description);

  const handleCancel = () => {};

  return (
    <div className="product-form-container">
      <h4 className="product-form-title">header</h4>
      <form className="product-form" action="submit">
        <div className="product-form-input-container">
          <input
            className="product-form-input"
            type="name"
            placeholder="Product Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="product-form-input"
            type="text"
            placeholder='Type ("trail" or "water proof")'
            value={type}
            onChange={(e) => setType(e.target.value)}
          />
          <input
            className="product-form-input product-rate"
            type="number"
            min={0}
            placeholder="Rate €"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
          />
          <input
            className="product-form-input"
            type="text"
            placeholder="Color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
          <input
            className="product-form-input"
            type="text"
            placeholder="Image URL"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          <textarea
            className="product-form-input product-description"
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
      </form>
      <div className="product-form-buttons">
        <button className="product-form-button update">update</button>
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
