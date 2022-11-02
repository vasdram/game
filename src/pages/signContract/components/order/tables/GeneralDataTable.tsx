import React, { FC } from 'react';

import { ShareAltOutlined } from '@ant-design/icons';
import { Tooltip } from 'antd';
import { useTranslation } from 'react-i18next';

import { TableWithTitle } from '@src/pages/signContract/components/table-title';
import { Text } from '@src/ui/elements/typography/Text';

import styles from './styles.module.scss';

const GeneralDataTable: FC = () => {
    const { t } = useTranslation();

    const generalData = {
        [t('pages.serviceMarket.order.orderId')]: (
            <Tooltip trigger="click" overlay={t('pages.info.copied')}>
                <div className={styles.contractId}>
                    <Text className={styles.contractNumber}>457457</Text>
                    <ShareAltOutlined
                        className={styles.copyIcon}
                        onClick={() => navigator.clipboard.writeText(window.location.href)}
                    />
                </div>
            </Tooltip>
        ),
        [t('pages.serviceMarket.creationDate')]: '18 May 2022 05:25 PM',
        [t('components.common.duration')]: `21 days ${t('components.common.days').toLowerCase()}`,
    };

    return <TableWithTitle title={t('pages.serviceMarket.contract.generalInformation')} data={generalData} />;
};

export { GeneralDataTable };
