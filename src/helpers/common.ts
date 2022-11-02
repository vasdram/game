import { ENVIRONMENT } from '@src/types/core';

const isProduction = (): boolean => isEquals(process.env.NODE_ENV, ENVIRONMENT.PROD);

const isEquals = (a: any, b: any): boolean => {
    if (!a || !b) {
        return false;
    }

    return a.toString() === b.toString();
};

const commonHelpers = {
    isProduction,
    isEquals,
};

export { commonHelpers };
