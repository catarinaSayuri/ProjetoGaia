export const FooterColumn = ({ title, iconSrc, links }) => {
  return (
    <div className="footer-column">
      <h4 className="containerIconTitleFooter">
        <img src={iconSrc} alt="" className="footer-icon" />
        {title}
      </h4>
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};
