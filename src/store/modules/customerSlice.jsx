import { createSlice } from '@reduxjs/toolkit';
import customerData from '../../assets/api/customerdata';

const initialState = {
    customers: customerData,
    updateCust: {},
};

const no = customerData.length + 1;

export const customerSlice = createSlice({
    name: 'customer',
    initialState,
    reducers: {
        custDel: (state, action) => {
            state.customers = state.customers.filter((item) => item.id !== action.payload);
        },
        custLoad: (state, action) => {
            state.updateCust = action.payload;
        },
        custUpdate: (state, action) => {
            const { name, title, content } = action.payload;
            state.customers = state.customers.map((item) => (item.id === action.payload.id ? { ...item, name, title, content } : item));
        },
        custSave: (state, action) => {
            const { title, name, content, date } = action.payload;
            state.customers = [...state.customers, { id: no, title, name, content, date }];
        },
    },
});

export const { custDel, custLoad, custUpdate, custSave } = customerSlice.actions;
export default customerSlice.reducer;
