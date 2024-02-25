import { configureStore } from '@reduxjs/toolkit';

const counterStore = configureStore({
   reducer:
    {counter:0,
        privercy:true
    }
})

export default counterStore;