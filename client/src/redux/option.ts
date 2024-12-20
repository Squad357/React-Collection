import { createSlice } from '@reduxjs/toolkit';
import { OptionList } from '@/types/optionList';

const initialState: OptionList = [];

export const optionSlices = createSlice({
  name: 'option',
  initialState: initialState,
  reducers: {
    setOptionList: (state, action) => {
      return action.payload;
    },
    setOptionDefault: (state, action) => {
      const { optionType, defaultValue } = action.payload;
      const option = state.find(item => item.label === optionType);
      if (option) {
        option.default = defaultValue;
      }
    },
  },
});

export const { setOptionList, setOptionDefault } = optionSlices.actions;
export const optionReducer = optionSlices.reducer;
