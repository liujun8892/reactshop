import React from 'react';
import '../../../assets/css/home/index/index.scss'
import Swiper from  '../../../assets/js/libs/swiper.min'
import '../../../assets/css/common/swiper.min.css'
import {request} from "../../../assets/js/libs/request";
import {lazyImg} from "../../../assets/js/utils/util";

export default class  IndexComponent extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            // 滚动导航栏变色开关
            isScroll: false,
            aSwiper: [],
            quickNavs: [],
            mainGoodsList: [],
            recommendGoodsList: []
        }
        // 离开页面不再有滚动变色效果
        this.isScroll = true
    }
    componentDidMount(){
        this.getSwiperData()
        this.getQuickNavs()
        this.getMainGoodsList()
        this.getRecommendGoodsList()
        window.addEventListener('scroll', this.handlePageScroll.bind(this), false)
    }
    componentWillUnmount() {
        this.isScroll = false
        window.removeEventListener('scroll',this.handlePageScroll.bind(this))
    }
    // 获取轮播图数据
    getSwiperData() {
        request('/api/home/index/slide')
            .then(res => {
                if(res.code === 200) {
                    this.setState({
                        aSwiper: res.data
                    }, () => {
                        new Swiper('.swiper-container', {
                            loop:true,
                            autoplay: 3000,//可选选项，自动滑动
                            pagination : '.swiper-pagination',
                            autoplayDisableOnInteraction : false
                        })
                    })
                }
            })
    }
    // 获取快速导航栏数据
    getQuickNavs() {
        request('/api/home/index/nav')
            .then(res => {
                if(res.code === 200) {
                    this.setState({
                        quickNavs: res.data
                    })
                }
            })
    }
    // 获取主商品数据
    getMainGoodsList() {
        request('/api/home/index/goodsLevel')
            .then(res => {
                if(res.code === 200) {
                    this.setState({
                        mainGoodsList: res.data
                    })
                }
            },() => {
                lazyImg()
            })
    }
    // 获取商品推荐数据
    getRecommendGoodsList() {
        request('/api/home/index/recom')
            .then(res => {
                console.log(res,'获取商品推荐数据')
                if(res.code === 200) {
                    this.setState({
                        recommendGoodsList: res.data
                    })
                }
            },() => {
                lazyImg()
            })
    }
    handlePageScroll() {
        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
        if(this.isScroll) {
            if(scrollTop >= 80) {
                this.setState({
                    isScroll: true
                })
            } else  {
                this.setState({
                    isScroll: false
                })
            }
        }
    }

    render(){
        return(
            <div id={'homeIndex'}>

             {/*  头部导航栏  */}
                <div className={this.state.isScroll ? 'header red-bg' : 'header'}>
                    <div className="category"></div>
                    <div className="search-container">
                        <div className="search-btn"></div>
                        <div className="search-holder">请输入宝贝名称</div>
                    </div>
                    <div className="login-container">
                        <div className="un-login">
                            登录
                        </div>
                    </div>
                </div>
            {/*  轮播图  */}
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        {this.state.aSwiper.map((item,index) => (
                            <div className="swiper-slide" key={index}>
                                <a href={item.webs} target='_blank' rel='noreferrer noopener'>
                                    <img src={item.image} alt={item.title}/>
                                </a>
                            </div>
                        ))}
                    </div>
                    <div className="swiper-pagination"></div>
                </div>

                <div className="quick-nav">
                    {this.state.quickNavs.map((item,index) => (
                        <div className="quick-nav-item" key={index}>
                            <img src={item.image} alt={item.title} className="nav-icon" />
                            <span className="nav-title">{item.title}</span>
                        </div>
                    ))}

                </div>
                {/* 商品主列表数据*/}
                {this.state.mainGoodsList.map((item,index) => (
                    <div className="recommend-list" key={index}>
                        <div className={index === 0 ? "title title-red" : index === 1 ? 'title title-orange': 'title title-green'} >
                            —— {item.title} ——
                        </div>
                        <div className="goods-level-1">
                            {index % 2 === 1? (
                                item.items.slice(0,2).map((item2,index2) => (
                                    <div className="goods-level-1-3 goods-level-1-3-left" key={index2}>
                                        <div className="level-1-3-title">{item2.title}</div>
                                        <div className="level-1-3-desc">火爆开售</div>
                                        <img className="level-1-3-img" src={item2.image} alt={item.title} />
                                    </div>
                                ))
                            ) : (
                                <React.Fragment>
                                    <div className="left">
                                        <div className="goods-name">
                                            {item.items[0].title}
                                        </div>
                                        <div className="goods-desc">
                                    <span className="goods-text">
                                        精品打折
                                    </span>
                                            <span className="goods-price">
                                         {item.items[0].price}元
                                    </span>
                                        </div>
                                        <div className="goods-img">
                                            <img src={item.items[0].image} alt={item.items[0].title} />
                                        </div>
                                    </div>
                                    <div className="right">
                                        <div className="right-items top">
                                            <div className="left-goods">
                                                <div className="main-title">{item.items[1].title}</div>
                                                <div className="sub-title">品质精挑</div>
                                            </div>
                                            <div className="goods-right">
                                                <img src={item.items[1].image} alt={item.items[0].title} />
                                            </div>
                                        </div>
                                        <div className="right-items">
                                            <div className="left-goods">
                                                <div className="main-title">{item.items[2].title}</div>
                                                <div className="sub-title">品质精挑</div>
                                            </div>
                                            <div className="goods-right">
                                                <img src={item.items[2].image} alt={item.items[2].title}/>
                                            </div>
                                        </div>
                                    </div>
                                </React.Fragment>
                            )}
                        </div>
                        <div className="goods-level-2">
                            {item.items.slice(index % 2 === 1 ? 2 : 3).map((item2,index2) => (
                                <div className="goods-level-2-item" key={index2}>
                                    <div className="level-2-title">
                                        {item2.title}
                                    </div>
                                    <img className="level-2-img" src={item2.image} />
                                    <div className="level-2-current-price">
                                        ¥{item2.price}
                                    </div>
                                    <div className="level-2-old-price">
                                        ¥ <span>{item2.price *2}</span>
                                    </div>

                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            <div className="goods-recommend-title">
                <div className="line"></div>
                <div className="content">
                    <div className="love-icon"></div>
                    <div className="love-text">为您推荐</div>
                </div>
                <div className="line"></div>
            </div>


            <div className="goods-list">
                {this.state.recommendGoodsList.map((item,index) => (
                    <div className="goods-item" key={index}>
                        <div className="goods-content">
                            <img className="goods-cover" data-echo={item.image} src={require("../../../assets/images/common/lazyImg.jpg")} alt={item.title}/>
                            <div className="goods-title">{item.title}</div>
                            <div className="goods-price">¥{item.price}.00</div>
                        </div>
                    </div>
                ))}
            </div>
         </div>
        );
    }
}