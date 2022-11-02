import React, { FC, useEffect, useState } from 'react';

import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';

import { paths } from '@src/constants/paths';
import { Characteristics } from '@src/pages/equipmentSet/components/Characteristics';
import { EquipmentCards } from '@src/pages/equipmentSet/components/EquipmentCards';
import { EquipmentInstallationModal } from '@src/pages/equipmentSet/components/EquipmentInstallationModal';
import { StructType, UserInventoryType } from '@src/types/inventory';
import { InventoryCardModal } from '@src/ui/components/InventoryCardModal';
import { Button } from '@src/ui/elements/Button';
import { Page } from '@src/ui/elements/Page';

import styles from './styles.module.scss';

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

export const EquipmentSetPage: FC = () => {
    const { t } = useTranslation();
    const history = useHistory();
    // const reloadPage = useReloadPage();
    // const contractors = useStore(contractorsStore);
    // const { lastAction: lastMineAction } = useActions(ActionType.mine);
    // const isMining = lastMineAction?.state === ActionState.active;

    const [isInventoryVisible, setIsInventoryVisible] = useState(false);
    const [isInventoryCardVisible, setIsInventoryCardVisible] = useState(false);
    const [selectedInventoryModalCard, setSelectedInventoryModalCard] = useState(undefined);
    const [selectedEquipment, setSelectedEquipment] = useState({
        Cutter: null,
        Delaminator: null,
        'DME Wire': null,
        'Plunging blocks': null,
        'Wandering reactor': null,
    });
    const [selectedEquipmentName, setSelectedEquipmentName] = useState(undefined);

    // const callAction = useSmartContractActionDynamic();

    // const { data: userInventory } =
    //     useTableData<UserInventoryType>(getInventoryConfig);

    // const contractId = useStore(contractorContractIdStore);

    // useEffect(() => {
    //     const equipmentSlots = contractors?.[0]?.equip_slots ?? [];
    //     if (equipmentSlots) {
    //         const equipment = getSelectedEquipmentBySlots(
    //             equipmentSlots,
    //             userInventory
    //         );
    //         setSelectedEquipment(equipment);
    //     }
    // }, [contractors, userInventory]);

    // const assetIds = Object.entries(selectedEquipment)
    //     .map(([, inventory]) => inventory?.asset_id?.toString() ?? '')
    //     .filter((v) => v);
    // const hasAllEquipment = assetIds.length === miningEquipmentNames.length;
    //
    // const installedEquipment = Object.entries(selectedEquipment).filter(
    //     ([, equipment]) => equipment?.in_use
    // );
    // const notInstalledEquipment = Object.entries(selectedEquipment).filter(
    //     ([, equipment]) => !equipment?.in_use
    // );
    // const hasAllEquipmentActive =
    //     hasAllEquipment &&
    //     installedEquipment.length === miningEquipmentNames.length;

    const handleInstallEquipment = async () => {
        // const notActivatedEquipmentIds = notInstalledEquipment
        //     .map(([, equipment]) => equipment?.asset_id)
        //     .filter((v) => v) as string[];
        // if (!contractId) {
        //     showWarningModal({
        //         title: t('pages.equipmentSet.main.haveNoContract'),
        //         content: t('pages.equipmentSet.main.haveNoContract'),
        //     });
        // }
        // if (notActivatedEquipmentIds.length) {
        //     await callAction(
        //         installEquipment({
        //             waxUser: accountName,
        //             contractId: contractId!,
        //             items: notActivatedEquipmentIds,
        //         })
        //     );
        // }
        return showSuccessModal({
            title: t('pages.equipmentSet.main.title'),
            content: t('pages.equipmentSet.main.installed'),
            onOk: reloadPage,
        });
    };

    const handleRemoveAllEquipment = async () => {
        // await callAction(
        //     uninstallEquipment({
        //         waxUser: accountName,
        //         items: assetIds,
        //     })
        // );
        return showSuccessModal({
            title: t('pages.equipmentSet.main.uninstall'),
            content: t('pages.equipmentSet.main.removed'),
            onOk: reloadPage,
        });
    };

    const handleRemoveEquipment = async (inventory: UserInventoryType) => {
        // await callAction(
        //     uninstallEquipment({
        //         waxUser: accountName,
        //         items: [inventory.asset_id],
        //     })
        // );
        // return showSuccessModal({
        //     title: t('pages.equipmentSet.main.uninstall'),
        //     content: t('pages.equipmentSet.main.removed'),
        //     onOk: reloadPage,
        // });
        console.log('showSuccessModal');
    };

    const openInventoryModal = (name: InventoryNameType) => {
        setSelectedEquipmentName(name);
        setIsInventoryVisible(true);
        setIsInventoryCardVisible(true);
    };

    const handleCardSelect = (card: UserInventoryType) => {
        // if (selectedEquipmentName) {
        //     setSelectedEquipment({
        //         ...selectedEquipment,
        //         [selectedEquipmentName]: card,
        //     });
        //     setIsInventoryVisible(false);
        // }

        setSelectedEquipment({
            ...selectedEquipment,
            Cutter: inventory,
        });
    };

    // const handleOpenCard = (card: UserInventoryType) => {
    //     setIsInventoryCardVisible(true);
    //     setSelectedInventoryModalCard(card);
    // };

    const removeSelectedCard = (name: InventoryNameType) => {
        setSelectedEquipment({
            ...selectedEquipment,
            [name]: undefined,
        });
    };

    return (
        <Page headerTitle={t('pages.equipmentSet.main.title')}>
            <EquipmentCards
                isMining
                selectedEquipment={selectedEquipment}
                onCardInUseRemove={handleRemoveEquipment}
                onCardHolderClick={openInventoryModal}
                onCardNotInUseRemove={removeSelectedCard}
            />
            <p></p>
            <p></p>
            <Button
                type="primary"
                style={{ width: '200px', margin: '20px auto', display: 'block' }}
                size="large"
                block
                onClick={() => history.push(paths.contractorCabin)}
            >
                Start
            </Button>
            <div className={styles.characteristics}>
                <Characteristics />
            </div>
            <InventoryCardModal
                onSelect={handleCardSelect}
                card={selectedInventoryModalCard}
                visible={isInventoryCardVisible}
                onCancel={() => setIsInventoryCardVisible(false)}
            />
            {/*{selectedInventoryModalCard && (*/}
            {/*    <InventoryCardModal*/}
            {/*        onSelect={handleCardSelect}*/}
            {/*        card={selectedInventoryModalCard}*/}
            {/*        visible={isInventoryCardVisible}*/}
            {/*        onCancel={() => setIsInventoryCardVisible(false)}*/}
            {/*    />*/}
            {/*)}*/}
        </Page>
    );
};
