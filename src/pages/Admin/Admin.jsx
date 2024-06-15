import { AdminShoeTab } from "../../components/AdminShoeTab/AdminShoeTab";
import { Overlay } from "../../components/Overlay/Overlay";
import { ProductForm } from "../../components/ProductForm/ProductForm";
import { useDataContext } from "../../context/DataContext";
import { useState } from "react";

import "./Admin.css";

export const Admin = () => {
  const { products, handleAddProduct } = useDataContext();
  const [displayUpdate, setDisplayUpdate] = useState(false);
  const [displayAdd, setDisplayAdd] = useState(false);
  const [product, setProduct] = useState({});

  const handleDisplayAdd = () => {
    setDisplayAdd((previous) => !previous);
  };

  const handleDisplayUpdate = () => {
    setDisplayUpdate((previous) => !previous);
  };

  return (
    <section className="admin-section">
      {displayAdd && (
        <>
          <Overlay />
          <ProductForm handleDisplayForm={handleDisplayAdd} 
          product={""}/>
        </>
      )}
      {displayUpdate && (
        <>
          <Overlay />
          <ProductForm
            handleDisplayForm={handleDisplayUpdate}
            product={product}
          />
        </>
      )}
      <h4 className="admin-title">admin page</h4>
      <button onClick={handleDisplayAdd} className="admin-add-button">
        Add Product
      </button>
      <div className="admin-panel-container">
        {products.map((product) => {
          return (
            <AdminShoeTab
              handleDisplayUpdate={handleDisplayUpdate}
              setProduct={setProduct}
              product={product}
              key={product.id}
            />
          );
        })}
      </div>
    </section>
  );
};
