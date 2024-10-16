import { createSlice } from '@reduxjs/toolkit';
import productData from '../../assets/api/productdata';

const initialState = {
    products: productData,
    detail: {},
};

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        updateDetail: (state, action) => {
            state.detail = action.payload;
        },
    },
});

export const { updateDetail } = productSlice.actions;
export default productSlice.reducer;
