import { FaFacebookSquare, FaTwitterSquare, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import style from './Footer.module.css';

function Footer() {
    return (
        <footer className="container">
            <div className={style.socials}>
                <a className={style.socialLink} href="/">
                    <FaFacebookSquare size="2rem" />
                </a>
                <a className={style.socialLink} href="/">
                    <FaTwitterSquare size="2rem" />
                </a>
                <a className={style.socialLink} href="/">
                    <FaInstagramSquare size="2rem" />
                </a>
                <a className={style.socialLink} href="/">
                    <FaLinkedin size="2rem" />
                </a>
            </div>
            <p>&copy; 2024 - All rights reserved</p>
        </footer>
    );
}

export { Footer };