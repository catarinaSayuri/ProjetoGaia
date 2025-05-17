import { IconHeader } from "./iconHeader/iconHeader.jsx";
import { Nav } from "./nav/nav.jsx";
import './header.css'

export const Header = () => {
    return (
        <header className="header">
            <IconHeader />
            <Nav />
        </header>
    );
};
