import Image from "next/image";
import SlideGallery from "../components/main/home/slideGallery";
import Footer from "../components/sub/footer";
import Navbar from "../components/sub/navbar";
import { useState } from "react";
import Layout from "../components/sub/layout";

export default function Home() {
  const [data, setData] = useState([
    {
      imgUrl: "/images/slides/w1.png",
      name: "Colorful Overall",
      short_description:
        "A taste of Overall made for easy wear and comfortable movement in the metaverse world",
    },
    {
      imgUrl: "/images/slides/w2.png",
      name: "Colorful Overall 2",
      short_description:
        "A taste of Overall made for easy wear and comfortable movement in the metaverse world",
    },
    {
      imgUrl: "/images/slides/w3.png",
      name: "Colorful Overall 3",
      short_description:
        "A taste of Overall made for easy wear and comfortable movement in the metaverse world",
    },
    {
      imgUrl: "/images/slides/w4.png",
      name: "Colorful Overall 4",
      short_description:
        "A taste of Overall made for easy wear and comfortable movement in the metaverse world",
    },
    {
      imgUrl: "/images/slides/w5.png",
      name: "Colorful Overall 5",
      short_description:
        "A taste of Overall made for easy wear and comfortable movement in the metaverse world",
    },
    {
      imgUrl: "/images/slides/w6.png",
      name: "Colorful Overall",
      short_description:
        "A taste of Overall made for easy wear and comfortable movement in the metaverse world",
    },
    {
      imgUrl: "/images/slides/w7.png",
      name: "Colorful Overall",
      short_description:
        "A taste of Overall made for easy wear and comfortable movement in the metaverse world",
    },
    {
      imgUrl: "/images/slides/w8.png",
      name: "Colorful Overall",
      short_description:
        "A taste of Overall made for easy wear and comfortable movement in the metaverse world",
    },
    {
      imgUrl: "/images/slides/w1.png",
      name: "Colorful Overall",
      short_description:
        "A taste of Overall made for easy wear and comfortable movement in the metaverse world",
    },
    {
      imgUrl: "/images/slides/w2.png",
      name: "Colorful Overall",
      short_description:
        "A taste of Overall made for easy wear and comfortable movement in the metaverse world",
    },
  ]);

  return (
    <div className="mudishx__home">
      <Layout titleText={"Home | Mudish-X"} page={1}>
        <div className="mudishx__home__main__sectionTwo__first__auth__container">
          <button>Connect Wallet</button>
        </div>

        <div className="mudishx__home__main__sectionTwo__banner">
          <div className="mudishx__home__main__sectionTwo__banner__sectionOne">
            <h1>Your One stop Metaverse NFT Fashion Marketplace</h1>

            <button>Explore Marketplace</button>
          </div>
          <div className="mudishx__home__main__sectionTwo__banner__sectionTwo">
            <img src="/images/demo.gif" alt="" />
          </div>
        </div>

        <section className="section latest__wearables">
          <h3 className="latest__wearables__heading">Latest Wearables</h3>

          <SlideGallery data={data} />
        </section>

        <section className="features section">
          <div className="features__header__container">
            <h3>Features</h3>
            <p>
              Our promising model is obtained from exploring the Metaverse, We
              intend to leverage the possibility of using the Metaverse to
              Strengthen the relationship between the fashion house/designers
              and their consumers.
            </p>
          </div>

          <div className="features__body__container">
            <div className="features__body__container__sectionOne">
              <img src="/images/main_features.png" alt="" />
            </div>
            <div className="features__body__container__sectionTwo">
              <div className="features__body__container__sectionTwo__item">
                <div className="features__body__container__sectionTwo__item__gifContainer">
                  <img src="" alt="" />
                </div>
                <div className="features__body__container__sectionTwo__item__textContainer">
                  <h1>NFT Purchase</h1>
                  <p>
                    Get an NFT of digital wearables serving as digital assets
                    with utility functions
                  </p>
                  <div className="features__body__container__sectionTwo__item__textContainer__buttonContainer__long">
                    <button>Explore Marketplace</button>
                  </div>
                </div>
              </div>

              <div className="features__body__container__sectionTwo__item">
                <div className="features__body__container__sectionTwo__item__gifContainer">
                  <img src="" alt="" />
                </div>
                <div className="features__body__container__sectionTwo__item__textContainer">
                  <h1>Auction and Bid Wearables</h1>
                  <p>
                    Auction and Bid for any digital fashion wearable at a price
                    of your choice on the Auction section of Mudish-X
                    marketplace
                  </p>
                  <div className="features__body__container__sectionTwo__item__textContainer__buttonContainer">
                    <button>Explore Bids</button>
                  </div>
                </div>
              </div>

              <div className="features__body__container__sectionTwo__item">
                <div className="features__body__container__sectionTwo__item__gifContainer">
                  <img src="" alt="" />
                </div>
                <div className="features__body__container__sectionTwo__item__textContainer">
                  <h1>Digital to Physical Wearable Redemption</h1>
                  <p>
                    MudishX enables you Purchase Digital wearable for your
                    in-game avatar and make it possible to redeem this digital
                    wearable to Physical wearable
                  </p>
                </div>
              </div>

              <div className="features__body__container__sectionTwo__item">
                <div className="features__body__container__sectionTwo__item__gifContainer">
                  <img src="" alt="" />
                </div>
                <div className="features__body__container__sectionTwo__item__textContainer">
                  <h1>Digital Ownership Right</h1>
                  <p>
                    Purchasing a wearable at MudishX gives you exclusive right
                    of ownership of the NFT and the wearable provided you still
                    own them
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="services section">
          <div className="features__header__container">
            <h3>Services</h3>
          </div>

          <div className="services__list__container">
            <div className="services__item">
              <div className="services__item__icon__container">
                <img src="/images/services_1.png" alt="" />
              </div>
              <div className="services__icon__header">
                <h3>Purchase Fashion In-Game Items</h3>
              </div>
              <div className="services__icon__body">
                <p>
                  Explore the Metaverse in Amazing and Unique Fashion
                  collectables from MudishX NFT Marketplace
                </p>
              </div>
            </div>

            <div className="services__item">
              <div className="services__item__icon__container">
                <img src="/images/services_2.jpg" alt="" />
              </div>
              <div className="services__icon__header">
                <h3>
                  Redeem NFT Fashion collectable from the Metaverse to the real
                  world{" "}
                </h3>
              </div>
              <div className="services__icon__body">
                <p>
                  On MudishX all Collectables are backed up with it
                  corresponding real world Fashion Item and can be redeemed for
                  the real world item from the Metaverse
                </p>
              </div>
            </div>

            <div className="services__item">
              <div className="services__item__icon__container">
                <img src="/images/services_3.jpg" alt="" />
              </div>
              <div className="services__icon__header">
                <h3>Leasing/Borrowing NFTs</h3>
              </div>
              <div className="services__icon__body">
                <p>
                  You have a chance to borrow any of product for a specified
                  amount of time
                </p>
              </div>
            </div>

            <div className="services__item">
              <div className="services__item__icon__container">
                <img src="/images/services_4.svg" alt="" />
              </div>
              <div className="services__icon__header">
                <h3>Daily Blog Update</h3>
              </div>
              <div className="services__icon__body">
                <p>
                  Get Updates on New Wearables, Cryptocurrencies news and things
                  happening in the metaverse
                </p>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </div>
  );
}

/*






*/
