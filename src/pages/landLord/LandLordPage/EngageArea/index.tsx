import React, { FC } from 'react';

import cn from 'classnames';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';

import { paths } from '@src/constants/paths';
import { desktopS, useMediaQuery } from '@src/hooks/useMediaQuery';
import { Button } from '@src/ui/elements/Button';

import commonStyles from '../styles.module.scss';
import styles from './styles.module.scss';
import { Searching } from '@src/pages/landLord/LandLordPage/Searching';

interface Props {
    className?: string;
    disabled: boolean;
}

export const EngageArea: FC<Props> = ({ className, disabled = true }) => {
    const { t } = useTranslation();
    const history = useHistory();
    const isDesktop = useMediaQuery(desktopS);
    const isSearch = location.search === 'search';
    return (
        <div className={cn(styles.engageArea, className)}>
            <div className={cn(commonStyles.title, styles.title)}>{t('pages.landLord.cabin.engageTitle')}</div>

            {isSearch && <Searching msUntil={100} />}
            {!isSearch && isDesktop && (
                <div className={cn(commonStyles.description, styles.description)}>
                    {t('pages.landLord.cabin.engageDescription')}
                </div>
            )}
            <Button type="primary" disabled={false} onClick={(onEngageClick) => history.push(paths.area)}>
                {t('pages.landLord.cabin.engageButton')}
            </Button>
        </div>
    );
};
