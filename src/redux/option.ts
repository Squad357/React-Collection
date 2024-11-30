import { createSlice } from '@reduxjs/toolkit';
import { OptionList } from '@/types/optionList';

const initialState: OptionList = {
  optionList: {
    linkButton: {
      defaultCount: 0,
      items: [],
    },
  },
};

export const optionSlices = createSlice({
  name: 'option',
  initialState: initialState,
  reducers: {
    setOptionList: (state, action) => {
      state.optionList = action.payload;
    },
    setDefaultCount: (state, action) => {
      if (state.optionList.linkButton) {
        state.optionList.linkButton.defaultCount = action.payload;
      }
    },
  },
});

export const { setOptionList, setDefaultCount } = optionSlices.actions;
export const optionReducer = optionSlices.reducer;
