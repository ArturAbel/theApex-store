import { createContext, useContext, useEffect, useState } from "react";
import { footwearURL } from "../utilities/variables";
import axios from "axios";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await axios.get(footwearURL);
      setProducts(response.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleAddProduct = async (product) => {
    setLoading(true);
    try {
      await axios.post(footwearURL, product);
      await fetchProducts();
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateProduct = async (product) => {
    setLoading(true);
    try {
      await axios.put(`${footwearURL}/${product.id}`, product);
      await fetchProducts();
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleRemoveProduct = async (product) => {
    setLoading(true);
    try {
      await axios.delete(`${footwearURL}/${product.id}`);
      await fetchProducts();
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <DataContext.Provider
      value={{
        handleRemoveProduct,
        handleUpdateProduct,
        handleAddProduct,
        products,
        loading,
        error,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => {
  return useContext(DataContext);
};
