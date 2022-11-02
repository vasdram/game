import React, { FC } from 'react';

import { Space } from 'antd';
import { useTranslation } from 'react-i18next';

import { Button } from '../Button';
import { CostsTable } from '../CostsTable';
import { Modal } from '../Modal';
import { Title } from '../typography/Title';

import styles from './styles.module.scss';

type Props = {
    visible: boolean;
    onCancel: () => void;
    onSubmit: () => void;
    texts: {
        onOk: string;
        title?: string;
    };
    costs?: {
        timeSeconds?: number;
        energy?: number;
        coinAmount?: number;
    };
};

export const ActionModal: FC<Props> = ({ visible, onCancel, onSubmit, texts, costs }) => {
    const { t } = useTranslation();

    return (
        <Modal
            className={styles.modal}
            visible={visible}
            title={
                <Title fontFamily="bai" level={5}>
                    {texts?.title}
                </Title>
            }
            onCancel={onCancel}
            footer={
                <Space align="end">
                    <Button type="ghost" onClick={onCancel}>
                        {t('components.common.button.cancel')}
                    </Button>
                    <Button type="primary" onClick={onSubmit}>
                        {texts?.onOk}
                    </Button>
                </Space>
            }
        >
            <Title level={5} fontFamily="bai" thin>
                {t('components.common.actionModal.descriptionTime')}
            </Title>
            <CostsTable {...costs} />
        </Modal>
    );
};
