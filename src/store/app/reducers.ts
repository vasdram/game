import { createReducer, PayloadAction } from '@reduxjs/toolkit';

import { actionsApp } from '@src/store/app/actions';

import { InitialState, Role } from './types';

const initialState: InitialState = {
    role: 'Constractor',
    isFinish: false,
};

export default createReducer(initialState, (builder) => {
    builder
        .addCase(actionsApp.setRoleAction, (state, action: PayloadAction<Role>) => ({
            ...state,
            role: action.payload,
        }))
        .addCase(actionsApp.setFinishAction, (state, action: PayloadAction<boolean>) => ({
            ...state,
            isFinish: action.payload,
        }));
});
