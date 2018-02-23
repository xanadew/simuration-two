import React from 'react';
import {Switch,Route} from 'react-router-dom';

import Auth from './components/Auth';
import Dash from './components/Dash';
import Wiz from './components/Wiz';

// import all the thingz

export default (
    <Switch>
        <Route exact path='/' component={Auth}/>
        <Route path='/dashboard' component={Dash}/>
        <Route path='/wiz' component={Wiz}/>

        {/* route all the thingz */}

    </Switch>
)