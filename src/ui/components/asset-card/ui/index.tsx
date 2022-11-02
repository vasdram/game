import React, { FC } from 'react';

import { UserInventoryType } from '@src/types/inventory';
import { Card, CardProps, Status } from '@src/ui/elements/Card';

export const getCardStatus = (inventory?: UserInventoryType): Status => {
    if (inventory?.broken) return Status.broken;
    if (inventory?.in_use) return Status.installed;

    return Status.notInstalled;
};

export const AssetCard: FC<CardProps> = (props) => {
    const status = getCardStatus(props.inventory);

    return <Card {...props} status={status} cardData={{}} />;
};
