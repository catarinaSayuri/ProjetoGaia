import { SubTitleSectionDescription, SubTitleSectionInfo, TextDescription, TextHome, TextResearch, TitleResearch, TitleSectionDescription, TitleSectionInfo } from "../titles/titles.jsx";
import './texts.css'

export const TextsInfo = () => {
  return (

    <div className="textContainer">
      <TitleSectionInfo />
      <SubTitleSectionInfo />
      <TextHome />
    </div>

  );
};

export const TextsDescription = () => {
  return (

    <div className="textContainer">
      <TitleSectionDescription />
      <SubTitleSectionDescription />
      <TextDescription />
    </div>

  );
};


export const AboutResearch = () => {
  return (
    <div className="aboutResearch">
      <TitleResearch/>
      <TextResearch/>
    </div>
  );
};

export const TextAboutGaia = () => {
  return (
    <div className="text-about-gaia">
      <p>
        Gaia é uma aplicação educativa e interativa desenvolvido por estudantes do Colégio Estadual de Tempo Integral Professora Odontina Laranjeira de Souza (CETIPOLS) em Ibotirama, Bahia. Criado como solução para o problema do descarte inadequado de resíduos sólidos no ambiente escolar, a aplicação utiliza tecnologia para promover a educação ambiental e incentivar práticas sustentáveis. A iniciativa visa conscientizar, incentivar mudanças de comportamento e promover a sustentabilidade no ambiente escolar, contribuindo para a redução de resíduos e o fortalecimento da economia circular.
      </p>
    </div>
  );
};

export const TextFinal = () => {
  return (
    <div className="text-final-container">
      <p className="text-final">
        O futuro verde não é um sonho distante, é uma escolha que fazemos hoje.
      </p>
    </div>
  );
};




