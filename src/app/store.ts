import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import fotosReducer from "../features/fotosSlice";

export const store = configureStore({
  reducer: {
    fotos: fotosReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
