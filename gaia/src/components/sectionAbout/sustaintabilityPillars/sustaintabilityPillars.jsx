import pilarAmbiental from '../../../assets/icons/pilarSustentavelIcon.png';
import pilarSocial from '../../../assets/icons/pilarSocialIcon.png';
import pilarEconomico from '../../../assets/icons/pilarEconomicoIcon.png';
import {TitleSustentability } from '../../titles/titles';

export const SustainabilityPillars = () => {
    return (
        <div className="sustaintabilityPillars">
            <TitleSustentability/>
            <div className="pillars">
                <div className="pillar">
                    <img src={pilarAmbiental} alt="Pilar Ambiental" />          
                    <p>Pilar Ambiental</p>
                </div>
                <div className="pillar">
                    <img src={pilarSocial} alt="Pilar Social" />
                    <p>Pilar Social</p>
                </div>
                <div className="pillar">
                    <img src={pilarEconomico} alt="Pilar Econômico" />
                    <p>Pilar Econômico</p>
                </div>
            </div>
            <button className="learnMore">Saiba mais!</button>
        </div>
    );
};
