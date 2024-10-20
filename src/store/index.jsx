import { configureStore } from '@reduxjs/toolkit';
import notice from './modules/noticeSlice';
import product from './modules/productSlice';
import page from './modules/pageSlice';
import customer from './modules/customerSlice';
import cart from './modules/cartSlice';
import auth from './modules/authSlice';

export const store = configureStore({
    reducer: {
        notice,
        product,
        page,
        customer,
        cart,
        auth,
    },
});
