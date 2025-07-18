import { configureStore } from "@reduxjs/toolkit";

import sidebarReducer from "./features/sidebar.mjs";

export default configureStore({
    reducer: {
        sidebar: sidebarReducer,
    },
})