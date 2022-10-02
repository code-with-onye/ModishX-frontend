import formatter from "../../utils/numberFormatter";

function DisplayItemTopGainers({imgUrl, name, price, amount}) {
    return (
        <div className="display__item__top__gainers">
            <div className="display__item__top__gainers__sectionOne">
                <img src={imgUrl} alt=""/>
            </div>

            <div className="display__item__top__gainers__sectionTwo">
                <h3>{name}</h3>

                <p>Volume</p>
                <h2>${formatter(price)}</h2>
            </div>

            <div className="display__item__top__gainers__sectionThree">

                <p>+{formatter(amount)}%</p>
            </div>
        </div>
    )
}

export default DisplayItemTopGainers
