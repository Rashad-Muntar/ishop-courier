import { configureStore } from '@reduxjs/toolkit';
import { phoneNumberReducer } from './Actions/OtpAction';
import { locationReducer } from './Actions/locationAction';
import { locationDetailReducer } from './Actions/locationDetails';
import { authReducer } from './Actions/auth';
import { cartReducer } from './Actions/cart';
import { checkoutReducer } from './Actions/checkout';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';

const reducers = combineReducers({
    // phoneNumber: phoneNumberReducer,
    // cart: cartReducer,
    // checkOut: checkoutReducer,
    location: locationReducer,
    // locationDetail: locationDetailReducer
    auth: authReducer
    // order: userOrdersReducer,
});
  
// const persistConfig = {
//     key: 'root',
//     storage: AsyncStorage,
//     whitelist: ['cart', 'order', 'account'],
//   };
  
//   const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
    reducer: reducers,
    devTools: true,
    middleware: [thunk],
});

export default store;