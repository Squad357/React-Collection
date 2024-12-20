import { configureStore } from '@reduxjs/toolkit';
import { optionReducer } from './option';

export const store = configureStore({
  reducer: {
    option: optionReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
