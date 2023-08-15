import { configureStore } from '@reduxjs/toolkit'
import factsReducer from '../slices/factsSlice'
import pictureReducer from '../slices/pictureSlice'

export const store = configureStore({
    reducer: {
        facts: factsReducer,
        pictures: pictureReducer
    }
});