import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const createProduct = (productData) => {
  return API.post("/products", productData);
};

export const getProducts = () => {
  return API.get("/products");
};

export const getProduct = (id) => {
  return API.get(`/products/${id}`);
};

export const updateProduct = (id, productData) => {
  return API.put(`/products/${id}`, productData);
};

export const deleteProduct = (id) => {
  return API.delete(`/products/${id}`);
};