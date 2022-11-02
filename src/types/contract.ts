import { ContractDto } from '@src/mock/constractDTO';

export enum ContractType {
    undefined,
    landlord_mineowner,
    mineowner_contractor,
    level_upgrade,
}

export type ContractProps = {
    contract: ContractDto;
    accountName: string;
    isDeleted?: boolean;
};

export enum ContractRole {
    executor,
    client,
}

export enum ContractStatus {
    undefined,
    signed_by_client,
    signed_by_executor,
    active,
    terminated,
}
