import { Role } from '@src/store/app/types';
import { RootState } from '@src/store/rootReducer';

const selectorRoles = (state: RootState): Role => state.app.role;
const selectorIsFinish = (state: RootState): Role => state.app.isFinish;

export const selectorApp = { selectorRoles, selectorIsFinish };
