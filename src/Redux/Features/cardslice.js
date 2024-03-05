import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchDishes = createAsyncThunk(
  "data/fetchDishes",
  async (_, { rejectWithValue }) => {
    try {
      const resp = await axios.get(
        "https://run.mocky.io/v3/db0018c8-5982-4d89-a54f-f51fe14d3c89"
      );
      console.log("jsdfsj", resp.data.data[0]);
      return resp.data.data[0];
    } catch (error) {
      console.log("error", error);
      rejectWithValue(error.response.data);
    }
  }
);

const dataSlice = createSlice({
  name: "data",
  initialState: {
    categories: [],
    dishes: {},
    restaurant: { name: "" },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDishes.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchDishes.fulfilled, (state, action) => {
        state.isLoading = false;
        let categories = [];
        let dishes = {};
        const data = action.payload;
        state.restaurant.name = data?.restaurant_name;
        //looping data and setting category and dishes to seperate states f
        for (let i = 0; i < data?.table_menu_list?.length; i++) {
          let currentCat = data?.table_menu_list[i];
          categories.push({ ...currentCat, category_dishes: [] });
          dishes = {
            ...dishes,
            [data?.table_menu_list[i]?.menu_category_id]:
              data?.table_menu_list[i]?.category_dishes,
          };
          state.categories = categories;
          state.dishes = dishes;
        }
      })
      .addCase(fetchDishes.rejected, (state) => {
        state.isLoading = false;
      });
  },
});
export const { addCase } = dataSlice.actions;
export default dataSlice.reducer;
