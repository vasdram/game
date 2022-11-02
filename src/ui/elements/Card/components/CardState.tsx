import React, { FC } from 'react';

import { ToolOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
// import { getTimeLeftFromUtc, isUtcDateExpired, Status, useTick, Text, BrokenOutlined } from 'shared';

import { isUtcDateExpired } from '@src/helpers/time';
import { Status } from '@src/ui/elements/Card';
import { Text } from '@src/ui/elements/typography/Text';
import { BrokenOutlined } from '@src/ui/icons';

import styles from '../Cards.module.scss';

export const CardState: FC<{
    status?: Status;
    finishesAt: number;
    onFinish?: () => void;
}> = ({ status, finishesAt, onFinish }) => {
    const { t } = useTranslation();
    // useTick(!isUtcDateExpired(finishesAt));

    const isBrokenAndNotInRepair = isUtcDateExpired(finishesAt) && status === Status.broken;

    if (onFinish && status !== Status.broken && isUtcDateExpired(finishesAt)) onFinish();

    return (
        <div className={styles.stateWrapper}>
            <div className={styles.cardState}>
                {isBrokenAndNotInRepair ? <BrokenOutlined /> : <ToolOutlined className={styles.iconTool} />}
                <Text type="secondary">{t('kit.cardStates.broken')}</Text>
            </div>
        </div>
    );
};
