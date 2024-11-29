import { createSlice } from '@reduxjs/toolkit';
import { OptionList } from '@/types/optionList';

const initialState: OptionList = {
  optionList: {
		//# 여기서 부터 optionList의 초기값을 각각의 컴포넌트에서 설정할수 있도록 만들기
    linkButton: {},
};

const optionSlices = createSlice({
  name: 'option',
  initialState: initialState,
  reducers: {
    setOptionList: (state, action) => {
      state.optionList = action.payload.data;
    },
  },
});

export const { setOptionList } = optionSlices.actions;
export default optionSlices.reducer;
