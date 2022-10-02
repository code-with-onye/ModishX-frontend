// this houses the navbar and an child component

import { PagesOutlined } from "@mui/icons-material";
import Footer from "./footer";
import Navbar from "./navbar";

function Layout({children, titleText, page}) {
    return (
        <main className="mudishx__home__main">
            <div className="mudishx__home__main__sectionTwo__sectionOne">
            <Navbar titleText={titleText} page={PagesOutlined}/>
            </div>
            <div className="mudishx__home__main__sectionTwo">
                {children}

                <Footer />
            </div>
        </main>
    )
}

export default Layout;
