import "./nav.css";

export const Nav = ({ open, closeMenu }) => {
  return (
    <nav className={`nav ${open ? "open" : ""}`}>
      {/* Botão fechar X */}
      <button className="closeButton" onClick={closeMenu} aria-label="Fechar menu">
        &times;
      </button>

      <a href="#sobre-nos" onClick={closeMenu}>Sobre nós</a>
      <a href="#biblioteca-verde" onClick={closeMenu}>Biblioteca verde</a>
      <a href="#sustentabilidade" onClick={closeMenu}>Sustentabilidade em Ação</a>
      <a href="#sobre-iniciativa" onClick={closeMenu}>Sobre a iniciativa</a>
      <a href="#contato" onClick={closeMenu}>Entre em contato</a>
    </nav>
  );
};
