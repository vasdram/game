import React, { FC, useState, useEffect, useCallback } from 'react';

import { Col, Divider, message, ModalProps, Row, Tooltip } from 'antd';
import { useTranslation } from 'react-i18next';

import { ServiceMarketTabIds } from '@src/constants/ServiceMarketTabIds';
import {
    EquipmentType,
    InUseType,
    InventoryType,
    RarityType,
    StructType,
    UserInventoryType,
} from '@src/types/inventory';
import { AssetCard, getCardStatus } from '@src/ui/components/asset-card';
import { ActionModal } from '@src/ui/elements/ActionModal';
import { Button } from '@src/ui/elements/Button';
import { DepreciationProgressBar } from '@src/ui/elements/DepreciationProgressBar';
// import { Divider } from '@src/ui/elements/Divider';
import { Link } from '@src/ui/elements/Link';
import { Modal } from '@src/ui/elements/Modal';
import { Text } from '@src/ui/elements/typography/Text';

import styles from './styles.module.scss';
import { InventoryIdType } from '@src/constants/smartContracts';

type InventoryCardModalProps = ModalProps & {
    card: UserInventoryType;
    onSelect?: (card: UserInventoryType) => void;
};

enum ModalType {
    repair = 'repair',
    refurbish = 'refurbish',
}

export const inventory = {
    asset_id: 'qwe',
    template_id: 177577,
    owner: 'qwe',
    in_use: 'inUse',
    struct_type: StructType,
    rarity: undefined,
    weight: 234,
    inv_type: undefined,
    level: 3,
    equip_type: undefined,
    broken: 0,
    available_from: 12,
    schema_type: 1,
};

