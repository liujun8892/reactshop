/*
 HashRouter:有#号 
 BrowserRouter:没有#号 
 Switch:只要匹配到一个地址不往下匹配，相当于for循环里面的break 
 Link:跳转页面，相当于vue里面的router-link
exact :完全匹配路由 
* */
import React from 'react';
import {HashRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
//import {PrivateRoute} from './routes/private';
import config from "./assets/js/conf/config";
import asyncComponents from './components/async/AsyncComponent';
const HomeComponent=asyncComponents(()=>import('./pages/home/home/index'));
const GoodsClassifyComponent=asyncComponents(()=>import('./pages/home/goods/classify'));
const GoodsItemComponent=asyncComponents(()=>import('./pages/home/goods/item'));
export default class RouterComponent extends React.Component{
    render(){
        return(
            <React.Fragment>
                <Router>
                    <React.Fragment>
                        <Switch>
                            <Route  path={config.path + 'home'}  component={HomeComponent} ></Route>
                            <Route  path={config.path + 'goods/classify'}  component={GoodsClassifyComponent} ></Route>
                            <Route  path={config.path + 'goods/classify/items'}  component={GoodsItemComponent} ></Route>
                            <Redirect to={config.path  + 'home/index'}></Redirect>
                        </Switch>
                    </React.Fragment>
                </Router>
            </React.Fragment>
        )
    }
}
