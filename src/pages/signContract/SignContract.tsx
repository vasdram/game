import React, { FC } from 'react';

import { useTranslation } from 'react-i18next';

import { Order } from '@src/pages/signContract/components/order/Order';
import { Page } from '@src/ui/elements/Page';

export const SignContract: FC = () => {
    const { t } = useTranslation();

    return (
        <Page headerTitle={t('pages.serviceMarket.mineOperationOrder').toUpperCase()}>
            <Order />
        </Page>
    );
};
