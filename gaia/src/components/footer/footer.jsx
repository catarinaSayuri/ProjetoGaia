import './footer.css';
import { FooterColumn } from './FooterColumn';
import { FooterSocial } from './FooterSocial';
import categoriasIcon from '../../assets/icons/categoriasIcon.png';
import contatoIcon from '../../assets/icons/contatoIcon.png';
import instituicaoIcon from '../../assets/icons/InstituicaoIcon.png';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <FooterColumn
          title="Categorias"
          iconSrc={categoriasIcon}
          links={[
            { label: 'Sobre nós', href: '#sobre-nos' },
            { label: 'Biblioteca Verde', href: '#biblioteca-verde' },
            { label: 'Sustentabilidade em Ação', href: '#sustentabilidade' },
            { label: 'Sobre a iniciativa', href: '#sobre-iniciativa' },
          ]}
        />
        <FooterColumn
          title="Suporte"
          iconSrc={contatoIcon}
          links={[
            { label: 'Contate-nos', href: '#contato' },
            { label: 'Desenvolvedores', href: '#' },
          ]}
        />


      </div>
      <FooterSocial />
    </footer>
  );
};
