import { configureStore } from '@reduxjs/toolkit'
import rootReducer from "../Reducer/reducerIndex"

const store = configureStore({
    reducer: rootReducer
})

export type RootState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;

export default store;