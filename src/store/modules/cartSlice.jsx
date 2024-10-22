import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    carts: [],
    wishLists: [],

    cartsTotalPrice: 0,
    wishListTotalPrice: 0,

    cartTotalCnt: 0,
    wishListTotalCnt: 0,
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        //--------------------------------------------------------------
        // 카트
        // 적재 (carts에 이미 상품 존재하면 count만 증가 / 없으면 추가)
        addCart: (state, action) => {
            const findId = state.carts.find((item) => item.id === Number(action.payload.id));
            if (findId !== '' && findId !== undefined) {
                state.carts = state.carts.map((item) =>
                    item.id === action.payload.id
                        ? { ...item, count: item.count + 1, totalPrice: (item.count + 1) * action.payload.price }
                        : item
                );
            } else {
                state.carts = [...state.carts, { ...action.payload, isChoice: false, count: 1, totalPrice: action.payload.price }];
            }
            state.cartTotalCnt = state.carts.length;
        },
        // 삭제
        deleteCart: (state, action) => {
            state.carts = state.carts.filter((item) => item.id !== action.payload);
        },
        // 전체 삭제
        delAllCart: (state) => {
            state.carts = [];
            state.cartsTotalPrice = 0;
            state.cartTotalCnt = 0;
        },
        // 총 가격
        totalCartPrice: (state) => {
            state.cartsTotalPrice = state.carts.reduce((sum, item) => sum + item.totalPrice, 0);
        },
        // 상품 선택 (카트 적재할 때 isChoice 추가, action : 토글 수정)
        choiceCart: (state, action) => {
            state.carts = state.carts.map((item) =>
                item.id === action.payload.id ? { ...item, isChoice: !action.payload.isChoice } : item
            );
        },
        // 체크박스 선택된 항목 삭제
        choiceDelCart: (state) => {
            state.carts = state.carts.filter((item) => item.isChoice !== true);
        },
        // 항목별 수량
        cartCount: (state, action) => {
            const { id, count } = action.payload;
            if (action.payload.calcul === '-') {
                if (action.payload.count > 1)
                    state.carts = state.carts.map((item) => (item.id === id ? { ...item, count: count - 1 } : item));
            } else if (action.payload.calcul === '+') {
                state.carts = state.carts.map((item) => (item.id === id ? { ...item, count: count + 1 } : item));
            }
        },
        // 항목별 금액
        cartTotalPrice: (state, action) => {
            const { id, totalPrice } = action.payload;
            state.carts = state.carts.map((item) => (item.id === id ? { ...item, totalPrice } : item));
        },
        //--------------------------------------------------------------
        // 위시리스트
        // 적재
        addWishList: (state, action) => {
            const findId = state.wishLists.find((item) => item.id === Number(action.payload.id));
            if (findId !== '' && findId !== undefined) {
                state.wishLists = state.wishLists.map((item) =>
                    item.id === action.payload.id
                        ? { ...item, count: item.count + 1, totalPrice: (item.count + 1) * action.payload.price }
                        : item
                );
            } else {
                state.wishLists = [...state.wishLists, { ...action.payload, isChoice: false, count: 1, totalPrice: action.payload.price }];
            }
            state.wishListTotalCnt = state.wishLists.length;
        },
        // 삭제
        deleteWishList: (state, action) => {
            state.wishLists = state.wishLists.filter((item) => item.id !== action.payload);
        },
        // 전체 삭제
        delAllWishList: (state) => {
            state.wishLists = [];
        },
        // 총 가격
        totalWishListPrice: (state) => {
            state.wishListTotalPrice = state.wishLists.reduce((sum, item) => sum + item.totalPrice, 0);
        },
        // 상품 선택 (카트 적재할 때 isChoice 추가, action : 토글 수정)
        choiceWishList: (state, action) => {
            state.carts = state.carts.map((item) =>
                item.id === action.payload.id ? { ...item, isChoice: !action.payload.isChoice } : item
            );
        },
        // 체크박스 선택된 항목 삭제
        choiceDelWishList: (state) => {
            state.carts = state.carts.filter((item) => item.isChoice !== true);
        },
        // 항목별 수량
        wishListCount: (state, action) => {
            const { id, count } = action.payload;
            if (action.payload.calcul === '-') {
                if (action.payload.count > 1)
                    state.carts = state.carts.map((item) => (item.id === id ? { ...item, count: count - 1 } : item));
            } else if (action.payload.calcul === '+') {
                state.carts = state.carts.map((item) => (item.id === id ? { ...item, count: count + 1 } : item));
            }
        },
        // 항목별 금액
        wishListTotalPrice: (state, action) => {
            const { id, totalPrice } = action.payload;
            state.carts = state.carts.map((item) => (item.id === id ? { ...item, totalPrice } : item));
        },
        //--------------------------------------------------------------
        // 상품
        // 초기화(기존 data 그대로)
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
        //--------------------------------------------------------------
    },
});

export const {
    addCart,
    deleteCart,
    delAllCart,
    totalCartPrice,
    choiceCart,
    choiceDelCart,
    cartCount,
    cartTotalPrice,

    addWishList,
    deleteWishList, // 없음
    delAllWishList, // 없음
    totalWishListPrice,
    choiceWishList, // 없음
    choiceDelWishList, // 없음
    wishListCount, // 없음
    wishListTotalPrice, // 없음

    // resetCart,
    // sortCart,
    // searchCart,
} = cartSlice.actions;
export default cartSlice.reducer;

/*
함수 이름 수정
addCart -> cartAdd
deleteCart -> cartDelete
delAllCart -> cartDeleteAll
totalCartPrice -> cartTotalPrice
choiceCart -> cartSelect
choiceDelCart -> cartSelectDelete
cartTotalPrice -> cartItemsTotalPrice

addWishList -> wishListAdd
deleteWishList -> wishListDelete
delAllWishList -> wishListDeleteAll
totalWishListPrice -> wishListTotalPrice
choiceWishList -> wishListSelect
choiceDelWishList -> wishListSelectDelete
wishListTotalPrice -> wishListItemsTotalPrice


삭제할 때 총 금액과 총 개수도 수정되도록 처리 (cart, wishList 둘다)

장바구니 데이터 없을 때에도 빈 화면이 나옴
*/
