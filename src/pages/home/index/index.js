/*eslint-disable*/
import React from 'react';
import Css from '../../../assets/css/home/index/index.css';
export default class  IndexComponent extends React.Component{
    componentDidMount(){
        console.log($(".app").html());
    }
    render(){
        return(
            <div class="app">
                首页
                <div className={Css['header']}>头部</div>
            </div>
        );
    }
}