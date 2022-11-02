import React from 'react';
// import { LandLordMenu } from 'features';
import { LandLordCabin } from './LandLordCabin';
import styles from './styles.module.scss';
import { Header } from '@src/ui/components/Header/Header';

export const LandLordPageFin = () => {
    const accountName = 'Name';

    return (
        <div>
            <div className={styles.header}>
                <Header withBackButton />
            </div>
            {accountName && <LandLordCabin accountName={accountName} />}
            {/* <LandLordMenu /> */}
        </div>
    );
};
