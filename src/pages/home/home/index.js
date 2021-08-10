/*eslint-disable*/
import React from 'react';
import Css from '../../../assets/css/home/home/index.css';
import {Route, Switch} from "react-router-dom";
import asyncComponents from '../../../components/async/AsyncComponent';
import config from "../../../assets/js/conf/config";
const IndexComponent=asyncComponents(()=>import('../index/index'));
const CartComponent=asyncComponents(()=>import('../cart/index'));
const UserComponent=asyncComponents(()=>import('../../user/index/index'));
export default class  HomeComponent extends React.Component{
    componentWillMount() {
        this.refreshDefaultTab()
    }

    componentDidMount(){

    }
    constructor(props) {
        super(props);
        this.state = {
            tabIndex: 0
        }
    }
    // 切换tab
    goPage(url) {
        console.log(url,'7777')
        this.props.history.replace(url)
        let index = this.getTabIndex(url)
        this.setState({
            tabIndex: index
        })
    }
    // 获取页面索引
    getTabIndex(url){
        let index = 0
        switch (url) {
            case '/home/index':
                index = 0
            break
            case '/home/cart':
                index = 1
            break
            case '/home/my':
                index = 2
            break
            default:
                index = 0
        }
        return index
    }
    // 刷新选中默认的tab
    refreshDefaultTab() {
        let index = this.getTabIndex(this.props.history.location.pathname)
        this.setState({
            tabIndex: index
        })
    }
    render(){
        return(
            <div class="app">
                <React.Fragment>
                    <Switch>
                        <Route path={config.path + 'home/index'} component={IndexComponent}></Route>
                        <Route path={config.path + 'home/cart'} component={CartComponent}></Route>
                        <Route path={config.path + 'home/my'} component={UserComponent}></Route>
                    </Switch>
                </React.Fragment>
                {/*底部导航栏*/}
                <div className={Css['footer-nav']}>
                    <div className={Css['footer-nav-item']} onClick={this.goPage.bind(this,'/home/index')}>
                        <div className={this.state.tabIndex === 0 ?  Css['footer-nav-item-icon'] + ' ' + Css['home'] + ' ' + Css['active']: Css['footer-nav-item-icon'] + ' ' + Css['home']}></div>
                        <div className={this.state.tabIndex === 0 ? Css['footer-nav-item-title'] + ' ' + Css['active'] : Css['footer-nav-item-title']}>首页</div>
                    </div>
                    <div className={Css['footer-nav-item']} onClick={this.goPage.bind(this,'/home/cart')}>
                        <div className={this.state.tabIndex === 1 ? Css['footer-nav-item-icon'] + ' ' + Css['cart'] + ' ' + Css['active'] : Css['footer-nav-item-icon'] + ' ' + Css['cart'] }></div>
                        <div className={ this.state.tabIndex === 1 ? Css['footer-nav-item-title'] + ' ' + Css['active']: Css['footer-nav-item-title']}>购物车</div>
                    </div>
                    <div className={Css['footer-nav-item']} onClick={this.goPage.bind(this,'/home/my')}>
                        <div className={this.state.tabIndex === 2 ? Css['footer-nav-item-icon'] + ' ' + Css['my']  + ' ' + Css['active'] : Css['footer-nav-item-icon'] + ' ' + Css['my']}></div>
                        <div className={this.state.tabIndex === 2 ? Css['footer-nav-item-title'] + ' ' + Css['active']: Css['footer-nav-item-title'] }>我的</div>
                    </div>
                </div>
            </div>
        );
    }
}