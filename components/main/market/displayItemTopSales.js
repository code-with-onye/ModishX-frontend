import formatter from "../../utils/numberFormatter";

function DisplayItemTopSales({imgUrl, name, price, amount}) {
    
    return (
        <div className="display__item__top__sales">
            <div className="display__item__top__sales__sectionOne">
                <img src={imgUrl} alt=""/>
            </div>

            <div className="display__item__top__sales__sectionTwo">
                <h3>{name}</h3>

                <h2>
                    <p>Price</p>
                    ${formatter(price)}
                </h2>
            </div>

            <div className="display__item__top__sales__sectionThree">
                <p>Sales</p>

                <p>{formatter(amount)}</p>
            </div>
        </div>
    )
}

export default DisplayItemTopSales;
