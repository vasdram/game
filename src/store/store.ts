import { configureStore } from '@reduxjs/toolkit';

import { commonHelpers } from '@src/helpers/common';

import { rootReducer } from './rootReducer';

const isProduction = commonHelpers.isProduction();

export const store = configureStore({
    reducer: rootReducer,
    devTools: !isProduction,
});

if (!isProduction) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    window.getState = store.getState;
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
