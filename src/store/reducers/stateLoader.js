import { createSlice } from '@reduxjs/toolkit';

const stateLoader = createSlice({
    name: 'loader',
    initialState: {
        isLoadModel: false,
        isLoadTextures: false,
    },
    reducers: {
        setModelLoad: (state, action) => {
            state.isLoadModel = action.payload;
        },
        setTextureLoad: (state, action) => {
            state.isLoadTextures = action.payload;
        }
    }
});

export const { setModelLoad, setTextureLoad } = stateLoader.actions;

export default stateLoader.reducer;