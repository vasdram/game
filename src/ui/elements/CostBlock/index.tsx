import React, { FC, memo } from 'react';

import { useTranslation } from 'react-i18next';

import { DMECoinIcon, EnergyIcon, TimerIcon } from '../../icons';

import styles from './index.module.scss';
import { getTimeLeft } from '@src/helpers/time';

export type Props = {
    timeSeconds?: number;
    energy?: number;
    coinAmount?: number;
};

// eslint-disable-next-line react/display-name
export const CostBlock: FC<Props> = memo(({ timeSeconds, energy, coinAmount }) => {
    const { t } = useTranslation();

    return (
        <div className={styles.root}>
            {timeSeconds !== undefined && (
                <div className={styles.valueContainer}>
                    <div className={styles.iconContainer}>
                        <TimerIcon />
                        <div>{t('kit.timer.time')}</div>
                    </div>
                    <b>{getTimeLeft(timeSeconds, true)}</b>
                </div>
            )}
            {energy !== undefined && (
                <div className={styles.valueContainer}>
                    <div className={styles.iconContainer}>
                        <EnergyIcon />
                        <div>{t('kit.timer.energy')}</div>
                    </div>
                    <b>{energy}</b>
                </div>
            )}
            {coinAmount !== undefined && (
                <div className={styles.valueContainer}>
                    <div className={styles.iconContainer}>
                        <DMECoinIcon width={24} height={24} />
                        <div>{t('components.common.button.dme')}</div>
                    </div>
                    <b>{coinAmount}</b>
                </div>
            )}
        </div>
    );
});
