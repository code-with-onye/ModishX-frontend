import Layout from "../../components/sub/layout";
import {
    Avatar,
    IconButton
} from "@mui/material";
import formatter from "../../components/utils/numberFormatter";
import TabItem from "../../components/main/auction/tabItem";
import { useState } from "react";

function AuctionIndex() {
    const [tabs, setTabs] = useState([
        "Trending", "Latest", "Men", "Women", "Accessories", "Bags", "Shoes", "Sneakers", "Jewelries"    
    ]);
    const [activeTab, setActiveTab] = useState("Trending");


    return (
        <div className="auction">
            <Layout titleText={"Auction | Mudish-X"} page={3}>
                <div className="marketplace__header">
                    <div className="marketplace__header__sectionOne">
                        <IconButton>
                            <i className="ri-arrow-left-line"></i>
                        </IconButton>
                    </div>
                    <div className="marketplace__header__sectionTwo">
                            <i className="ri-auction-fill"></i>
                            <h3 className="marketplace__header__sectionTwo__textContainer">Auction Center</h3>
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

                <div className="auction__latest__bid__wrapper">
                    <div className="auction__latest__bid__header">
                        <h3>Latest Bid</h3>
                    </div>

                    <div className="auction__latest__bid">
                        <div className="auction__latest__bid__sectionOne">
                            <div className="auction__latest__bid__image__item">
                                <img src="/images/slides/w1.png" alt=""/>
                            </div>
                        </div>

                        <div className="auction__latest__bid__sectionTwo">
                            <div className="auction__latest__bid__sectionTwo__nameContainer">
                                <h3>Ankra Toluoi</h3>
                            </div>

                            <div className="auction__latest__bid__sectionTwo__priceContainer">
                                <span>Price</span>

                                <div className="auction__latest__bid__sectionTwo__priceContainer__innerWrapper">
                                    <p>${formatter(40000)}</p>
                                    <p className="percentage-green">+15.18%</p>
                                </div>
                            </div>

                            <div className="auction__bidding__detail">
                                <div className="auction__bidding__detail__sectionOne">
                                    <div className="auction__bidding__detail__sectionOne__textArea">
                                        <span>Current Bid</span>

                                        <h2>32 MATIC</h2>

                                        <p>${formatter(2000)}</p>
                                    </div>

                                    <div className="auction__bidding__detail__sectionOne__cta">
                                        <button>View More Detail</button>
                                    </div>
                                </div>

                                <div className="auction__bidding__detail__sectionTwo">
                                    <div className="auction__bidding__detail__sectionTwo__textArea">
                                        <span>Auction Ends In</span>

                                        <h2>00h: 40m :30s</h2>
                                    </div>

                                    <div className="auction__bidding__detail__sectionTwo__cta">
                                        <button>Place A Bid</button>
                                    </div>
                                </div>
                            </div>

                            <div className="auction__latest__bid__sectionTwo__persons__container">
                                <div className="auction__latest__bid__sectionTwo__persons__container__owner">
                                    <div className="auction__latest__bid__sectionTwo__persons__container__owner__sectionOne">
                                        <Avatar />
                                    </div>
                                    <div className="auction__latest__bid__sectionTwo__persons__container__owner__sectionTwo">
                                        <h3>Alexander Lux</h3>
                                        <p>Owner</p>
                                    </div>
                                </div>

                                <div className="auction__latest__bid__sectionTwo__persons__container_highest__bidder">
                                    <div className="auction__latest__bid__sectionTwo__persons__container_highest__bidder__sectionOne">
                                        <Avatar />
                                    </div>
                                    <div className="auction__latest__bid__sectionTwo__persons__container_highest__bidder__sectionTwo">
                                        <h3>Developer Uche</h3>
                                        <p>highest Bider</p>
                                    </div>
                                </div>
                            </div>
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
            </Layout>
        </div>
    )
}

export default AuctionIndex;
