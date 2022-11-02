import React, { FC } from 'react';

import { Select as SelectA, SelectProps } from 'antd';

export const Select: FC<SelectProps> = ({ bordered = true, ...props }) => {
    return <SelectA bordered={bordered} {...props} />;
};
