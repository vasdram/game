import React, { useState } from 'react';

import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';

import { paths } from '@src/constants/paths';
import { desktopS, useMediaQuery } from '@src/hooks/useMediaQuery';
import { MineOwnerCabin } from '@src/pages/mineOwner/components/mineOwner';
import { SignContract } from '@src/pages/mineOwner/components/signContract';
import { Header } from '@src/ui/components/Header/Header';
import { Button } from '@src/ui/elements/Button';
import { Title } from '@src/ui/elements/typography/Title';

import styles from './styles.module.scss';
import { useSelector } from 'react-redux';
import { selectorApp } from '@src/store/app';

export enum mineOwnerCabinState {
    initial,
    needMineNft,
    needContractWithLandlord,
    contractWithLandlordWasTerminated,
    needPhysicalShift,
    needSetupMine,
    needCrew,
    needActivateMine,
    everythingIsDone,
}

export const MineOwnerPage = () => {
    const { t } = useTranslation();
    const isDesktop = useMediaQuery(desktopS);
    const history = useHistory();
    const isFinish = useSelector(selectorApp.selectorIsFinish);
    const [show, setShow] = useState(false);

    return (
        <MineOwnerCabin state={mineOwnerCabinState}>
            <div className={styles.header}>
                <Header withBackButton />
            </div>
            <div className={styles.hologramWrapper}>
                <div className={styles.hologram}>
                    {isDesktop && (
                        <Title fontFamily="orbitron" level={2} className={styles.title}>
                            {t('features.mineOwner.mineNotSet')}
                        </Title>
                    )}
                    {!show && t('features.mineOwner.mineManagementDescription')}
                    {isFinish && show && 'Your mine needs contractors to start operating'}
                    {!isFinish && (
                        <div>
                            <Button type="link" onClick={() => history.push(paths.serviceMarket)}>
                                {isDesktop ? t('features.mineOwner.chooseContract') : t('features.mineOwner.choose')}
                            </Button>
                            <Button type="link" onClick={() => history.push(paths.serviceMarket)}>
                                {isDesktop ? t('features.mineOwner.createContract') : t('features.mineOwner.create')}
                            </Button>
                        </div>
                    )}
                    {isFinish && !show && (
                        <div>
                            <Button type="link" onClick={() => setShow(true)}>
                                Set up the Mine
                            </Button>
                        </div>
                    )}

                    {isFinish && show && (
                        <div>
                            <Button type="link" onClick={() => history.push(paths.serviceMarket)}>
                                {isDesktop ? t('features.mineOwner.chooseContract') : t('features.mineOwner.choose')}
                            </Button>
                        </div>
                    )}
                </div>
            </div>
            {/* {chainAccountName && (
                <div className={styles.hologramWrapper}>
                    <Hologram user={chainAccountName} />
                </div>
            )} */}
            {/* {chainAccountName && (
                <MineOwnerMenu
                    currentMineOwnerCabinState={cabinState}
                    accountName={chainAccountName}
                />
            )} */}
            {/* {!inLocation.mineDeck && (
                <Travel
                    toLocationId={LOCATION_TO_ID.mine_deck}
                    onSuccess={reloadPage}
                />
            )} */}
        </MineOwnerCabin>
    );
};
// export * from './Management';
// export * from './MineOwnerMiningCrewPage';
// export * from './MineOwnerStatsAndInfo';
