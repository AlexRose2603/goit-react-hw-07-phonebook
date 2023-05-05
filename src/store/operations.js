import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL =
  'https://64553f02a74f994b33561f81.mockapi.io/mycontacts/api/';

export const fetchContacts = createAsyncThunk(
  'mycontacts/fetchContacts',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/mycontacts');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'mycontacts/addContact',
  async ({ name, phone }, thunkAPI) => {
    try {
      const response = await axios.post('/mycontacts', { name, phone });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'mycontacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/mycontacts/${contactId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
