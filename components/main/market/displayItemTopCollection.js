import formatter from "../../utils/numberFormatter";

function DisplayItemTopCollection({imgUrl, name, price, amount}) {
    return (
        <div className="display__item__top__collection">
            <div className="display__item__top__collection__sectionOne">
                <img src={imgUrl} alt=""/>
            </div>

            <div className="display__item__top__collection__sectionTwo">
                <h3>{name}</h3>

                
                <h2>
                    <p>Volume</p>
                    ${formatter(price)}
                </h2>
            </div>

            <div className="display__item__top__collection__sectionThree">

                <p>+{formatter(amount)}%</p>
            </div>
        </div>
    )
}

export default DisplayItemTopCollection
