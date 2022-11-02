import React from 'react';

import cn from 'classnames';

import styles from './Monitor.module.scss';

type Props = {
    classNameContainer?: string;
    className?: string;
    children: React.ReactNode;
};

export const Monitor: React.FC<Props> = ({ className, classNameContainer, children }) => {
    return (
        <div className={cn(styles.monitorBg, classNameContainer)}>
            <div className={cn(styles.monitor, className)}>{children}</div>
        </div>
    );
};
