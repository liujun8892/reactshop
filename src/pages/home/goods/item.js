/*eslint-disable*/
import React from 'react';
import {Route, Switch} from "react-router-dom";
import asyncComponents from '../../../components/async/AsyncComponent';
import config from "../../../assets/js/conf/config";
import '../../../assets/css/home/goods/items.scss'

export default class  HomeComponent extends React.Component{
    componentWillMount() {

    }

    componentDidMount(){

    }
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    // 页面跳转
    goPage(url) {
        this.props.history.push(config.path + url)
    }
    render(){
        return(
            <div id='classify-items'>
                <div className="card">
                    <div className="card-header">
                        裙装
                    </div>
                    <div className="card-body">
                        <div className="card-goods-item">
                            <img src="//vueshop.glbuys.com/uploadfiles/1484284030.jpg" alt="裙装裙装6"/>
                            <div className="goods-title">裙装裙装6</div>
                        </div>
                        <div className="card-goods-item">
                            <img src="//vueshop.glbuys.com/uploadfiles/1484284030.jpg" alt="裙装裙装6"/>
                            <div className="goods-title">裙装裙装6</div>
                        </div><
                        div className="card-goods-item">
                            <img src="//vueshop.glbuys.com/uploadfiles/1484284030.jpg" alt="裙装裙装6"/>
                            <div className="goods-title">裙装裙装6</div>
                        </div>
                        <div className="card-goods-item">
                            <img src="//vueshop.glbuys.com/uploadfiles/1484284030.jpg" alt="裙装裙装6"/>
                            <div className="goods-title">裙装裙装6</div>
                        </div>
                        <div className="card-goods-item">
                            <img src="//vueshop.glbuys.com/uploadfiles/1484284030.jpg" alt="裙装裙装6"/>
                            <div className="goods-title">裙装裙装6</div>
                        </div>
                        <div className="card-goods-item">
                            <img src="//vueshop.glbuys.com/uploadfiles/1484284030.jpg" alt="裙装裙装6"/>
                            <div className="goods-title">裙装裙装6</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}