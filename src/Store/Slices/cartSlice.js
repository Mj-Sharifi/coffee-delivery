import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    removeItem: (state, action) => {
      state.list = state.list?.filter((e) => {
        if (e.id == action.payload) {
          return false;
        }
        return true;
      });
    },
    decreaseQunatity: (state, action) => {
      state.list = state.list?.filter((e) => {
        if (e.id == action.payload) {
          e.quantity--;
          return e.quantity !== 0;
        }
        return true;
      });
    },
    increaseQuantity: (state, action) => {
      state.list = state.list?.map((e) => {
        if (e.id == action.payload) {
          e.quantity++;
          return e;
        }
        return e;
      });
    },
    addToList: (state, action) => {
      let add = true;
      state.list = state.list?.map((e) => {
        if (e.id == action.payload.item.id) {
          e.quantity += action.payload.quantity;
          add = false;
          return e;
        }
        return e;
      });
      add &&
        state.list.push({
          ...action.payload.item,
          quantity: action.payload.quantity,
        });
    },
  },
});
export const { removeItem, increaseQuantity, decreaseQunatity, addToList } =
  cartSlice.actions;
export default cartSlice.reducer;
