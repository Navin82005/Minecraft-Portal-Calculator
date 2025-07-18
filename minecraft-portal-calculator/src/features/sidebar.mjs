import { createSlice } from "@reduxjs/toolkit";

export const sidebarSlice = createSlice({
    name: "sidebar",
    initialState: {
        value: "home"
    },
    reducers: {
        changeActive: (state, action) => {
            state.value = action.payload;
        }
    }
});

export const { changeActive } = sidebarSlice.actions;

export default sidebarSlice.reducer;