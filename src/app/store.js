import { configureStore } from "@reduxjs/toolkit";
import PersonalInfoSlice from "./features/PersonalInfoSlice";

export default configureStore({
  reducer: {
    personalInfo: PersonalInfoSlice,
  },
});
