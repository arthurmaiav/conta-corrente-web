import React from 'react';
import { Switch } from 'react-router-dom';
import Account from '../pages/Account';

const Routes: React.FC = () => {
    return (
        <Switch>
            <Account />
        </Switch>
    );
};

export default Routes;