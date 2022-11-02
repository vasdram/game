import React, { FC } from 'react';

import { Card, Form, Input as InputA, Space } from 'antd';
import cn from 'classnames';
import { useTranslation } from 'react-i18next';

import { getLabelSelectItem } from '@src/helpers/getLabelSelectItem';
import { orderFields } from '@src/mock/orderFields';
import { Button } from '@src/ui/elements/Button';
import { Input } from '@src/ui/elements/Input';
import { Select } from '@src/ui/elements/Select';

import { GeneralInformationStepProps } from './interface';

import styles from '../../styles.module.scss';
import localStyles from './styles.module.scss';

export const GeneralInformationStep: FC<GeneralInformationStepProps> = ({ goToPreviousStep, goToNextStep, form }) => {
    const { t } = useTranslation();

    return (
        <>
            <Form.Item>
                <InputA.Group compact>
                    <Form.Item
                        name={orderFields.feePercent}
                        label={t('pages.serviceMarket.createOrder.fee')}
                        className={cn(styles.formField, localStyles.feeInput)}
                        tooltip={
                            <Card title={t('pages.serviceMarket.createOrder.fee')} className={styles.tooltipCard}>
                                {t('pages.serviceMarket.createOrder.feeTooltip')}
                            </Card>
                        }
                    >
                        <Input placeholder="%" />
                    </Form.Item>
                    <Form.Item
                        name={orderFields.contractDuration}
                        label={t('components.common.duration')}
                        className={cn(localStyles.finisAtSelect, styles.formField)}
                    >
                        <Select
                            placeholder={t('components.common.days')}
                            options={getLabelSelectItem({
                                amount: 21,
                                label: t('components.common.day'),
                                // temporary solution because contract for 1 day isn't possible yet
                            }).filter((_: any, idx: number) => idx !== 0)}
                        />
                    </Form.Item>
                </InputA.Group>
                <InputA.Group>
                    <div className={localStyles.deadlineInputsContainer}>
                        <Form.Item
                            name={orderFields.deadlineDurationInDays}
                            label={t('pages.serviceMarket.createOrder.startOfOperation')}
                            className={cn(styles.formField)}
                            tooltip={
                                <Card
                                    title={t('pages.serviceMarket.createOrder.effectiveDate')}
                                    className={styles.tooltipCard}
                                >
                                    {t('pages.serviceMarket.createOrder.startOfOperationTooltip')}
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
                        <Form.Item name={orderFields.deadlineDurationInHours} className={cn(styles.formField)}>
                            <Select
                                placeholder={t('components.common.hour')}
                                options={getLabelSelectItem({
                                    amount: 23,
                                    label: t('components.common.hour'),
                                    sinceZero: true,
                                })}
                                disabled
                            />
                        </Form.Item>
                    </div>
                </InputA.Group>
                <Space direction="horizontal">
                    <Button onClick={goToPreviousStep} ghost>
                        {t('kit.back')}
                    </Button>
                    <Button disabled={false} onClick={goToNextStep} type="primary">
                        {t('components.common.button.next')}
                    </Button>
                </Space>
            </Form.Item>
        </>
    );
};
