import React, { FC, memo } from 'react';

import { Progress } from 'antd';
import cn from 'classnames';

import styles from './styles.module.scss';

// eslint-disable-next-line react/display-name
export const DepreciationProgressBar: FC<any> = memo(
    ({ serviceLife = 0, completedMining = 0, totalServiceLife = 0, className }) => {
        const format = () => (
            <div className={styles.info}>
                {completedMining}/{serviceLife} ({totalServiceLife})
            </div>
        );

        return (
            <Progress
                className={cn(styles.rootDeprecation, className)}
                percent={(Number(completedMining) / Number(totalServiceLife)) * 100}
                success={{
                    percent: 100 - (Number(serviceLife) / Number(totalServiceLife)) * 100,
                }}
                format={format}
            />
        );
    },
);
