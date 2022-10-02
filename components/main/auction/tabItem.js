import {Avatar} from "@mui/material"

function TabItem({type}) {
    // The tab data would be passed in via the props


    return (
        <div className="tab__items__container">
            <div className="tab__item">
                <div className="tab__item__imgContainer">
                    {
                        type === "Trending" ? <img src="/images/slides/w8.png" alt=""/> : <img src="/images/slides/w7.png" alt=""/>
                    }
                </div>

                <div className="tab__item__textArea">
                    <h3>Ankara Mina #23 <span><img src="/icons/matic.png" alt=""/> MATIC</span></h3>

                    <div className="tab__item__bid__detail">
                        <div className="tab__item__bid__detail__owner">
                            <div className="tab__item__bid__detail__owner__imgContainer">
                                <Avatar />
                            </div>
                            <div className="tab__item__bid__detail__owner__textArea">
                                <h3>Developer Uche</h3>
                                <p>Owner</p>
                            </div>
                        </div>

                        <div className="tab__item__bid__detail__currentBid__Container">
                            <span>Current Bid</span>
                            <h4>20 MATIC</h4>
                            <h5>$20,000</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TabItem;
