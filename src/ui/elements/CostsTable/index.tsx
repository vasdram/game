import React, { FC, memo } from 'react';

import { CostBlock, Props } from '../CostBlock';

// eslint-disable-next-line react/display-name
export const CostsTable: FC<Props> = memo(({ timeSeconds, energy, coinAmount }) => (
    <>
        {timeSeconds !== undefined && <CostBlock timeSeconds={timeSeconds} />}
        {energy !== undefined && <CostBlock energy={energy} />}
        {coinAmount !== undefined && <CostBlock coinAmount={coinAmount} />}
    </>
));
