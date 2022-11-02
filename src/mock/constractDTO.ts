import { ContractStatus, ContractType } from '../app/types';

export type ContractDto = {
    id: number;
    client: string;
    client_asset_id: string;
    executor: string;
    executor_asset_id: number;
    type: ContractType;
    fee_percent: number;
    fee_daily_min_amount: number;
    days_for_penalty: number;
    penalty_amount: number;
    demand_penalty: number;
    penalty_available: number;
    create_time: number;
    activation_time: number;
    start_time: number;
    deadline_time: number;
    deleted_at: number;
    term_time: number;
    deadline_duration: number;
    contract_duration: number;
    term_initiator: string;
    finishes_at: number;
    status: ContractStatus;
    fee_days: { key: number; value: number }[];
    min_amount: number;
    client_warranty_amount: number;
    executor_warranty_amount: number;
    attrs: {
        key: string;
        value: string;
    }[];
    signed_by_client: number;
    signed_by_executor: number;
    cost_of_execution: number;
    client_discord: string;
    executor_discord: string;
    demand_penalty_by_client: number;
    penalty_by_fee_days_available: number;
};
export const contractDTO = [
    {
        id: 250,
        client: '',
        client_asset_id: 0,
        executor: 'deepminetes3',
        executor_asset_id: 0,
        type: 2,
        deleted_at: 0,
        cost_of_execution: 0,
        fee_percent: 1,
        fee_daily_min_amount: 1,
        days_for_penalty: 1,
        penalty_amount: 1,
        demand_penalty: 1,
        penalty_available: 1,
        penalty_demanded_by: '',
        penalty_by_fee_days_available: 0,
        create_time: 1661345795,
        activation_time: 0,
        start_time: 0,
        deadline_duration: 111600,
        deadline_time: 0,
        term_time: 0,
        term_initiator: '',
        contract_duration: 691200,
        finishes_at: 0,
        attrs: [{ key: '', value: '' }],
        fee_days: [{ key: 1, value: 2 }],
        min_amount: 1,
        client_warranty_amount: 1,
        executor_warranty_amount: 1,
        signed_by_client: 0,
        signed_by_executor: 0,
        status: 2,
        client_discord: '',
        executor_discord: '',
        demand_penalty_by_client: 0,
    },
];
