import React from 'react';

import { withTranslation, WithTranslation } from 'react-i18next';

import { ReactComponent as Error } from './error.svg';

import styles from './ErrorBoundary.module.scss';

interface IProps {
    children: React.ReactNode;
    i18n: WithTranslation;
}

interface IState {
    error: Error | null;
    errorInfo: React.ErrorInfo | null;
}

class ErrorBoundaryClass extends React.Component<IProps, IState> {
    readonly state: IState = {
        error: null,
        errorInfo: null,
    };

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
        this.setState({
            error,
            errorInfo,
        });
    }

    redirectHandler(): void {
        window.location.href = '/';
    }

    render(): React.ReactNode {
        const { children, i18n } = this.props;
        const { error, errorInfo } = this.state;

        if (errorInfo || error) {
            return (
                <div className={styles.error}>
                    <h2>{i18n.t('errors.error_boundary')}</h2>
                    <Error width={170} />
                </div>
            );
        }

        return children;
    }
}

export const ErrorBoundary = withTranslation()(ErrorBoundaryClass);
