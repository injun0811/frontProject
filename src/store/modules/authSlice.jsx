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
                localStorage.setItem('loginData', JSON.stringify(state.loginUser));
            } else {
                state.login = false;
                state.loginUser = {};
                localStorage.removeItem('loginData');
            }
        },
        logoutChk: (state) => {
            state.loginUser = {};
            state.login = false;
            localStorage.removeItem('loginData');
        },
        join: (state, action) => {
            state.accounts = [...state.accounts, { ...action.payload, id: no, admin: false }];
        },
        defaultDataUpdate: (state, action) => {
            state.accounts = state.accounts.map((acnt) => (acnt.id === action.payload.id ? action.payload : acnt));
            state.loginUser = { ...action.payload };
            localStorage.setItem('loginData', JSON.stringify(action.payload));
        },
    },
});

export const { loginChk, logoutChk, join, defaultDataUpdate } = authSlice.actions;
export default authSlice.reducer;
