import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    currentPages: [],
    currentPage: 1,
    postofPage: 10, // 페이지당 포스트 개수
    pageNumber: 0,
};

export const pageSlice = createSlice({
    name: 'page',
    initialState,
    reducers: {
        pagetoPost: (state, action) => {
            const { dataList, page } = action.payload;
            state.currentPage = page;
            const totalPost = dataList.length;
            const lastPost = state.currentPage * state.postofPage;
            const firstPost = lastPost - state.postofPage;
            state.currentPages = dataList.slice(firstPost, lastPost);
            state.pageNumber = Math.ceil(totalPost / state.postofPage);
        },
    },
});

export const { pagetoPost } = pageSlice.actions;
export default pageSlice.reducer;
