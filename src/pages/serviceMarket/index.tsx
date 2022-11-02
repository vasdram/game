import React, { FC } from 'react';

import { useTranslation } from 'react-i18next';

import { contractDTO } from '@src/mock/constractDTO';
import { Page } from '@src/ui/elements/Page';

import { MiningContractsTable } from './components/miningContractsTable/MiningContractsTable';

import styles from './styles.module.scss';

export const ServiceMarket: FC = () => {
    const { t } = useTranslation();

    return (
        <Page className={styles.page} headerTitle={t('pages.serviceMarket.createOrder.createOrder').toUpperCase()}>
            <MiningContractsTable contracts={contractDTO} />
        </Page>
    );
};
