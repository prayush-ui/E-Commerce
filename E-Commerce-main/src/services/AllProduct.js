import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const fetchData = createAsyncThunk('api/allproduct', async () => {
    const response = await axios.get('https://fakestoreapi.com/products?limit=6');
    return response;
});
export const fetchcarouselData = createAsyncThunk('api/carouseldata',
async () => {
  const response = await axios.get('https://fakestoreapi.com/products?limit=5');
  // const data = await response.json();
  return response;
}
);
export const fetchUser = createAsyncThunk("api/alluser", async () => {
  const response = await axios.get("https://fakestoreapi.com/users?limit=5");
  return response.data; // Return serializable data only
});
export const fetchSearchProduct = createAsyncThunk('api/searchproduct', async () => {
  const response = await axios.get('https://fakestoreapi.com/products/category/jewelery');
  return response;
});
export const fetchSearchProducts = createAsyncThunk('api/searchdynamicproduct', async (id) => {
  const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
  return response;
});
export const fetchSortProducts = createAsyncThunk('api/sortproduct', async (sort) => {
  const response = await axios.get(`https://fakestoreapi.com/products?sort=${sort}`);
  return response;
});
export const fetchallProducts = createAsyncThunk('api/allproducts', async () => {
  const response = await axios.get('https://api.spoonacular.com/food/search?query=apple&number=2');
  return response;
});