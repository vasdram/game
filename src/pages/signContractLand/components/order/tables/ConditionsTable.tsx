import React, { FC } from 'react';

import { useTranslation } from 'react-i18next';

import { TableWithTitle } from '@src/pages/signContract/components/table-title';

const ConditionTable: FC = () => {
    const { t } = useTranslation();

    const conditionData = {
        [t('pages.serviceMarket.contract.operationStart')]: '2 days 14 hours',
        [t('pages.serviceMarket.contract.penalty')]: `10 ${t('components.common.button.dme')}`,
        [t('pages.serviceMarket.contract.miningTerms')]: t('pages.serviceMarket.contract.minimumDmeInDays', {
            amount: 5,
            penalty: 7,
        }),
        [t('pages.serviceMarket.contract.fee')]: `5%`,
    };

    return <TableWithTitle title={t('pages.serviceMarket.contract.conditions')} data={conditionData} />;
};

export { ConditionTable };
