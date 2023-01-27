import { createSlice } from "@reduxjs/toolkit";

const personalInfoSlice = createSlice({
  name: "personalInfo",
  initialState: {
    name: "",
    email: "",
    phone: "",
  },
  reducers: {
    submitInputs: (state, { payload }) => {
      state.name = payload.name;
      state.email = payload.email;
      state.phone = payload.phone;
    },
  },
});

export const { submitInputs } = personalInfoSlice.actions;
export default personalInfoSlice.reducer;
