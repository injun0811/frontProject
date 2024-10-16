import { createSlice } from '@reduxjs/toolkit';
import noticeData from '../../assets/api/noticedata';

const initialState = {
    notices: noticeData,
};

export const noticeSlice = createSlice({
    name: 'notice',
    initialState,
    reducers: {},
});

// export const {} = noticeSlice.actions;
export default noticeSlice.reducer;
