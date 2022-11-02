import React, { FC, useState } from 'react';

import { Row, Col, Modal } from 'antd';
import { useTranslation } from 'react-i18next';

import { ConditionTable } from '@src/pages/signContract/components/order/tables/ConditionsTable';
import { LandlordTable } from '@src/pages/signContract/components/order/tables/LandlordTable';
import { Button } from '@src/ui/elements/Button';
import { Successfull } from '@src/ui/icons';

import { GeneralDataTable } from './tables/GeneralDataTable';

import styles from './Order.module.scss';
import { useHistory } from 'react-router-dom';
import { paths } from '@src/constants/paths';

export const Order: FC = () => {
    const { t } = useTranslation();
    const [show, setShow] = useState(false);
    const history = useHistory();

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
                                    {t('pages.serviceMarket.order.signOrder')} asdasd
                                </Button>
                                <Modal
                                    width={458}
                                    centered
                                    visible={show}
                                    onCancel={() => setShow(false)}
                                    // title={title}
                                    onOk={() => history.push(paths.landLordSearch)}
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
