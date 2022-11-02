import React, { FC } from 'react';

import { useTranslation } from 'react-i18next';

import { secondsToDays, toLocaleDate } from '@src/helpers/time';
import { Link } from '@src/ui/elements/Link';
import { Table } from '@src/ui/elements/Table';

type Props = {
    contracts: any[];
};

export const MiningContractsTable: FC<Props> = ({ contracts }) => {
    const { t } = useTranslation();

    return (
        <Table
            columns={[
                {
                    title: t('pages.serviceMarket.id'),
                    dataIndex: 'id',
                    key: 'id',
                    render: (value: any, props: { key: any }) => (
                        <Link to={`/service-market/contract/${props.key}`}>{value}</Link>
                    ),
                },
                {
                    title: t('pages.serviceMarket.nickname'),
                    dataIndex: 'nickName',
                    key: 'nickName',
                    render: (value: any) => <Link to={`/user/${value}/land`}>{value}</Link>,
                },

                {
                    title: t('pages.serviceMarket.creationDate'),
                    dataIndex: 'creationDate',
                    key: 'creationDate',
                    sorter: (a: { creationDate: number }, b: { creationDate: number }) =>
                        a.creationDate - b.creationDate,
                    render: (value: number) => toLocaleDate(value * 1000),
                },
                {
                    title: t('pages.serviceMarket.createOrder.fee'),
                    dataIndex: 'fee',
                    key: 'fee',
                    sorter: (a: { fee: number }, b: { fee: number }) => a.fee - b.fee,
                    render: (value: any) => `${value} %`,
                },
                {
                    title: t('pages.serviceMarket.Penalty&DME'),
                    dataIndex: 'penaltyDme',
                    key: 'penaltyDme',
                    sorter: (a: { penaltyDme: number }, b: { penaltyDme: number }) => a.penaltyDme - b.penaltyDme,
                },
                {
                    title: t('pages.serviceMarket.createOrder.miningTerms'),
                    dataIndex: 'miningTerms',
                    key: 'miningTerms',
                },
                {
                    title: t('pages.serviceMarket.createOrder.startOfOperation'),
                    dataIndex: 'startOf',
                    key: 'startOf',
                    sorter: (a: { startOf: number }, b: { startOf: number }) => a.startOf - b.startOf,
                    render: (value: number) => (value ? toLocaleDate(value * 1000) : '-'),
                },
                {
                    title: t('components.common.duration'),
                    dataIndex: 'duration',
                    key: 'duration',
                    sorter: (a: { duration: number }, b: { duration: number }) => a.duration - b.duration,
                    render: (value: any) => `${value} ${t('components.common.days').toLowerCase()}`,
                },
            ]}
            dataSource={contracts.map((contract) => ({
                key: contract.id,
                nickName: contract.client || contract.executor || '-',
                id: contract.id,
                creationDate: contract.create_time,
                fee: contract.fee_percent,
                penaltyDme: contract.penalty_amount,
                miningTerms: `${contract.days_for_penalty}/${contract.fee_daily_min_amount} ${t(
                    'components.common.button.dme',
                )}`,
                startOf: contract.start_time,
                duration: secondsToDays(contract.contract_duration),
            }))}
            pagination={{ position: ['bottomCenter'], pageSize: 5 }}
        />
    );
};
