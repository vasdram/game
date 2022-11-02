export type Role = 'Constractor' | 'MineOwner' | 'Landlord';

export interface InitialState {
    role: Role;
    isFinish: boolean;
}
