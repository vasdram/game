import React, { FC } from 'react';

import classNames from 'classnames';

import { BackButton } from '@src/ui/elements/BackButton';

import { Title } from '../../elements/typography/Title';
import { DeepMineLogo } from '../../icons';

import styles from './Header.module.scss';

type Props = {
    title?: string;
    hideLogo?: boolean;
    withBackButton?: boolean;
};

export const Header: FC<Props> = ({ withBackButton, title, hideLogo }) => {
    const goToBack = () => console.log('goToBack');
    const navigateToHome = () => console.log('navigateToHome');

    return (
        <>
            <div className={styles.header}>
                {withBackButton ? <BackButton onClick={goToBack} /> : <div />}
                <div className={styles.logoContainer} onClick={navigateToHome}>
                    <DeepMineLogo
                        width="140"
                        className={classNames(styles.logo, {
                            [styles.hideLogo]: hideLogo,
                        })}
                    />
                </div>
                <div className="sidebar"></div>
            </div>
            {title && (
                <div className={styles.backButtonAndTitleWrapper}>
                    <BackButton onClick={goToBack} />
                    <Title className={styles.title} fontFamily="orbitron">
                        {title}
                    </Title>
                    <div />
                </div>
            )}
        </>
    );
};
