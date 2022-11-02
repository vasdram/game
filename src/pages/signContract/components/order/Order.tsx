import React, { FC, useState } from 'react';
import { useSelector } from 'react-redux';

import { Row, Col, Modal } from 'antd';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';

import { paths } from '@src/constants/paths';
import { ConditionTable } from '@src/pages/signContract/components/order/tables/ConditionsTable';
import { LandlordTable } from '@src/pages/signContract/components/order/tables/LandlordTable';
import { actionsApp, selectorApp } from '@src/store/app';
import { Button } from '@src/ui/elements/Button';
import { Successfull } from '@src/ui/icons';

import { GeneralDataTable } from './tables/GeneralDataTable';

import styles from './Order.module.scss';
import { useAppDispatch } from '@src/store/hooks';

const links = {
    Constractor: paths.equipment,
    MineOwner: paths.mineOwner,
    Landlord: paths.landLord,
};

export const Order: FC = () => {
    const { t } = useTranslation();
    const [show, setShow] = useState(false);
    const history = useHistory();
    const dispatch = useAppDispatch();
    const role = useSelector(selectorApp.selectorRoles);

    const submitContract = () => {
        dispatch(actionsApp.setFinishAction(true));
        history.push(links[role]);
    };

    return (
        <div>
            <Row gutter={[32, 32]}>
                <Col span={24}>
                    <GeneralDataTable />
                </Col>
                <Col xs={24} md={12}>
                    <LandlordTable />
                </Col>
                <Col xs={24} md={12}>
                    <Row gutter={[32, 32]}>
                        <Col span={24}>
                            <ConditionTable />
                        </Col>

                        <Col span={24}>
                            <Row justify="end">
                                <Button type="primary" size="large" block onClick={() => setShow(true)}>
                                    {t('pages.serviceMarket.order.signOrder')}
                                </Button>
                                <Modal
                                    width={458}
                                    centered
                                    visible={show}
                                    onCancel={() => setShow(false)}
                                    // title={title}
                                    onOk={submitContract}
                                    okButtonProps={{ disabled: false }}
                                    okText={t('components.common.button.sign')}
                                >
                                    <div className={styles.successfullTitle}>
                                        <Successfull /> <span>Сontract successfully signed</span>
                                    </div>
                                </Modal>
                                {/*    {canSignOperationLandlordOrder && (*/}
                                {/*        <SignLandlordOrder*/}
                                {/*            contract={contract}*/}
                                {/*            accountName={accountName}*/}
                                {/*        />*/}
                                {/*    )}*/}

                                {/*    {canSignOperationMineOwnerOrder && (*/}
                                {/*        <SignMineOwnerOrder*/}
                                {/*            contract={contract}*/}
                                {/*            accountName={accountName}*/}
                                {/*        />*/}
                                {/*    )}*/}

                                {/*    {canDeleteOrder && (*/}
                                {/*        <DeleteOrder*/}
                                {/*            accountName={accountName}*/}
                                {/*            contractId={contract.id}*/}
                                {/*        />*/}
                                {/*    )}*/}
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    );
};
