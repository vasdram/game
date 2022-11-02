import React, { FC } from 'react';

import { useTranslation } from 'react-i18next';

import { Page } from '@src/ui/elements/Page';

import { Order } from './components/order/Order';

export const SignContractLand: FC = () => {
    const { t } = useTranslation();

    return (
        <Page headerTitle={t('pages.serviceMarket.mineOperationOrder').toUpperCase()}>
            <Order />
        </Page>
    );
};
