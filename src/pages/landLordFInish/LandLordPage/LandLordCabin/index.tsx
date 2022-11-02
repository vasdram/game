import React, { FC } from 'react';

import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';

import { paths } from '@src/constants/paths';
import { EngageArea } from '@src/pages/landLord/LandLordPage/EngageArea';
import { Button } from '@src/ui/elements/Button';

import { CABIN_STATUS } from '../../../../constants/cabinStatus';
import { DarkGrayBg, LightGrayBg } from '../../../../ui/images';
import styles from './styles.module.scss';
import { Searching } from '@src/pages/landLordFInish/LandLordPage/Searching';

const getBackground = (status: CABIN_STATUS, rarity: string, hasPhysicalShift: boolean) => LightGrayBg;

export const LandLordCabin: FC<{ accountName: string }> = ({ accountName }) => {
    const history = useHistory();
    const { t } = useTranslation();

    return (
        <div className={styles.cabin}>
            <img className={styles.cabinBackground} src={LightGrayBg} alt="" />
            <div className={styles.monitor}>
                <Searching msUntil={100} />
            </div>
        </div>
    );
};
