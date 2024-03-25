import style from './Logo.module.css';
import logo from '../../assets/img/logo.webp';

function Logo() {
    return <img className={style.logo} src={logo} alt="Logo" />;
}

export { Logo };