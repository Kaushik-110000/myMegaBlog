import { configureStore } from '@reduxjs/toolkit'
import a from '../features/todo/todoSlice'
export const store = configureStore({
    reducer: a,
})