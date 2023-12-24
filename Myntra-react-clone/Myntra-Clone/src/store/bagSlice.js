import { createSlice } from "@reduxjs/toolkit";


const bagSlice = createSlice({
  name: "bag",
  initialState: [],
  reducers: {
    addtoBag: (state, actions) => {
      state.push(actions.payload);
    },
    removeFromBag: (state, actions) => {
      return state.filter((itemId) => itemId !== actions.payload);
    },
  },
});

export default bagSlice;
export const bagActions = bagSlice.actions;



