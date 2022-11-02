interface IError {
    status: string | number;
    message: string;
}

export type TError = IError | null;

interface IInitialModelState<T> {
    ids: string[];
    entities: Record<string, T>;
    currId: string | null;
}

export type { IInitialModelState };
