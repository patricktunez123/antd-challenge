import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from '../route-config';

const Login = React.lazy(() => import('../../views/Login'));
const CreateAccount = React.lazy(() => import('../../views/CreateAccount'));
const ResetPassword = React.lazy(() => import('../../views/ResetPassword'));
const SetPassword = React.lazy(() => import('../../views/SetPassword'));

const Routes = () => (
    <Suspense
      fallback={
        <div style={{ height: '100vh', width: '100%', textAlign: 'center', paddingTop: 'calc(50vh - 7px)' }}>
          Loading...
        </div>
      }
    >
      <Switch>
        <Route path={routes.login.url} component={Login} />
        <Route path={routes.createAccount.url} component={CreateAccount} />
        <Route path={routes.resetPassword.url} component={ResetPassword} />
        <Route path={`${routes.setPassword.url}/:token`} component={SetPassword} />
      </Switch>
    </Suspense>
);

export default Routes;
