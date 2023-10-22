import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://64bc15637b33a35a44470407.mockapi.io';

export const fetchFirstPage = createAsyncThunk(
  'adverts/fetchFirst',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`/adverts?page=1&limit=8`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
export const fetchCars = createAsyncThunk(
  'adverts/fetchAll',
  async (page, thunkAPI) => {
    try {
      const response = await axios.get(`/adverts?page=${page}&limit=8`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchCarById = createAsyncThunk(
  'adverts/fetchOne',
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`/adverts/:${id}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchAllCarsForFilter = createAsyncThunk(
  'adverts/fetchForFilter',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/adverts');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
