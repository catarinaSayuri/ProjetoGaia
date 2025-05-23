import arvore from '../../assets/images/arvore.png';
import { TextFinal } from "../texts/texts";
import './sectionFinal.css';

export const SectionFinal = () => {
    return (
        <section className="section-final">
            <TextFinal />
            <img src={arvore} alt="Árvore representando sustentabilidade" className="final-image" />
        </section>
    );
};
