import { AdminShoeTab } from "../../components/AdminShoeTab/AdminShoeTab";
import { ProductForm } from "../../components/ProductForm/ProductForm";
import { ErrorFetch } from "../../components/ErrorFetch/ErrorFetch";
import { Overlay } from "../../components/Overlay/Overlay";
import { useDataContext } from "../../context/DataContext";
import { ERROR_MESSAGE } from "../../utilities/variables";
import { Loader } from "../../components/Loader/Loader";
import useForm from "../../hooks/useForm";
import { useState } from "react";
import { nanoid } from "nanoid";

import "./Admin.css";

export const Admin = () => {
  const { handleUpdateProduct, handleAddProduct, products, loading, error } =
    useDataContext();
  const [initialProduct, setInitialProduct] = useState(null);
  const [displayUpdate, setDisplayUpdate] = useState(false);
  const [displayAdd, setDisplayAdd] = useState(false);
  const { inputProduct, setInputProduct } = useForm();
  const [query, setQuery] = useState("");



  const handleDisplayAdd = () => {
    setDisplayAdd((previous) => !previous);
  };

  const handleDisplayUpdate = () => {
    setDisplayUpdate((previous) => !previous);
  };

  // Add product
  const addProduct = (inputProduct) => {
    const newProduct = {
      id: nanoid(),
      ...inputProduct,
    };
    handleAddProduct(newProduct);
  };

  // Update product
  const updateProduct = (inputProduct) => {
    const updatedProduct = {
      ...inputProduct,
    };
    handleUpdateProduct(updatedProduct);
  };

  // Get search input
  const handleQuery = (e) => {
    setQuery(e.target.value);
  };

  return (
    <section className="admin-section">
      {displayAdd && (
        <>
          <Overlay />
          <ProductForm
            handleDisplayForm={handleDisplayAdd}
            setInputProduct={setInputProduct}
            handleFormAction={addProduct}
            product={inputProduct} //new
            text={"Add"}
          />
        </>
      )}
      {displayUpdate && (
        <>
          <Overlay />
          <ProductForm
            handleDisplayForm={handleDisplayUpdate}
            setInputProduct={setInputProduct}
            handleFormAction={updateProduct}
            product={initialProduct} //old product
            text={"Update"}
          />
        </>
      )}
      <h4 className="admin-title">admin page</h4>
      <div className="admin-actions-container">
        <input
          className="admin-search-bar"
          placeholder="Search here"
          type="text"
          onChange={handleQuery}
        />
        <button onClick={handleDisplayAdd} className="admin-add-button">
          Add Product
        </button>
      </div>
      {loading ? (
        <Loader />
      ) : error ? (
        <ErrorFetch  message={ERROR_MESSAGE}/>
      ) : (
        <div className="admin-panel-container">
          {products
            .filter((product) => {
              return query.toLowerCase() === ""
                ? product
                : product.name.toLowerCase().includes(query);
            })
            .map((product) => {
              return (
                <AdminShoeTab
                  handleDisplayUpdate={handleDisplayUpdate}
                  setInitialProduct={setInitialProduct}
                  product={product}
                  key={product.id}
                />
              );
            })}
        </div>
      )}
    </section>
  );
};
