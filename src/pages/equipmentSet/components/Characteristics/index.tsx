import React, { useEffect } from 'react';

import { useTranslation } from 'react-i18next';

import { CharacteristicsLine } from '../CharacteristicsLine';

import styles from './styles.module.scss';

export const Characteristics = () => {
    const { t } = useTranslation();

    return (
        <div className={styles.container}>
            <div className={styles.title}>{t('pages.equipmentSet.characteristics.title')}</div>
            <div className={styles.content}>
                <CharacteristicsLine name={t('features.mining.mineLevel')} value="2" />
                <CharacteristicsLine name={t('features.mining.mineSublevel')} value="0" />
                <CharacteristicsLine name={t('pages.equipmentSet.characteristics.mineDepth')} value="-" />
                <CharacteristicsLine name={t('pages.equipmentSet.characteristics.estimatesMiningTime')} />
                <CharacteristicsLine name={t('pages.equipmentSet.characteristics.estimatesAmountDME')} />
                <CharacteristicsLine name={t('pages.equipmentSet.characteristics.estimateMiningEfficiency')} />
                <CharacteristicsLine name={t('pages.equipmentSet.characteristics.estimateMiningPower')} />
                <CharacteristicsLine name={t('pages.equipmentSet.characteristics.sublevelEfficiensy')} />
                <CharacteristicsLine name={t('pages.equipmentSet.characteristics.equipmentBreakageProbabillity')} />
                <CharacteristicsLine name={t('pages.equipmentSet.characteristics.fossilChance')} />
            </div>
        </div>
    );
};
