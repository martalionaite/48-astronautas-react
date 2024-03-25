import { Link } from './Link';
import { Btn } from '../btn/Btn';
import style from './Nav.module.css';

function Nav() {
    return (
        <nav className={style.mainNav}>
            <Link title="About" />
            <Link title="Jobs" isActive={true} />
            <Link title="Portfolio" />
            <Link title="Contact" />
            <Btn title="Register" color="white" size="small" />
        </nav>
    );
}

export { Nav };