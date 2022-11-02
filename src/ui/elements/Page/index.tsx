import React, { FC } from 'react';

import cn from 'classnames';

import { Header } from '@src/ui/components/Header/Header';

import styles from './Page.module.scss';

type Props = {
    headerTitle?: string;
    removeContentPadding?: boolean;
    className?: string;
    children?: React.ReactNode;
};

export const Page: FC<Props> = ({ headerTitle, children, removeContentPadding, className }) => {
    return (
        <div className={cn(styles.wrapper, className)}>
            <Header title={headerTitle} />

            <div
                className={cn(styles.content, {
                    [styles.contentWithPaddings]: !removeContentPadding,
                })}
            >
                {children}
            </div>
        </div>
    );
};
