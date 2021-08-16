/*eslint-disable*/
import React from 'react';
import {Route, Switch} from "react-router-dom";
import asyncComponents from '../../../components/async/AsyncComponent';
const GoodsItemComponent=asyncComponents(()=>import('./item'));
import config from "../../../assets/js/conf/config";
import '../../../assets/css/home/goods/classify.scss'

export default class  HomeComponent extends React.Component{
    componentWillMount() {

    }

    componentDidMount(){

    }
    constructor(props) {
        super(props);
        this.state = {
            classifyNames: [1,2,3,4,5,6,7,8,9,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
        }
    }
    // 页面跳转
    goPage(url) {
        this.props.history.push(config.path + url)
    }
    render(){
        return(
            <div id='goods'>
                {/* 搜索框 */}
                <div className="search-bar">
                    <div className="search-icon"></div>
                    <div className="search-container">请输入宝贝名称</div>
                </div>
                {/*  分类列表  */}
                <div className="classify-container">
                    <div className="classify-name-list">
                        <div className="classify-name-item active">商品名称1</div>
                        {this.state.classifyNames.map((item,index) => (<div className="classify-name-item" key={index}>商品名称{index+2}</div>
                        ))}
                    </div>
                    <div className="classify-goods-list">
                        <Switch>
                            <Route path={config.path + 'goods/classify/items'} component={GoodsItemComponent}></Route>
                        </Switch>
                    </div>
                </div>
            </div>
        );
    }
}