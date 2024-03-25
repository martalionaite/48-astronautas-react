import { Logo } from "../logo/Logo";
import { Nav } from "../nav/Nav";

function Header() {
    return (
        <header className="container">
            <Logo />
            <Nav />
        </header>
    );
}

export { Header };