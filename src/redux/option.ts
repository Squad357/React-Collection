import { createSlice } from '@reduxjs/toolkit';
import { OptionList } from '@/types/optionList';

const initialState: OptionList = {
  optionList: {
    linkButton: {
      label: '',
      default: 0,
      items: [],
    },
    linkButtonGap: {
      label: '',
      default: 0,
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
    setLinkButtonDefault: (state, action) => {
      if (state.optionList.linkButton) {
        state.optionList.linkButton.default = action.payload;
      }
    },
    setLinkButtonGapDefault: (state, action) => {
      if (state.optionList.linkButtonGap) {
        state.optionList.linkButtonGap.default = action.payload;
      }
    },
  },
});

export const { setOptionList, setLinkButtonDefault, setLinkButtonGapDefault } =
  optionSlices.actions;
export const optionReducer = optionSlices.reducer;
