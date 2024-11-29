import { configureStore } from '@reduxjs/toolkit';
import optionSlice from './redux';

export const store = configureStore({
  reducer: {
    option: optionSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
