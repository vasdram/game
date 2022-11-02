import React, { FC } from 'react';

import { PlusOutlined } from '@ant-design/icons';
import cn from 'classnames';
import { useHistory } from 'react-router-dom';

import styles from './styles.module.scss';

type Props = {
    className?: string;
    text: string;
    onClick?: () => void;
    link?: string;
};

export const AddItem: FC<Props> = ({ text, onClick, className, link }) => {
    const history = useHistory();
    const navigateToServiceMarket = () => history.push(link || '/');

    return (
        <div onClick={onClick || navigateToServiceMarket} className={cn(styles.item, className)}>
            <PlusOutlined /> {text}
        </div>
    );
};
