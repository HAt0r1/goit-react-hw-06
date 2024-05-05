import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    filter: "",
  },
  reducers: {
    changeFilter: {
      reducer(state, action) {
        state.filter = action.payload;
      },
      prepare(name) {
        return {
          payload: name,
        };
      },
    },
  },
});

export const { changeFilter } = filterSlice.actions;
export default filterSlice.reducer;