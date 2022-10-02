// This page would show the product, fetching it from the database (not blockchain)
import Layout from "../../components/sub/layout";



function MarketItem() {
    return (
        <Layout titleText={"Market | Mudish-X"} page={2}>
            <div className="market__item">
                <div className="market__item__banner">
                    <div className="market__item__banner__sectionOne">
                        <div className="market__item__banner__sectionOne__imgWrapper">
                            <img src="/images/slides/w2.png" alt=""/>
                        </div>
                    </div>

                    <div className="market__item__banner__sectionTwo">
                        <div className="market__item__banner__sectionTwo__contentContainer">
                            <div className="market__item__banner__sectionTwo__contentContainer__header">
                                <h1>The Hatman</h1>

                                <p>ID: <span>30948749038</span></p>
                            </div>

                            <div className="market__item__banner__sectionTwo__contentContainer__priceContainer">
                                <span>Price</span>

                                <h3>0.05 MATIC</h3>
                            </div>

                            <div className="market__item__banner__sectionTwo__contentContainer__cta">
                                <button className="market__item__banner__sectionTwo__contentContainer__cta__buyNow">Buy Now</button>
                                <button className="market__item__banner__sectionTwo__contentContainer__cta__tryOn">Try On</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="market__item__description">
                    <div className="market__item__description__headingContainer">
                        <h3>Description</h3>
                    </div>

                    <div className="market__item__description__body">
                        <p>
                            Lorem ipsum dolor sit amet consectetur 
                            adipisicing elit. Praesentium adipisci 
                            ad nam dolor temporibus fuga obcaecati 
                            commodi quas sapiente quis. Reprehenderit 
                            sapiente nihil similique voluptatum minima 
                            error praesentium, nemo, debitis, 
                            voluptatem odio nam minus alias facilis 
                            exercitationem illum iure. Aliquid.
                        </p>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default MarketItem
