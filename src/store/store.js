import { configureStore } from '@reduxjs/toolkit';
import { cartReducer } from './reducers/cartReducer';

// configureStore는 기존에 우리가 코딩해서 넣어야 했던 것들을 다 대신 해준다!
// 해당 링크에서 확인: https://redux.js.org/usage/configuring-your-store#problems-with-this-approach 
export default configureStore({
  reducer: {
    cartList: cartReducer,
  },
});

// 기존 리덕스에서 최신 리덕스로 옮기는 관련 문서
// https://redux.js.org/usage/migrating-to-modern-redux

// {cartList: [{},{}]}