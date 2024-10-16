import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    carts: [],
    wishLists: [],
    cartsTotal: 0,
    wishListTotal: 0,
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        // 카트 적재
        addCart: (state, action) => {
            state.carts = [...state.carts, { ...action.payload, isChoice: false, count: 1, totalPrice: 0 }];
        },
        // 카트 삭제
        deleteCart: (state, action) => {
            state.carts = state.carts.filter((item) => item.id !== action.payload);
        },
        // 카트 전체 삭제
        delAllCart: (state, action) => {
            state.carts = [];
        },
        // 카트 총 가격
        totalCart: (state, action) => {
            state.cartsTotal = state.carts.reduce((sum, item) => sum + item.totalPrice, 0);
        },
        // 선택 (카트 적재할 때 isChoice 추가, action : 토글 수정)
        choiceCart: (state, action) => {
            state.carts = state.carts.map((item) =>
                item.id === action.payload.id ? { ...item, isChoice: !action.payload.isChoice } : item
            );
        },

        // 위시리스트 적재
        addWishList: (state, action) => {
            state.wishLists = [...state.wishLists, { ...action.payload, isChoice: false, count: 1, totalPrice: 0 }];
        },

        // 체크박스 선택된 항목 삭제
        choiceDel: (state, action) => {
            state.carts = state.carts.filter((item) => item.isChoice !== true);
        },

        // 카트 초기화(기존 data 그대로)
        // resetCart: (state, action) => {
        //     state.products = productData;
        // },

        // 정렬
        // sortCart: (state, action) => {
        //     if (action.payload !== '') {
        //         state.products = [...state.products].sort((a, b) => (a[action.payload] > b[action.payload] ? 1 : -1));
        //     }
        // },
        // 카트 검색
        // searchCart: (state, action) => {
        //     state.products = productData.filter((item) => item.description.toLowerCase().includes(action.payload.toLowerCase()));
        // },

        // 카트 항목별 수량
        cartCount: (state, action) => {
            const { id, count } = action.payload;
            if (action.payload.calcul === '-') {
                if (action.payload.count > 1)
                    state.carts = state.carts.map((item) => (item.id === id ? { ...item, count: count - 1 } : item));
            } else if (action.payload.calcul === '+') {
                state.carts = state.carts.map((item) => (item.id === id ? { ...item, count: count + 1 } : item));
            }
        },
        // 카드 항목별 금액
        cartTotalPrice: (state, action) => {
            const { id, totalPrice } = action.payload;
            state.carts = state.carts.map((item) => (item.id === id ? { ...item, totalPrice } : item));
        },
    },
});

export const {
    addCart,
    deleteCart,
    delAllCart,
    totalCart,
    sortCart,
    choiceCart,
    choiceDel,
    resetCart,
    searchCart,
    cartCount,
    cartTotalPrice,
    addWishList,
} = cartSlice.actions;
export default cartSlice.reducer;
