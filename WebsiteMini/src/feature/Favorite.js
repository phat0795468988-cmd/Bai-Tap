import { createSlice } from "@reduxjs/toolkit";

const user = JSON.parse(localStorage.getItem("user"));
const wishlistKey = `wishlist_${user?.id}`;

const initialState = {
  list: user ? JSON.parse(localStorage.getItem(wishlistKey)) || [] : [],
  selected: [],
};

const Favorite = createSlice({
  name: "favorite",

  initialState,

  reducers: {
    //Chọn tất cả sản phẩm
    selectAll: (state) => {
      if (state.selected.length === state.list.length) {
        state.selected = [];
      } else {
        state.selected = state.list.map((item) => item.id);
      }
    },
    //Chọn một sản phẩm
    selectItem: (state, action) => {
      const id = action.payload;

      if (state.selected.includes(id)) {
        state.selected = state.selected.filter(
          (itemId) => itemId !== id
        );
      } else {
        state.selected.push(id);
      }
    },

  },
});

export const { selectAll, selectItemm } = Favorite.actions;

export default Favorite.reducer;