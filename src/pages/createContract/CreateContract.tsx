import React, { FC } from 'react';

import { useTranslation } from 'react-i18next';

import { CreateOrderForm } from '@src/pages/createContract/components/createOrderForm/CreateOrderForm';
import { Page } from '@src/ui/elements/Page';

import styles from './CreateContract.module.scss';

export const CreateContract: FC = () => {
    const { t } = useTranslation();

    return (
        <Page className={styles.page} headerTitle={t('pages.serviceMarket.createOrder.createOrder').toUpperCase()}>
            <CreateOrderForm />
        </Page>
    );
};
