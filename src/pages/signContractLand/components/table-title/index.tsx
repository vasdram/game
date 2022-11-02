import React, { FC } from 'react';

import { KeyValueTable } from '@src/ui/elements/KeyValueTable';
import { Title } from '@src/ui/elements/typography/Title';

import styles from './styles.module.scss';

interface Props {
    title: string;
    data: Record<string, string | React.ReactNode>;
}

const TableWithTitle: FC<Props> = ({ title, data }) => {
    return (
        <>
            <Title fontFamily="orbitron" level={5} className={styles.title}>
                {title.toUpperCase()}
            </Title>
            <KeyValueTable items={data} className={styles.table} />
        </>
    );
};

export { TableWithTitle };
