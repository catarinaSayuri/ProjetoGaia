import imageGaia from '../../assets/images/imageGaia.png';
import { TextAboutGaia } from '../texts/texts';
import { TitleAbout, TitleAboutGaia } from '../titles/titles';
import './aboutGaia.css'

export const AboutGaia = () => {
  return (
    <div className="aboutGaia">
      <div className="textBlock">
        <TitleAbout/>
        <div className="aboutContent">
          <img src={imageGaia} alt="Logo Gaia" className="gaiaLogo" />
          <div className='container-text-about-gaia'>
            <TitleAboutGaia/>
            <TextAboutGaia/>
          </div>
        </div>
      </div>
    </div>
  );
};



