/*
 HashRouter:有#号 
 BrowserRouter:没有#号 
 Switch:只要匹配到一个地址不往下匹配，相当于for循环里面的break 
 Link:跳转页面，相当于vue里面的router-link
exact :完全匹配路由 
* */
import React from 'react';
import  {HashRouter as Router,Route,Switch}  from  'react-router-dom';
//import {PrivateRoute} from './routes/private';
import asyncComponents from './components/async/AsyncComponent';
const IndexComponent=asyncComponents(()=>import('./pages/home/index/index'));
export default class RouterComponent extends React.Component{
    render(){
        return(
            <React.Fragment>
                <Router>
                    <React.Fragment>
                        <Switch>
                            <Route exact path="/" component={IndexComponent} ></Route>
                        </Switch>
                    </React.Fragment>
                </Router>
            </React.Fragment>
        )
    }
}
