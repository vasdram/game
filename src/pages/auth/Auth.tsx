import React, { FC } from 'react';

import { Link } from 'react-router-dom';

import { DeepMineLogo } from '@src/ui/icons';

import styles from './Auth.module.scss';
import { paths } from '@src/constants/paths';
import { useDispatch } from 'react-redux';
import { useAppDispatch } from '@src/store/hooks';
import { Role } from '@src/store/app/types';
import { actionsApp } from '@src/store/app';

export const Auth: FC = () => {
    const dispatch = useAppDispatch();

    const clickHandler = (role: Role) => () => {
        dispatch(actionsApp.setRoleAction(role));
    };

    return (
        <div className={styles.wrapper}>
            <DeepMineLogo width={240} height={142} />
            <div className={styles.content}>
                <Link onClick={clickHandler('Constractor')} to={paths.contractorCabin}>
                    Constractor
                </Link>
            </div>
        </div>
    );
};
