import React , {Component} from 'react'
import {  Route, Switch } from "react-router-dom";


import Actionpage from "./components/ActionPage/Actionpage";
import Home from "./components/Home/home";
import Market from './components/Market/market';

class Routes extends Component {
 

    render() {
        return (
            <Switch>
            <div>
            <Route path = "/actionpage" component={Actionpage}/>
            <Route path = "/market" component={Market}/>
            <Route path = "/" exact component={Home}/>
            </div>
            </Switch>
        );
    }
}

export default Routes;