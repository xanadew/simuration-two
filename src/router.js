import React from 'react';
import {Switch,Route} from 'react-router-dom';

import Auth from './components/Auth';
import Dash from './components/Dash';
import Wiz from './components/Wiz';
import Wiz1 from './components/Wiz1';
import Wiz2 from './components/Wiz2';
import Wiz3 from './components/Wiz3';
import Wiz4 from './components/Wiz4';
import Wiz5 from './components/Wiz5';

// import all the thingz

export default (
    <Switch>
        <Route exact path='/' component={Auth}/>
        <Route path='/dashboard' component={Dash}/>
        <Route path='/wiz/' component={Wiz}/>
        <Route path='/wiz/1' component={Wiz1}/>
        <Route path='/wiz/2' component={Wiz2}/>
        <Route path='/wiz/3' component={Wiz3}/>
        <Route path='/wiz/4' component={Wiz4}/>
        <Route path='/wiz/5' component={Wiz5}/>

        {/* route all the thingz */}

    </Switch>
)