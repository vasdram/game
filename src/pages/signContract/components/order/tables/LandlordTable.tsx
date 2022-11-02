import React, { FC } from 'react';

import { useTranslation } from 'react-i18next';

import { TableWithTitle } from '@src/pages/signContract/components/table-title';
import { Tag } from '@src/ui/elements/Tag';
import { Text } from '@src/ui/elements/typography/Text';

const LandlordTable: FC = () => {
    const { t } = useTranslation();

    const landlordData = {
        [t('pages.serviceMarket.contract.wallet')]: 'Wkfuknf.wam',
        [t('pages.serviceMarket.contract.landlord')]: (
            <>
                <Tag>{t('components.common.you')}</Tag>
                <Text type="primary">Skyfidelity</Text>
            </>
        ),
        [t('pages.serviceMarket.contract.area')]: <Text type="primary">{`ID368530`}</Text>,
    };

    return <TableWithTitle title={t('pages.serviceMarket.contract.landlord')} data={landlordData} />;
};

export { LandlordTable };
