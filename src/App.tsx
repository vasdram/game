import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import '@src/assets/styles/app.scss';
import '@src/assets/styles/app.less';
import { paths } from '@src/constants/paths';
import { Auth } from '@src/pages/auth/Auth';
import { Constaractor } from '@src/pages/constractor';
import { CreateContract } from '@src/pages/createContract';
import { EquipmentSetPage } from '@src/pages/equipmentSet';
import { LandLordPage } from '@src/pages/landLord';
import { AreaManagementPage } from '@src/pages/landLord/LandLordPage/AreaManagementPage';
import { LandLordPageFin } from '@src/pages/landLordFInish';
import { MineOwnerPage } from '@src/pages/mineOwner';
import { ServiceMarket } from '@src/pages/serviceMarket';
import { ServiceMarketLand } from '@src/pages/serviceMarketLand';
import { SignContract } from '@src/pages/signContract';
import { SignContractLand } from '@src/pages/signContractLand';
import { ErrorBoundary } from '@src/ui/components/ErrorBoundary/ErrorBoundary';

export function App(): JSX.Element {
    return (
        <ErrorBoundary>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Auth />
                    </Route>
                    <Route path={paths.serviceMarket}>
                        <ServiceMarket />
                    </Route>
                    <Route path={paths.contractorCabin}>
                        <Constaractor />
                    </Route>
                    {/*<Route path={paths.contractorCabin} component={<LandLordPage />}></Route>*/}
                    <Route path={paths.mineOwner}>
                        <MineOwnerPage />
                    </Route>
                    <Route path={paths.createOrder}>
                        <CreateContract />
                    </Route>
                    <Route path={paths.signInOrder}>
                        <SignContract />
                    </Route>
                    <Route path={paths.equipment}>
                        <EquipmentSetPage />
                    </Route>
                    <Route path={paths.landLord}>
                        <LandLordPage />
                    </Route>
                    <Route path={paths.area}>
                        <AreaManagementPage />
                    </Route>

                    <Route path={paths.signInOrderLand}>
                        <SignContractLand />
                    </Route>
                    <Route path={paths.serviceMarketland}>
                        <ServiceMarketLand />
                    </Route>
                    <Route path={paths.landLordSearch}>
                        <LandLordPageFin />
                    </Route>
                </Switch>
            </Router>

            <ToastContainer />
        </ErrorBoundary>
    );
}
