import React, { FC, ReactNode } from 'react';
import classNames from 'classnames';
// import { useNavigate } from 'react-router-dom';
// import { mineManagement } from 'app/router/paths';
import styles from './styles.module.scss';

type Props = {
    state?: any;
    children: ReactNode;
};
export const MineOwnerCabin: FC<Props> = ({ children, state = 'default' }) => {
    // const inLocation = useUserLocation();
    // const navigate = useNavigate();

    return (
        <div
            className={classNames(styles.cabinWrapper, {
                [styles.cabinDefaultInside]: false,
                [styles.progress]: true,
                [styles.incident]: false,
            })}
        >
            {children}
            <div
                className={styles.panel}
                onClick={() => console.log('navigate')}

                // navigate(mineManagement)}
            />
        </div>
    );
};
