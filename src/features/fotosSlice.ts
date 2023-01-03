import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import { IState } from "./interfaces";

const initialState: IState = {
  apiKey: "ab3411e4ac868c2646c0ed488dfd919ef612b04c264f3374c97fff98ed253dc9",
  fotos: [],
  choosenFoto: null,
};

export const getFotos = createAsyncThunk("fotos", async () => {
  try {
    const res = await fetch(
      `https://api.unsplash.com/search/photos?page=1&per_page=5&query=nature&client_id=${initialState.apiKey}`
    ).then((data) => data.json());
    return res.results;
  } catch (e) {
    console.error(e);
  }
});

export const calendarSlice = createSlice({
  name: "fotos",
  initialState,
  reducers: {
    setFotoToOpen: (state, action) => {
      state.choosenFoto = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      getFotos.fulfilled,
      (state: any, action: PayloadAction<any>) => {
        state.fotos = action.payload;
      }
    );
  },
});

export const { setFotoToOpen } = calendarSlice.actions;

export const state = (state: RootState) => state.fotos;

export default calendarSlice.reducer;
