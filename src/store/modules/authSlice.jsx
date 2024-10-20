import { createSlice } from '@reduxjs/toolkit';
import accountData from '../../assets/api/account';

const initialState = {
    accounts: accountData,
    loginUser: {},
    login: false,
};

const no = accountData.length + 1;

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginChk: (state, action) => {
            const { inputEmail, inputPassword } = action.payload;
            const findEmail = state.accounts.find((item) => item.email === inputEmail);
            if (findEmail.password === inputPassword) {
                state.login = true;
                state.loginUser = findEmail;
            } else {
                state.login = false;
                state.loginUser = {};
            }
        },
        logoutChk: (state) => {
            state.loginUser = {};
            state.login = false;
        },
        join: (state, action) => {
            state.accounts = [...state.accounts, { ...action.payload, id: no, admin: false }];
        },
    },
});

export const { loginChk, logoutChk, join } = authSlice.actions;
export default authSlice.reducer;
