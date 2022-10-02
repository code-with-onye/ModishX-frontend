import {IconButton} from "@mui/material";
import Link from "next/link";


function Footer() {
    return (
        <div className="footer">
            <div className="footer__sectionOne">
                <img src="/icons/logo.svg" alt=""/>

                <p>
                    We are a team of talents pioneering blockchain adaptation into the Fashion industry using thw Metaverse. 
                    We aim improve shopping experience and be the fashion hub got in-game avatars</p>
            
                <div className="footer__sectionOne__socials">
                    <IconButton>
                        <i className="ri-twitter-line"></i>
                    </IconButton>
                    <IconButton>
                        <i className="ri-mail-line"></i>
                    </IconButton>
                    <IconButton>
                        <i className="ri-medium-fill"></i>
                    </IconButton>
                    <IconButton>
                        <i className="ri-linkedin-box-fill"></i>
                    </IconButton>
                    <IconButton>
                        <i className="ri-instagram-line"></i>
                    </IconButton>
                </div>
            </div>

            <div className="footer__sectionTwo">
                <h3>Quicklinks</h3>

                <div className="footer__sectionTwo__linkContainer">
                    <Link href="/">Our Team</Link>
                    <Link href="/">Roadmap</Link>
                    <Link href="/">Whitepaper</Link>
                    <Link href="/">Partners</Link>
                    <Link href="/">About</Link>
                </div>
            </div>

            <div className="footer__sectionThree">
                <h3>Contact</h3>

                <div className="footer__sectionTwo__linkContainer">
                    <a href="">Email</a>
                    <a href="">Twitter</a>
                    <a href="">Instagram</a>
                    <a href="">Medium</a>
                    <a href="">LinkedIn</a>
                </div>
            </div>
        </div>
    )
}

export default Footer
