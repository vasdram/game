import React, { FC } from 'react';

import { Card, Form, Input as InputA } from 'antd';
import cn from 'classnames';
import { useTranslation } from 'react-i18next';

import { getLabelSelectItem } from '@src/helpers/getLabelSelectItem';
import { orderFields } from '@src/mock/orderFields';
import { Button } from '@src/ui/elements/Button';
import { Input } from '@src/ui/elements/Input';
import { Select } from '@src/ui/elements/Select';

import { TermsStepProps } from './interface';

import styles from '../../styles.module.scss';
import localStyles from './styles.module.scss';

export const TermsStep: FC<TermsStepProps> = ({ goToPreviousStep, form }) => {
    const { t } = useTranslation();

    return (
        <div className={styles.rightSection}>
            <InputA.Group compact>
                <Form.Item
                    name={orderFields.deadlineDurationInDays}
                    label={t('pages.serviceMarket.createOrder.startOfOperation')}
                    className={cn(styles.formField, localStyles.formField)}
                    tooltip={
                        <Card
                            title={t('pages.serviceMarket.createOrder.startOfOperation')}
                            className={styles.tooltipCard}
                        >
                            {t(`pages.serviceMarket.createOrder.levelUpgradeTerms.penalty.startOfOperation`)}
                        </Card>
                    }
                >
                    <Select
                        placeholder={t('components.common.days')}
                        options={getLabelSelectItem({
                            amount: 3,
                            label: t('components.common.day'),
                        })}
                        disabled
                    />
                </Form.Item>
                <Form.Item
                    name={orderFields.deadlineDurationInHours}
                    className={cn(styles.formField, localStyles.formField)}
                    label=" "
                >
                    <Select
                        placeholder={t('components.common.hours')}
                        options={getLabelSelectItem({
                            amount: 23,
                            label: t('components.common.hour'),
                            sinceZero: true,
                        })}
                        disabled
                    />
                </Form.Item>
            </InputA.Group>
            <div className={localStyles.space}>
                <Form.Item
                    name={orderFields.costOfExecution}
                    label={t('pages.serviceMarket.createOrder.costOfExecution')}
                    className={cn(styles.formField)}
                    tooltip={
                        <Card
                            title={t('pages.serviceMarket.createOrder.costOfExecution')}
                            className={styles.tooltipCard}
                        >
                            {t(`pages.serviceMarket.createOrder.levelUpgradeTerms.penalty.costOfExecution`)}
                        </Card>
                    }
                >
                    <Input placeholder={t('components.common.button.dme')} type="number" />
                </Form.Item>
                <Form.Item
                    name={orderFields.penaltyAmount}
                    label={t('pages.serviceMarket.createOrder.penalty')}
                    className={cn(styles.formField)}
                    tooltip={
                        <Card title={t('pages.serviceMarket.createOrder.penalty')} className={styles.tooltipCard}>
                            {t(`pages.serviceMarket.createOrder.levelUpgradeTerms.penalty`)}
                        </Card>
                    }
                >
                    <Input placeholder={t('components.common.button.dme')} type="number" />
                </Form.Item>
            </div>
            <div className={localStyles.space}>
                <Button onClick={goToPreviousStep} ghost>
                    {t('kit.back')}
                </Button>
                <Button disabled={false} htmlType="submit" type="primary">
                    {t('components.common.button.create')}
                </Button>
            </div>
        </div>
    );
};