export const InventoryCardModal: FC<InventoryCardModalProps> = ({ card = inventory, onSelect, ...props }) => {
    const reload = console.log('reload');
    // const reload = useReloadPage();
    const [cardData, setCardData] = useState(inventory);
    const [modalData, setModalData] = useState<{
        type?: ModalType;
        costs: {
            timeSeconds: number;
            coinAmount: number;
            energy: number;
        };
    }>({ costs: { timeSeconds: 0, coinAmount: 0, energy: 0 } });
    const [isModalVisible, setIsModalVisible] = useState(false);
    // const { getCost } = useRepair();
    // const { dmeBalance } = useStore(balancesStore);

    const { t } = useTranslation();

    // const accountName = useAccountName();

    const handleSelect = (e: React.MouseEvent<HTMLElement>) => {
        onSelect?.(inventory);

        if (props.onCancel) {
            props.onCancel(e);
        }
    };

    const updateData = useCallback(async () => {
        if (card?.asset_id) {
            setCardData(await getAtomicAssetsDataById(card.asset_id));
        }
    }, [card]);

    useEffect(() => {
        updateData();
    }, [updateData]);

    // const repairAction = useSmartContractAction({
    //     action: repairEquipment(accountName, Number(cardData?.asset_id)),
    //     onSignSuccess: reload,
    // });
    //
    // const refurbishAction = useSmartContractAction({
    //     action: repairEquipment(accountName, Number(cardData?.asset_id), true),
    //     onSignSuccess: reload,
    // });

    const isNotAvailable = card.available_from > Date.now();

    const isNotCardBroken = true;

    return (
        <Modal wideOnMobile {...props} title="Active inventory" className={styles.modal}>
            <div className={styles.container}>
                <div>
                    <AssetCard
                        inventory={card}
                        onRepairFinish={reload}
                        showCardBadgeStatus={false}
                        withDepreciationBar={false}
                    />
                    {onSelect && (
                        <Button disabled={isNotAvailable} onClick={handleSelect} block type="primary">
                            {t('pages.equipmentSet.cardModal.select')}
                        </Button>
                    )}
                </div>
                <div className={styles.infoContainer}>
                    <div className={styles.title}>
                        <Text>Plunging blocks</Text>
                        {/*<Text>{cardData?.data.name}</Text>*/}
                    </div>
                    <div className={styles.description}>
                        <Text>
                            Generates energy (DME token) by processing irradiated matter extracted by the mining
                            equipment.
                        </Text>
                        {/*<Text>{cardData?.data.description}</Text>*/}
                    </div>
                    <div className={styles.info}>
                        <Row align="middle">
                            <Col span={7}>
                                <Text>{t('pages.equipmentSet.cardModal.rarity')}</Text>
                            </Col>
                            <Col span={7} className={styles.alignRight}>
                                {/*<Text>{cardData?.data.rarity}</Text>*/}
                                <Text>Epic</Text>
                            </Col>
                            <Col span={10} className={styles.rightCol}>
                                <Link to={`/`}>{t('pages.equipmentSet.cardModal.upgrade')}</Link>
                            </Col>
                        </Row>
                        {/*<Divider />*/}
                        <Row align="middle">
                            <Col span={7}>
                                <Text>{t('pages.equipmentSet.cardModal.level')}</Text>
                            </Col>
                            <Col span={7} className={styles.alignRight}>
                                <Text>2</Text>
                                {/*<Text>{cardData?.data.level}</Text>*/}
                            </Col>
                            <Col span={10} className={styles.rightCol}>
                                <Tooltip
                                    overlay={t('components.common.comingSoon')}
                                    mouseEnterDelay={0}
                                    mouseLeaveDelay={0}
                                >
                                    <span />
                                    {/*<NftProgressBar*/}
                                    {/*    initial={30}*/}
                                    {/*    current={30}*/}
                                    {/*    remained={120}*/}
                                    {/*    rightContent={<DMECoinIcon />}*/}
                                    {/*/>*/}
                                </Tooltip>
                            </Col>
                        </Row>
                        {/*<Divider />*/}
                        <Row align="middle">
                            <Col span={7}>
                                <Text>{t('pages.equipmentSet.cardModal.depreciation')}</Text>
                            </Col>
                            <Col span={7}>
                                <DepreciationProgressBar
                                    className={styles.depreciationProgressBarWidth}
                                    completedMining={''}
                                    serviceLife={''}
                                    totalServiceLife={'1/20'}
                                />
                            </Col>
                            <Col span={10}>
                                <Button
                                    disabled={isNotCardBroken}
                                    size="large"
                                    type="link"
                                    onClick={() => {
                                        setModalData({
                                            type: ModalType.repair,
                                            costs: {
                                                timeSeconds: 1,
                                                coinAmount: getCost({
                                                    level: card.level as GetCostParams['level'],
                                                    rarity: rarityMap[card.rarity] as GetCostParams['rarity'],
                                                    isRefurbish: false,
                                                }),
                                                energy: 150,
                                            },
                                        });
                                        setIsModalVisible(true);
                                    }}
                                    className={styles.button}
                                >
                                    {t('pages.equipmentSet.cardModal.repair')}
                                </Button>
                            </Col>
                        </Row>
                        {/*<Divider />*/}
                        <Row align="middle">
                            <Col span={10}>
                                <Text>{t('pages.equipmentSet.cardModal.breakageProbability')}</Text>
                            </Col>
                            <Col span={4} className={styles.alignRight}>
                                <Text>1</Text>
                            </Col>
                            <Col span={10}>
                                <Button
                                    disabled={isNotCardBroken}
                                    type="link"
                                    size="large"
                                    onClick={() => {
                                        setModalData({
                                            type: ModalType.refurbish,
                                            costs: {
                                                timeSeconds: 120,
                                                coinAmount: getCost({
                                                    level: card.level as GetCostParams['level'],
                                                    rarity: rarityMap[card.rarity] as GetCostParams['rarity'],
                                                    isRefurbish: true,
                                                }),
                                                energy: 150,
                                            },
                                        });
                                        setIsModalVisible(true);
                                    }}
                                    className={styles.button}
                                >
                                    {t('pages.equipmentSet.cardModal.refurbish')}
                                </Button>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
            <ActionModal
                visible={isModalVisible}
                texts={{
                    title:
                        modalData?.type === ModalType.repair
                            ? t('features.actions.equipmentRepair')
                            : t('features.actions.equipmentRefurbish'),
                    onOk: t(`pages.equipmentSet.cardModal.${modalData?.type}`),
                }}
                onSubmit={() => {
                    if (Number(dmeBalance) < modalData.costs.coinAmount) {
                        message.warning(
                            t('pages.equipmentSet.cardModal.insufficientFunds', { action: modalData?.type }),
                        );

                        return;
                    }
                    if (modalData?.type === ModalType.repair) repairAction();
                    if (modalData?.type === ModalType.refurbish) refurbishAction();
                }}
                onCancel={() => setIsModalVisible(false)}
                costs={modalData?.costs}
            />
        </Modal>
    );
};
