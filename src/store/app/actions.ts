import { createAction } from '@reduxjs/toolkit';
import { Role } from '@src/store/app/types';

const setRoleAction = createAction<Role>('app/role/set');
const setFinishAction = createAction<boolean>('app/finish/set');

export const actionsApp = { setRoleAction, setFinishAction };
