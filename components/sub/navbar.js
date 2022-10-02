import Head from 'next/head';
import Link from "next/link";
import {
    IconButton,
    Avatar
} from "@mui/material";
import {
    AccountBalanceWalletRounded,
    HomeRounded
} from "@mui/icons-material";
import {useState, useEffect} from "react";
import router from "next/router";


function Navbar({titleText, page}) {
    const [smallMenuState, setSmallMenuState] = useState(false);

    useEffect(() => {
        // Making sure that this block of code only runs in the browser
        if (typeof window !== "undefined") {
            const homeIcon = document.querySelector("#home__icon__button")
            const marketIcon = document.querySelector("#market__icon__button")
            const auctionIcon = document.querySelector("#auction__icon__button")
        
            const homeIconView = document.querySelector("#home__icon__view")
            const marketIconView = document.querySelector("#market__icon__view")
            const auctionIconView = document.querySelector("#auction__icon__view")

        
            homeIcon.addEventListener("mouseover", () => {
                homeIconView.classList.remove("hide")
            })
            homeIcon.addEventListener("mouseout", () => {
                homeIconView.classList.add("hide")
            })
            marketIcon.addEventListener("mouseover", () => {
                marketIconView.classList.remove("hide")
            })
            marketIcon.addEventListener("mouseout", () => {
                marketIconView.classList.add("hide")
            })
            auctionIcon.addEventListener("mouseover", () => {
                auctionIconView.classList.remove("hide")
            })
            auctionIcon.addEventListener("mouseout", () => {
                auctionIconView.classList.add("hide")
            })
        }
    }, [])

    return (
        <div className="navbar">
            <Head>
                <title>{titleText}</title>
                <meta name="description" content="Mudish-X a web3.0 decentralized fashion marketplace" />
                <link rel="icon" href="/favicon.ico" />
                <link href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css" rel="stylesheet" />
            </Head>

            <div className="navbar__desktop">
                <div className="navbar__desktop__logoContainer" style={{
                    cursor: "pointer",
                }} onClick={() => {router.push("/")}}>
                    <img src="/icons/logo.svg" alt=""/>
                </div>

                <div className="navbar__desktop__menuContainer">
                    <Link href="/">
                        <div className="nav__icon__wrapper">
                            <IconButton id="home__icon__button">
                                <i className={`ri-home-smile-2-fill ${page == 1 ? "active__desktop__navigation" : ""}`}></i>
                            </IconButton>

                            <p className="navbar__desktop__menuContainer__detail hide" id="home__icon__view">Home</p>
                        </div>
                    </Link>
                    <Link href="/market">
                        <div className="nav__icon__wrapper">
                            <IconButton id="market__icon__button">
                                <i className={`ri-store-2-fill ${page == 2 ? "active__desktop__navigation" : ""}`}></i>
                            </IconButton>

                            <p className="navbar__desktop__menuContainer__detail hide" id="market__icon__view">Market</p>
                        </div>
                    </Link>
                    <Link href="/auction">
                        <div className="nav__icon__wrapper">
                            <IconButton id="auction__icon__button">
                                <i className={`ri-auction-fill ${page == 3 ? "active__desktop__navigation" : ""}`}></i>
                            </IconButton>

                            <p className="navbar__desktop__menuContainer__detail hide" id="auction__icon__view">Auction</p>
                        </div>
                    </Link>
                </div>

                <div className="navbar__desktop__authContainer">
                    <Avatar />

                    <IconButton>
                        <i className="ri-wallet-3-fill"></i>
                    </IconButton>
                </div>
            </div>
            
            <div className="navbar__mobile">
                {
                    !smallMenuState && (
                        <div className="navbar__mobile__main" id="navbar__mobile__main">
                            {/* <IconButton onClick={() => {setSmallMenuState(true)}}>
                                <i className="ri-menu-2-line"></i>
                            </IconButton> */}
                            <div className="navbar__mobile__main__display__container">
                                <div className="navbar__mobile__main__display__container__logoContainer">
                                    <img src="/icons/logo.svg" alt=""/>
                                </div>
                                <IconButton onClick={() => {setSmallMenuState(true)}}>
                                    <i className="ri-menu-3-fill"></i>
                                </IconButton>
                            </div>

                        </div>
                    )
                }
                
                {
                    smallMenuState && (
                        <div className="navbar__mobile__show__case">
                            <div className="navbar__mobile__show__case__close">
                                <IconButton onClick={() => {setSmallMenuState(false)}}>
                                    <i className="ri-close-line"></i>
                                </IconButton>
                            </div>

                            <div className="navbar__mobile__show__case__logoContainer">
                                <img src="/icons/logo.svg" alt=""/>
                            </div>

                            <div className="navbar__mobile__show__case__menuList">
                                <Link href="/">
                                    <div className="smallMenuListItem">
                                        <IconButton>
                                            <i className={`ri-home-smile-2-fill ${page == 1 ? "active__desktop__navigation" : ""}`}></i>
                                        </IconButton> Home
                                    </div>
                                </Link>
                                <Link href="/market">
                                    <div className="smallMenuListItem">
                                        <IconButton>
                                            <i className={`ri-store-2-fill ${page == 2 ? "active__desktop__navigation" : ""}`}></i>
                                        </IconButton> Market
                                    </div>
                                </Link>
                                <Link href="/auction">
                                    <div className="smallMenuListItem">
                                        <IconButton>
                                            <i className={`ri-auction-fill ${page == 3 ? "active__desktop__navigation" : ""}`}></i>
                                        </IconButton> Auction
                                    </div>
                                </Link>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Navbar
