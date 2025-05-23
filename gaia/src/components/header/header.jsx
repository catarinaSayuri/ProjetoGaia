import React, { useState } from "react";
import { IconHeader } from "./iconHeader/iconHeader.jsx";
import { Nav } from "./nav/nav.jsx";
import './header.css';

export const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);
    const closeMenu = () => setMenuOpen(false);

    return (
        <>
            {/* Fundo escuro (overlay) */}
            <div
                className={`menuOverlay ${menuOpen ? "active" : ""}`}
                onClick={closeMenu}
            />

            <header className="header">
                <IconHeader />

                {!menuOpen && (
                    <button
                        className="menuButton"
                        onClick={toggleMenu}
                        aria-label="Abrir menu"
                    >
                        &#9776;
                    </button>
                )}


                {/* Passa estado para Nav */}
                <Nav open={menuOpen} closeMenu={closeMenu} />
            </header>
        </>
    );
};
