import React from 'react';
import '../../../assets/css/home/index/index.scss'
import Swiper from  '../../../assets/js/libs/swiper.min'
import '../../../assets/css/common/swiper.min.css'
export default class  IndexComponent extends React.Component{
    componentDidMount(){
        new Swiper('.swiper-container', {
            loop:true,
            autoplay: 3000,//可选选项，自动滑动
            pagination : '.swiper-pagination',
            autoplayDisableOnInteraction : false
        })
    }
    render(){
        return(
            <div id={'homeIndex'}>
             {/*  header  */}
                <div className="header">
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
            {/*  swiper  */}
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <img src="//vueshop.glbuys.com/uploadfiles/1484285302.jpg" alt=""/>
                        </div>
                        <div className="swiper-slide">
                            <img src="//vueshop.glbuys.com/uploadfiles/1484285334.jpg" alt=""/>
                        </div>
                        <div className="swiper-slide">
                            <img src="//vueshop.glbuys.com/uploadfiles/1524206455.jpg" alt=""/>
                        </div>
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            {/*  quick-nav  */}
                <div className="quick-nav">
                    <div className="quick-nav-item">
                        <img src="//vueshop.glbuys.com/uploadfiles/1484287695.png" alt="" className="nav-icon" />
                        <span className="nav-title">潮流女装</span>
                    </div>
                    <div className="quick-nav-item">
                        <img src="//vueshop.glbuys.com/uploadfiles/1484287842.png" alt="" className="nav-icon" />
                        <span className="nav-title">品牌男装</span>
                    </div>
                    <div className="quick-nav-item">
                        <img src="//vueshop.glbuys.com/uploadfiles/1484287842.png" alt="" className="nav-icon" />
                        <span className="nav-title">电脑办公</span>
                    </div>
                    <div className="quick-nav-item">
                        <img src="//vueshop.glbuys.com/uploadfiles/1484288118.png" alt="" className="nav-icon" />
                        <span className="nav-title">手机数码</span>
                    </div>
                </div>
            {/*  recommend-list  */}
                <div className="recommend-list">
                    <div className="title title-red">
                        —— 潮流女装 ——
                    </div>
                    <div className="goods-level-1">
                        <div className="left">
                            <div className="goods-name">
                                高跟鞋女2018新款春季单鞋仙女甜美链子尖头防水台细跟女鞋一字带
                            </div>
                            <div className="goods-desc">
                                <span className="goods-text">
                                    精品打折
                                </span>
                                <span className="goods-price">
                                    12.8元
                                </span>
                            </div>
                            <div className="goods-img">
                                <img src="//vueshop.glbuys.com/uploadfiles/1524556409.jpg" alt="" />

                            </div>
                        </div>
                        <div className="right">
                            <div className="right-items top">
                                <div className="left-goods">
                                    <div className="main-title">欧美尖头蝴蝶结拖鞋女夏外穿2018新款绸缎面细跟凉拖半拖鞋穆勒鞋</div>
                                    <div className="sub-title">品质精挑</div>
                                </div>
                                <div className="goods-right">
                                    <img src="//vueshop.glbuys.com/uploadfiles/1524556315.jpg" alt=""/>
                                </div>
                            </div>
                            <div className="right-items">
                                <div className="left-goods">
                                    <div className="main-title">老爹鞋女韩版ulzzang原宿百搭网鞋透气网面内增高运动鞋网鞋夏季</div>
                                    <div className="sub-title">品质精挑</div>
                                </div>
                                <div className="goods-right">
                                    <img src="//vueshop.glbuys.com/uploadfiles/1524556213.jpg" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="goods-level-2">
                        <div className="goods-level-2-item">
                            <div className="level-2-title">
                                小白鞋女2018春夏季新款韩版百搭平底学生原宿ulzzang帆布鞋板鞋
                            </div>
                            <img className="level-2-img" src="//vueshop.glbuys.com/uploadfiles/1524556119.jpg" />
                            <div className="level-2-current-price">
                                ¥288
                            </div>
                            <div className="level-2-old-price">
                                ¥ <span>567</span>
                            </div>

                        </div>
                        <div className="goods-level-2-item">
                            <div className="level-2-title">
                                雪兰黛2018春季新款高跟鞋尖头细跟性感鞋子女韩版透气纱网女单鞋
                            </div>
                            <img className="level-2-img" src="//vueshop.glbuys.com/uploadfiles/1524556026.jpg" />
                            <div className="level-2-current-price">
                                ¥280
                            </div>
                            <div className="level-2-old-price">
                                ¥ <span>560</span>
                            </div>
                        </div>
                        <div className="goods-level-2-item">
                            <div className="level-2-title">
                                2018夏季新款韩版百搭高跟鞋女显瘦细跟黑色工作鞋金属扣露趾凉鞋
                            </div>
                            <img className="level-2-img" src="//vueshop.glbuys.com/uploadfiles/1524555954.jpg" />
                            <div className="level-2-current-price">
                                ¥300
                            </div>
                            <div className="level-2-old-price">
                                ¥ <span>600</span>
                            </div>
                        </div>
                        <div className="goods-level-2-item">
                            <div className="level-2-title">
                                2018新款韩版高跟鞋女凉鞋夏细跟尖头一字扣猫跟鞋包头百搭磨砂皮
                            </div>
                            <img className="level-2-img" src="//vueshop.glbuys.com/uploadfiles/1524555891.jpg" />
                            <div className="level-2-current-price">
                                ¥200
                            </div>
                            <div className="level-2-old-price">
                                ¥ <span>400</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="recommend-list">
                    <div className="title title-orange">
                        —— 品牌男装 ——
                    </div>
                    <div className="goods-level-1">
                       <div className="goods-level-1-3 goods-level-1-3-left">
                            <div className="level-1-3-title">新款短袖男士夏季3d立体图案体恤猴子搞怪大猩猩个性t恤大码衣服</div>
                            <div className="level-1-3-desc">火爆开售</div>
                            <img className="level-1-3-title" src="//vueshop.glbuys.com/uploadfiles/1524568819.jpg" />
                       </div>
                        <div className="goods-level-1-3">
                            <div className="level-1-3-title">成人五分裤海边度假短裤男士潮流沙滩库子2018新款大裤衩夏装悠闲</div>
                            <div className="level-1-3-desc">火爆开售</div>
                            <img className="level-1-3-title" src="//vueshop.glbuys.com/uploadfiles/1524567419.jpg" />
                        </div>
                    </div>
                    <div className="goods-level-2">
                        <div className="goods-level-2-item">
                            <div className="level-2-title">
                                小白鞋女2018春夏季新款韩版百搭平底学生原宿ulzzang帆布鞋板鞋
                            </div>
                            <img className="level-2-img" src="//vueshop.glbuys.com/uploadfiles/1524556119.jpg" />
                            <div className="level-2-current-price">
                                ¥288
                            </div>
                            <div className="level-2-old-price">
                                ¥ <span>567</span>
                            </div>

                        </div>
                        <div className="goods-level-2-item">
                            <div className="level-2-title">
                                雪兰黛2018春季新款高跟鞋尖头细跟性感鞋子女韩版透气纱网女单鞋
                            </div>
                            <img className="level-2-img" src="//vueshop.glbuys.com/uploadfiles/1524556026.jpg" />
                            <div className="level-2-current-price">
                                ¥280
                            </div>
                            <div className="level-2-old-price">
                                ¥ <span>560</span>
                            </div>
                        </div>
                        <div className="goods-level-2-item">
                            <div className="level-2-title">
                                2018夏季新款韩版百搭高跟鞋女显瘦细跟黑色工作鞋金属扣露趾凉鞋
                            </div>
                            <img className="level-2-img" src="//vueshop.glbuys.com/uploadfiles/1524555954.jpg" />
                            <div className="level-2-current-price">
                                ¥300
                            </div>
                            <div className="level-2-old-price">
                                ¥ <span>600</span>
                            </div>
                        </div>
                        <div className="goods-level-2-item">
                            <div className="level-2-title">
                                2018新款韩版高跟鞋女凉鞋夏细跟尖头一字扣猫跟鞋包头百搭磨砂皮
                            </div>
                            <img className="level-2-img" src="//vueshop.glbuys.com/uploadfiles/1524555891.jpg" />
                            <div className="level-2-current-price">
                                ¥200
                            </div>
                            <div className="level-2-old-price">
                                ¥ <span>400</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="recommend-list">
                    <div className="title title-green">
                        —— 电脑办公 ——
                    </div>
                    <div className="goods-level-1">
                        <div className="left">
                            <div className="goods-name">
                                酷睿i5四核GTX1060独显台式机组装电脑主机整机 绝地求生吃鸡游戏
                            </div>
                            <div className="goods-desc">
                                <span className="goods-text">
                                    精品打折
                                </span>
                                <span className="goods-price bg-green">
                                    4599元
                                </span>
                            </div>
                            <div className="goods-img">
                                <img src="//vueshop.glbuys.com/uploadfiles/1524561138.jpg" alt="" />

                            </div>
                        </div>
                        <div className="right">
                            <div className="right-items top">
                                <div className="left-goods">
                                    <div className="main-title">金属鼠标垫个性定制LOGO大号高贵时尚航空级铝合金圆形游戏办公批</div>
                                    <div className="sub-title">品质精挑</div>
                                </div>
                                <div className="goods-right">
                                    <img src="//vueshop.glbuys.com/uploadfiles/1524559781.png" alt=""/>
                                </div>
                            </div>
                            <div className="right-items">
                                <div className="left-goods">
                                    <div className="main-title">微软ARC TOUCH无线蓝牙鼠标 苹果MAC笔记本创意超薄便携时尚折叠</div>
                                    <div className="sub-title">品质精挑</div>
                                </div>
                                <div className="goods-right">
                                    <img src="//vueshop.glbuys.com/uploadfiles/1524559415.png" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="goods-level-2">
                        <div className="goods-level-2-item">
                            <div className="level-2-title">
                                美国tomtoc13/15寸苹果笔记本macbook时尚商务手提男女电脑包纤薄
                            </div>
                            <img className="level-2-img" src="//vueshop.glbuys.com/uploadfiles/1524558854.png" />
                            <div className="level-2-current-price">
                                ¥149
                            </div>
                            <div className="level-2-old-price">
                                ¥ <span>298</span>
                            </div>

                        </div>
                        <div className="goods-level-2-item">
                            <div className="level-2-title">
                                以诺双肩电脑包13.3/14/15.6寸男小米苹果电脑背包商务笔记本包女
                            </div>
                            <img className="level-2-img" src="//vueshop.glbuys.com/uploadfiles/1524558775.jpg" />
                            <div className="level-2-current-price">
                                ¥129
                            </div>
                            <div className="level-2-old-price">
                                ¥ <span>256</span>
                            </div>
                        </div>
                        <div className="goods-level-2-item">
                            <div className="level-2-title">
                                联想华硕神舟笔记本贴膜15.6 戴尔宏基HP外壳保护膜电脑贴纸14寸
                            </div>
                            <img className="level-2-img" src="//vueshop.glbuys.com/uploadfiles/1524558607.jpg" />
                            <div className="level-2-current-price">
                                ¥28
                            </div>
                            <div className="level-2-old-price">
                                ¥ <span>56</span>
                            </div>
                        </div>
                        <div className="goods-level-2-item">
                            <div className="level-2-title">
                                ETS六代 笔记本抽风式散热器侧吸式戴尔联想电脑风扇17机14寸15.6
                            </div>
                            <img className="level-2-img" src="//vueshop.glbuys.com/uploadfiles/1524558535.jpg" />
                            <div className="level-2-current-price">
                                ¥108
                            </div>
                            <div className="level-2-old-price">
                                ¥ <span>216</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}