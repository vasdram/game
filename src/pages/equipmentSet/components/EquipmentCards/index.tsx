import { useTranslation } from 'react-i18next';
// import { CardHolder, useReloadPage, Status } from 'shared';
// import { AssetCard, getCardStatus } from 'features';
import React, { FC } from 'react';
// import { InventoryNameType, UserInventoryType } from 'entities/smartcontract';
import styles from './styles.module.scss';
import { CardHolder } from '@src/ui/elements/CardHolder';
import { InventoryNameType } from '@src/constants/smartContracts';
import { UserInventoryType } from '@src/types/inventory';
import { AssetCard } from '@src/ui/components/asset-card';

interface Props {
    selectedEquipment: Record<InventoryNameType, UserInventoryType>;
    onCardInUseRemove: (inventory: UserInventoryType) => void;
    onCardHolderClick: (name: InventoryNameType) => void;
    onCardNotInUseRemove: (name: InventoryNameType) => void;
    isMining?: boolean;
}

export const EquipmentCards: FC<Props> = ({
    selectedEquipment,
    onCardInUseRemove,
    onCardHolderClick,
    onCardNotInUseRemove,
    isMining,
}) => {
    const { t } = useTranslation();
    // const reload = useReloadPage();
    const reload = () => console.log('reload');

    return (
        <div className={styles.cards}>
            {/*<CardHolder onClick={() => onCardHolderClick('qwe')} name={'qwe'} />*/}
            {Object.entries(selectedEquipment).map(([name, inventory]) =>
                inventory ? (
                    <AssetCard
                        tooltipOverlay={undefined}
                        inventory={inventory}
                        key={name}
                        buttonText={t('pages.equipmentSet.main.remove')}
                        onButtonClick={
                            inventory.in_use
                                ? () => onCardInUseRemove(inventory)
                                : () => onCardNotInUseRemove(name as InventoryNameType)
                        }
                        onRepairFinish={reload}
                        showCardBadgeStatus
                    />
                ) : (
                    <CardHolder key={name} onClick={() => onCardHolderClick(name as InventoryNameType)} name={name} />
                ),
            )}
        </div>
    );
};
