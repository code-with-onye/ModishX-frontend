import Navbar from "../../components/sub/navbar";
import {
    IconButton
} from "@mui/material";
import DisplayItemTopSales from "../../components/main/market/displayItemTopSales"
import DisplayItemTopCollection from "../../components/main/market/displayItemTopCollection";
import DisplayItemTopGainers from "../../components/main/market/displayItemTopGainers";
import Layout from "../../components/sub/layout";
import {useState} from "react";
import TabItem from "../../components/main/market/tabItem";


function MarketIndex() {
    const [toggleState, setToggleState] = useState(1);
    const [tabs, setTabs] = useState([
        "Trending", "Latest", "Men", "Women", "Accessories", "Bags", "Shoes", "Sneakers", "Jewelries"    
    ]);
    const [activeTab, setActiveTab] = useState("Trending");



    const toggleTab = (index) => {
      setToggleState(index);
    };

    return (
        <div className="market">
            <Layout titleText={"Market | Mudish-X"} page={2}>
                <div className="marketplace__header">
                    <div className="marketplace__header__sectionOne">
                        <IconButton>
                            <i className="ri-arrow-left-line"></i>
                        </IconButton>
                    </div>
                    <div className="marketplace__header__sectionTwo">
                            <i className="ri-shopping-bag-fill"></i>
                            <h3 className="marketplace__header__sectionTwo__textContainer">Instance Purchase</h3>
                    </div>
                    <div className="marketplace__header__sectionThree">
                        <IconButton>
                            <i className="ri-notification-2-fill"></i>
                        </IconButton>
                        <IconButton>
                            <i className="ri-wallet-3-fill"></i>
                        </IconButton>
                        <button className="marketplace__header__sectionTwo__addressButton">0Xbfex...fde</button>
                    </div>
                </div>

                <div className="marketplace__search__container">
                    <div className="marketplace__search">
                        <input type="search" name="search" id="search" placeholder="Search Wearable"/>
                        <i className="ri-search-2-line"></i>
                    </div>
                </div>

                <div className="marketplace__display">
                    <div className="marketplace__display__one">
                        <h3 className="marketplace__display__one__header">Top Sales</h3>

                        <div className="marketplace__display__one__body">
                            <DisplayItemTopSales amount={12300} name={"Multicolor Costume"} price={20000} imgUrl={"/images/slides/w1.png"}/>
                            <DisplayItemTopSales amount={12300} name={"Multicolor Costume"} price={20000} imgUrl={"/images/slides/w2.png"}/>
                            <DisplayItemTopSales amount={12300} name={"Multicolor Costume"} price={20000} imgUrl={"/images/slides/w3.png"}/>
                        </div>
                    </div>

                    <div className="marketplace__display__two">
                        <h3 className="marketplace__display__one__header">Top Collection</h3>

                        <div className="marketplace__display__one__body">
                            <DisplayItemTopCollection amount={12300} name={"Full Custume (Orange)"} price={63345907} imgUrl={"/images/slides/w4.png"}/>
                            <DisplayItemTopCollection amount={12300} name={"Full Custume (Orange)"} price={63345907} imgUrl={"/images/slides/w5.png"}/>
                            <DisplayItemTopCollection amount={12300} name={"Full Custume (Orange)"} price={63345907} imgUrl={"/images/slides/w6.png"}/>
                        </div>
                    </div>

                    <div className="marketplace__display__three">
                        <h3 className="marketplace__display__one__header">Top Gainers</h3>

                        <div className="marketplace__display__one__body">
                            <DisplayItemTopGainers amount={12300} name={"Full Custume (Orange)"} price={63345907} imgUrl={"/images/slides/w6.png"}/>
                            <DisplayItemTopGainers amount={12300} name={"Full Custume (Orange)"} price={63345907} imgUrl={"/images/slides/w6.png"}/>
                            <DisplayItemTopGainers amount={12300} name={"Full Custume (Orange)"} price={63345907} imgUrl={"/images/slides/w6.png"}/>
                        </div>
                    </div>
                </div>
            
                <section className="marketplace__list__main">
                    <div className="marketplace__list__main__intro">
                        <h3>Explore Marketplace</h3>
                    </div>

                    <div className="marketplace__list__main__tabs__wrapper">
                        <div className="marketplace__list__main__tabs__wrapper__tab__nav">
                            {
                                tabs.map((tab, index) => {
                                    return (
                                        <button
                                            key={index} 
                                            className={activeTab === tab ? "marketplace__list__main__tabs__wrapper__tab__nav__item marketplace__list__main__tabs__wrapper__tab__nav__item-active" : "marketplace__list__main__tabs__wrapper__tab__nav__item"}
                                            onClick={() => {
                                                setActiveTab(tab)
                                            }}>
                                                {tab}
                                        </button>
                                    )
                                })
                            }
                        </div>

                        <div className="marketplace__list__main__tabs__wrapper__content">
                                <TabItem type={activeTab} />
                                <TabItem type={activeTab} />
                                <TabItem type={activeTab} />
                                <TabItem type={activeTab} />
                                <TabItem type={activeTab} />
                                <TabItem type={activeTab} />
                                <TabItem type={activeTab} />
                                <TabItem type={activeTab} />
                                <TabItem type={activeTab} />
                                <TabItem type={activeTab} />
                                <TabItem type={activeTab} />
                        </div>
                    </div>
                </section>  

                <section className="brands">
                    <div className="brands__heading">
                        <h1>Brands</h1>
                        <p>Shop from Modish-X amazing luxurious brands</p>
                    </div>

                    <div className="brands__body">
                        <img src="/images/brands/bb1.png" alt=""/>
                        <img src="/images/brands/bb2.png" alt=""/>
                        <img src="/images/brands/bb3.png" alt=""/>
                        <img src="/images/brands/bb4.png" alt=""/>
                        <img src="/images/brands/bb5.png" alt=""/>
                        <img src="/images/brands/bb6.png" alt=""/>
                        <img src="/images/brands/bb7.png" alt=""/>
                        <img src="/images/brands/bb8.png" alt=""/>
                        <img src="/images/brands/bb9.png" alt=""/>
                        <img src="/images/brands/bb10.png" alt=""/>
                        <img src="/images/brands/bb11.png" alt=""/>
                        <img src="/images/brands/bb12.png" alt=""/>
                        <img src="/images/brands/bb13.png" alt=""/>
                        <img src="/images/brands/bb14.png" alt=""/>
                        <img src="/images/brands/bb15.png" alt=""/>
                        <img src="/images/brands/bb16.png" alt=""/>
                        <img src="/images/brands/bb17.png" alt=""/>
                    </div>
                </section>   
                <section className="active">
                    activity 
                </section>  
            </Layout> 
        </div>
    )
}

export default MarketIndex;
