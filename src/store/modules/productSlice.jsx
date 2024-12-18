import { createSlice } from '@reduxjs/toolkit';
import productData from '../../assets/api/productdata';

const initialState = {
    products: productData,
    detail: {},
    sortProducts: '',
};

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        updateDetail: (state, action) => {
            state.detail = action.payload;
            localStorage.setItem('detail', JSON.stringify(state.detail));
        },
        search: (state, action) => {
            const { search, category } = action.payload;
            if (search !== '') {
                let categoryArray = {};
                if (category === 'caps') categoryArray = state.products.caps;
                if (category === 'dynamic') categoryArray = state.products.dynamic;
                if (category === 'keyring') categoryArray = state.products.keyring;
                if (category === 'lego') categoryArray = state.products.lego;

                state.sortProducts = categoryArray.filter((item) => item.title.toLowerCase().includes(search.toLowerCase()));
            } else state.sortProducts = '';
        },
        // 이름순 정렬
        //categoryArray = [...categoryArray].sort((a, b) => (a[categoryArray] > b[categoryArray] ? 1 : -1));
    },
});

export const { updateDetail, search } = productSlice.actions;
export default productSlice.reducer;
