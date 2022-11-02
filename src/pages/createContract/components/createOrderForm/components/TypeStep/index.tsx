import React, { FC } from 'react';

import { Form, Tooltip } from 'antd';
import { useTranslation } from 'react-i18next';

import { orderFields } from '@src/mock/orderFields';
import { ContractRole, ContractType } from '@src/types/contract';
import { Button } from '@src/ui/elements/Button';
import { Select } from '@src/ui/elements/Select';

import { TypeStepProps } from './interface';

import styles from '../../styles.module.scss';

const { useWatch } = Form;

export const TypeStep: FC<TypeStepProps> = ({ form, goToNextStep }) => {
    const { t } = useTranslation();

    return (
        <>
            <Form.Item
                className={styles.formField}
                label={t('pages.serviceMarket.createOrder.contractType')}
                name={orderFields.contractType}
            >
                <Select
                    placeholder={t('pages.serviceMarket.createOrder.selectContractType')}
                    onSelect={(value: ContractType) => {
                        form.resetFields();
                        form.setFieldsValue({
                            [orderFields.contractType]: value,
                        });
                    }}
                    options={[
                        {
                            value: ContractType.landlord_mineowner,
                            label: <Tooltip>{t('features.actions.mineSetup')}</Tooltip>,
                            disabled: true,
                        },
                        {
                            value: ContractType.mineowner_contractor,
                            label: t('pages.serviceMarket.miningContract'),
                        },
                        {
                            value: ContractType.level_upgrade,
                            label: (
                                <Tooltip overlay={t('components.common.comingSoon')}>
                                    {t('pages.serviceMarket.createOrder.levelUpgrade')}
                                </Tooltip>
                            ),
                            disabled: true,
                        },
                    ]}
                />
            </Form.Item>
            <Form.Item
                className={styles.formField}
                label={t('pages.serviceMarket.yourRole')}
                name={orderFields.isClient}
                dependencies={[orderFields.contractType]}
            >
                <Select
                    placeholder={t('pages.serviceMarket.createOrder.selectRole')}
                    options={[
                        {
                            value: ContractRole.client,
                            label: <Tooltip>{t('roles.landlord')}</Tooltip>,
                            disabled: false,
                        },
                        {
                            value: ContractRole.executor,
                            label: <Tooltip>{t('roles.mineowner')}</Tooltip>,
                            disabled: false,
                        },
                    ]}
                />
            </Form.Item>
            {/*<PersonalizedOrderCheckbox isSelfClient={true} form={form} />*/}
            {/*<AssetSelectField templatesId={areasAssetTemplateId} form={form} accountName="" />*/}
            <Button disabled={false} type="primary" onClick={goToNextStep} block>
                {t('components.common.button.next')}
            </Button>
        </>
    );
};
