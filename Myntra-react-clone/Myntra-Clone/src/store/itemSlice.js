import { createSlice } from "@reduxjs/toolkit";


const itemSlice = createSlice({
  name: "items",
  initialState: [],
  reducers: {
    addInitialItems: (store, actions) => {
      return actions.payload;
    },
  },
});

export default itemSlice;
export const itemActions = itemSlice.actions;



