import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://63d502cdc52305feff6c5fea.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/contacts');
      return data;
    } catch (error) {
      toast.error('Something was wrong!');
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, phone }, thunkAPI) => {
    try {
      const { data } = await axios.post('/contacts', { name, phone });
      toast.info(`${data.name} added to contacts.`);
      return data;
    } catch (error) {
      toast.error('Something was wrong!');
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.delete(`/contacts/${id}`);
      toast.info(`${data.name} removed from contacts.`);
      return data;
    } catch (error) {
      toast.error('Something was wrong!');
      return thunkAPI.rejectWithValue(error);
    }
  }
);
