import { createSlice } from '@reduxjs/toolkit';

const stateHotspots = createSlice({
    name: 'hotspots',
    initialState: {
        current: {
            position: [-6.6, 0.1, -0.1],
            cameraPosition: [-6.958, 1.32, 0.598],
            textureRotation: [0.05, 1.12, -0.03],
            hideIs: [1, 3, 4],
            computers: [
                {
                    position: [-7.85, 1, -5],
                    rotation: [0, -Math.PI / 2, 0]
                },
                {
                    position: [-7.85, 1, -2.7],
                    rotation: [0, -Math.PI / 2, 0]
                },
                {
                    position: [-5.65, 1, -2.7],
                    rotation: [0, Math.PI / 2, 0]
                },
            ],
            id: 1
        },
        hotspots: [
            {
                position: [-6.6, 0.1, -0.1],
                cameraPosition: [-6.958, 1.32, 0.598],
                textureRotation: [0.05, 1.12, -0.03],
                hideIs: [1, 4],
                computers: [
                    {
                        position: [2.62, 1, 2.83],
                        rotation: [0, 1.45, 0]
                    },
                    {
                        position: [2.83, 1, 0.87],
                        rotation: [0, 1.5, 0]
                    },
                    {
                        position: [0.79, 1, 0.67],
                        rotation: [0, -1.65, 0]
                    },
                ],
                id: 1
            },
            {
                position: [-4.7, 0.1, -0.1],
                cameraPosition: [-3.715, 1.395, 0.158],
                textureRotation: [0.01, 3.75, 0.02],
                hideIs: [2, 4],
                computers: [
                    {
                        position: [-11.88, 0.8, -2.3],
                        rotation: [0, -Math.PI / 2, 0]
                    },
                    {
                        position: [-9.80, 0.8, -2.2],
                        rotation: [0, Math.PI / 2, 0]
                    },
                ],
                id: 2
            },
            {
                position: [-1.956, 0.1, -0.166],
                cameraPosition: [-1.956, 1.408, -0.166],
                textureRotation: [-0.01, 3.25, -0.01],
                hideIs: [1, 3],
                computers: [],
                id: 3
            },
            {
                position: [-2.348, 0.1, -2.305],
                cameraPosition: [-2.348, 1.32, -2.305],
                textureRotation: [0.07, 1.65, -0.07],
                hideIs: [1, 2, 5],
                computers: [],
                id: 4
            },
            {
                position: [1.296, 0.1, 0.39],
                cameraPosition: [1.296, 1.356, 0.39],
                textureRotation: [0.00, 3.12, -0.01],
                hideIs: [1, 4],
                computers: [],
                id: 5
            }
        ]
    },
    reducers: {
        setCurrent: (state, action) => {
            state.current = action.payload;
        }
    }
});

export const { setCurrent } = stateHotspots.actions;

export default stateHotspots.reducer;