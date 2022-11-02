import React, { useState, FC } from 'react';

import { Form } from 'antd';
import { useTranslation } from 'react-i18next';

import { Steps } from '@src/ui/elements/Steps';

import { GeneralInformationStep } from './components/GeneralInformationStep';
import { TermsStep } from './components/TermsStep';
import { TypeStep } from './components/TypeStep';

import styles from './styles.module.scss';

enum Step {
    first,
    second,
    third,
}

enum Status {
    idle,
    success,
    error,
}

interface IStepContent {
    step: Step;
    currentStep: Step;
    children: React.ReactNode;
}

const StepContent: FC<IStepContent> = ({ step, currentStep, children }) => (
    <div
        className={styles.rightSection}
        style={{
            display: step === currentStep ? 'block' : 'none',
        }}
    >
        {children}
    </div>
);

export const CreateOrderForm = () => {
    const { t } = useTranslation();
    const initialValues = {};
    const [currentStep, setStep] = useState(Step.first);
    const [form] = Form.useForm();
    const accountName = 'User';
    const [formStatus, setFormStatus] = useState<Status>(Status.idle);

    const handleCreate = async () => {
        console.log('1213');
    };

    return (
        <Form
            className={styles.form}
            layout="vertical"
            form={form}
            initialValues={initialValues}
            onFinish={handleCreate}
        >
            <Steps
                className={styles.steps}
                direction="vertical"
                current={currentStep}
                steps={[
                    {
                        title: t('pages.serviceMarket.createOrder.contractType'),
                        description: currentStep === Step.first && t('components.common.inProgress'),
                    },
                    {
                        title: t('pages.serviceMarket.createOrder.generalInformation'),
                        description: currentStep === Step.second && t('components.common.inProgress'),
                    },
                    {
                        title: t('pages.serviceMarket.createOrder.terms'),
                        description: currentStep === Step.third && t('components.common.inProgress'),
                    },
                ]}
            />
            <StepContent step={Step.first} currentStep={currentStep}>
                <TypeStep accountName={accountName} form={form} goToNextStep={() => setStep(Step.second)} />
            </StepContent>
            <StepContent step={Step.second} currentStep={currentStep}>
                <GeneralInformationStep
                    form={form}
                    goToPreviousStep={() => setStep(Step.first)}
                    goToNextStep={() => setStep(Step.third)}
                />
            </StepContent>
            <StepContent step={Step.third} currentStep={currentStep}>
                <TermsStep form={form} goToPreviousStep={() => setStep(Step.second)} />
            </StepContent>
        </Form>
    );
};
