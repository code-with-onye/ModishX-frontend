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

                    <p><span>Price</span> <span>$300</span></p>
                </div>
            </div>
        </div>
    )
}

export default TabItem;
