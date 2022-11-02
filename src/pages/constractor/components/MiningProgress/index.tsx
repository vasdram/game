import React from 'react';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';

import contractorStyles from '../../Constractor.module.scss';
import styles from './styles.module.scss';
import { Loader } from '@src/ui/elements/Loader';
import { getTimeLeftFromUtc, isUtcDateExpired } from '@src/helpers/time';
import { useTick } from '@src/hooks/useTick';

type MiningProgressProps = {
    finishesAt: number;
    onFinish: () => void;
};

// eslint-disable-next-line react/display-name
export const MiningProgress = React.memo(({ finishesAt, onFinish }: MiningProgressProps) => {
    useTick();
    const { t } = useTranslation();
    if (isUtcDateExpired(finishesAt)) onFinish();

    return (
        <div className={styles.container}>
            <div className={cn(contractorStyles.title, styles.title)}>{t('pages.contractor.miningProgress.title')}</div>
            <div className={styles.timerContainer}>
                <Loader size="small" />
                <div className={styles.timer}>{getTimeLeftFromUtc(finishesAt)}</div>
            </div>
        </div>
    );
});
