import { createSlice } from '@reduxjs/toolkit';
// import localStorage from 'localStorage';
const initialState = {
  authenticate: false,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthenticate: (state, action) => {
      state.authenticate = action.payload;
      localStorage.setItem('isAuthenticate', true);
    },
    getAuthenticate: state => {
      state.loading = true;
      state.error = null;
    },
  },
});

export const { setAuthenticate } = authSlice.actions;

export default authSlice.reducer;
