import React from 'react';

import styles from '../../styles.module.scss';

interface IExternalLink {
    href: string;
    children: React.ReactNode;
}

export const ExternalLink: React.FC<IExternalLink> = (props) => (
    <a className={styles.link} {...props}>
        {props.children}
    </a>
);
