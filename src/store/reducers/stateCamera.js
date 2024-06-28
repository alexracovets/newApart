import { createSlice } from '@reduxjs/toolkit';

const stateCamera = createSlice({
    name: 'camera',
    initialState: {
        position: [-6.95, 1.319, 0.598],
        orbitMode: false,
        autoRotate: false,
    },
    reducers: {
        setPosition: (state, action) => {
            state.position = action.payload;
        },
    }
});

export const { setPosition } = stateCamera.actions;

export default stateCamera.reducer;