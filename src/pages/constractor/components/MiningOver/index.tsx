import React from 'react';

import { CheckOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import cn from 'classnames';
import { useTranslation } from 'react-i18next';

import contractorStyles from '../../Constractor.module.scss';
import styles from './styles.module.scss';

export const MiningOver = () => {
    const { t } = useTranslation();

    return (
        <div className={styles.container}>
            <div className={cn(contractorStyles.title, styles.title)}>
                <CheckOutlined style={{ color: '#47FF40' }} />
                <div>{t('pages.contractor.miningOver.title')}</div>
            </div>
            <div className={cn(contractorStyles.description, styles.description)}>
                {t('pages.contractor.miningOver.description')}
            </div>
            <div className={styles.center}>
                <Button onClick={() => console.log('over')}>{t('components.common.button.miningDeck')}</Button>
            </div>
        </div>
    );
};
