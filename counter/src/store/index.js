import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './counter';
import privercySlice from './privacy';


const counterStore = configureStore({
  reducer: {
    privercy:privercySlice.reducer,
    counter: counterSlice.reducer
  }
})

export default counterStore;




///BY USING CREATE STORE MEHTOD

// const intial_value = { counter: 0, privercy: true }
// const counterReducer = (store = intial_value, action) => {

//   if (action.type === "Increment") {
//     return { ...store, counter: store.counter + 1 }

//   } if (action.type === "Decrement") {
//     return { ...store, counter: store.counter - 1 }
//   }
//   if (action.type === "Add") {
//     return { ...store, counter: store.counter + (Number(action.payload.value)) }
//   }
//   if (action.type === "Sub") {
//     return { ...store, counter: store.counter - (Number(action.payload.value)) }
//   }
//   if (action.type === "Change") {
//     return { ...store, privercy: !store.privercy }
//   }
//   return store;
// }

// const counterstore = createStore(counterReducer);
// export default counterstore;