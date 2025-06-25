import { createSlice} from "@reduxjs/toolkit";
import { DEFAULT_ITEMS } from "../data/items";

//SLice creation
const itemsSlice = createSlice({
  name: "items",
  initialState: DEFAULT_ITEMS,
  reducers: {
    addinitialItems: (store, action) => {
      return store;
    },
  },
});

export const itemsActions = itemsSlice.actions;
export default itemsSlice;




