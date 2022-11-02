import React from 'react';

import { useTranslation } from 'react-i18next';

import { Page } from '@src/ui/elements/Page';
import Test from './test.svg';

import styles from './styles.module.scss';
import { useHistory } from 'react-router-dom';
import { paths } from '@src/constants/paths';

export const AreaManagementPage = () => {
    const { t } = useTranslation();
    const history = useHistory();

    // const currentMineSlots = mines?.length ?? 0;
    // const maxMineSlots = area?.[0]?.mine_slots.length ?? 0;

    return (
        <Page headerTitle={t('pages.areaManagement.title')}>
            {/*{accountName && <AreaClaim isActive={isActive} areaId={areaId} accountName={accountName} />}*/}
            {/*<div className={styles.miningSlots}>*/}
            {/*    {t('pages.areaManagement.mineSlots')} <span>{10/100}</span>*/}
            {/*</div>*/}
            <div
                onClick={() => history.push(paths.serviceMarketland)}
                style={{ margin: 'auto', width: '1150px', display: 'block' }}
            >
                <img src={Test} alt="" />
            </div>
            {/*{accountName && <AreaManagementTable disabled={!isActive} accountName={accountName} />}*/}
        </Page>
    );
};
