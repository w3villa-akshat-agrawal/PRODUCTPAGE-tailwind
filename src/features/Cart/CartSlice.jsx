import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    AddtoCart: (state, action) => {
      state.value.push(action.payload); // Append to cart instead of replacing
    },
    updateCount: (state, action) => {
    const { id, newCount } = action.payload;
    const item = state.value.find((item) => item.id === id);
    if (item) {
      item.productCount = newCount;
    }
  },
  removeItem : (state,action) =>{
    const id = action.payload;
    state.value = state.value.filter((item)=> item.id != id)
  }
}
});

export const { AddtoCart,updateCount,removeItem } = cartSlice.actions;

export default cartSlice.reducer;
