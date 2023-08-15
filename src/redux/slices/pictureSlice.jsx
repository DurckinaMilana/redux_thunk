import { createSlice } from '@reduxjs/toolkit';

const initialState = {pictures:[]};

export const pictureSlice = createSlice({
    name: 'pictures',
    initialState,
    reducers: {
        load: (state, action) => {
            state.pictures.push(action.payload)
        }
    }
})

export const { load } = pictureSlice.actions;
export default pictureSlice.reducer;