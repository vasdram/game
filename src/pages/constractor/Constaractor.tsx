import React, { FC, useState } from 'react';
import { useSelector } from 'react-redux';

import cn from 'classnames';

import { Monitor } from '@src/pages/constractor/components/monitor';
import { SignContract } from '@src/pages/constractor/components/signContract';
import { selectorApp } from '@src/store/app';
import { Header } from '@src/ui/components/Header/Header';

import { MiningOver } from './components/MiningOver';
import { MiningProgress } from './components/MiningProgress';

import styles from './Constractor.module.scss';

export const Constaractor: FC = () => {
    const [status, setStatus] = useState(false);
    const isFinish = useSelector(selectorApp.selectorIsFinish);
    const time = new Date().getUTCSeconds() + 20;

    return (
        <div className={cn(styles.cabinBackground, styles.cabinBackgroundLightGreen)}>
            <Monitor classNameContainer={styles.cabinMonitorContainerWidth}>
                {!isFinish && <SignContract />}
                {isFinish && status && <MiningOver />}
                {isFinish && !status && <MiningProgress finishesAt={1661345795} onFinish={() => setStatus(false)} />}
            </Monitor>
            <Header withBackButton />
        </div>
    );
};
