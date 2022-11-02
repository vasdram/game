import React from 'react';

import cn from 'classnames';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';

import { Button } from '@src/ui/elements/Button';

import contractorStyles from '../../Constractor.module.scss';
import styles from './SignContract.module.scss';
import { paths } from '@src/constants/paths';

export const SignContract = () => {
    const { t } = useTranslation();
    const history = useHistory();

    return (
        <div className={styles.container}>
            <div className={cn(contractorStyles.title, styles.title)}>
                {t('pages.contractor.signingContract.title')}
            </div>
            <div className={cn(contractorStyles.description, styles.description)}>
                {t('pages.contractor.signingContract.description')}
            </div>
            <div className={styles.buttons}>
                <Button type="primary" ghost className={styles.btn} onClick={() => history.push(paths.serviceMarket)}>
                    {t('pages.contractor.signingContract.findButton')}
                </Button>
                <Button className={styles.btn} ghost type="primary" onClick={() => history.push(paths.createOrder)}>
                    {t('pages.contractor.signingContract.createButton')}
                </Button>
            </div>
        </div>
    );
};
