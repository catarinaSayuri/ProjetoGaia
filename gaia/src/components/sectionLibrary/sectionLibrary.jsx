import { CardLibrary } from "./cardLibrary/cardLibrary";
import { TitleLibrary } from "../titles/titles";
import './sectionLibrary.css';
import { CardVideo } from "../sectionVideo/cardVideo/cardVideo";
import { IconYoutube } from "../sectionVideo/iconYoutube/iconYoutube";
import sustentabilidade from '../../assets/icons/iconsyt/sustentabilidade.jpg';
import tve from '../../assets/icons/iconsyt/tve.jpg';
import sbt from '../../assets/icons/iconsyt/sbt.jpg';
import cepagro from '../../assets/icons/iconsyt/cepagro.jpg';
import pipm from '../../assets/icons/iconsyt/pimp.jpg';
import iconNostalgia from '../../assets/icons/iconsyt/nostalgia.jpg';
import decora from '../../assets/icons/iconsyt/decora.jpg';
import douradinho from '../../assets/icons/iconsyt/douradinho.jpg';

export const SectionLibrary = () => {
    const scroll = (direction) => {
        const container = document.querySelector('.sectionLibrary');
        const scrollAmount = 300;
        container.scrollBy({
            left: direction === 'left' ? -scrollAmount : scrollAmount,
            behavior: 'smooth'
        });
    };

    return (
        <div className="library-container">
            <TitleLibrary />
            <div className="carouselWrapper">
                <button className="arrow left" onClick={() => scroll('left')}>←</button>
                <section className="sectionLibrary">
                    <CardVideo
                        image={sustentabilidade}
                        ytLogo={<IconYoutube />}
                        videoUrl="https://www.youtube.com/watch?v=hzJC75CjQAM"
                        description="Reportagem que aborda os desafios da gestão de resíduos sólidos urbanos, destacando práticas sustentáveis e políticas públicas em vigor."
                        avatar={sustentabilidade}
                        name="Gestão de Resíduos Sólidos Urbanos"
                        role="de Portal Sustentabilidade"
                        buttonColor="#45453A"
                    />

                    <CardVideo
                        image={tve}
                        ytLogo={<IconYoutube />}
                        videoUrl="https://www.youtube.com/watch?v=V_zRQTMEnT0"
                        description="Matéria especial sobre a Nova Política Nacional de Educação Ambiental, que reforça a importância da sustentabilidade no currículo escolar."
                        avatar={tve}
                        name="Nova Política Nacional de Educação Ambiental"
                        role="de TVE Espírito Santo"
                        buttonColor="#45453A"
                    />

                    <CardVideo
                        image={sbt}
                        ytLogo={<IconYoutube />}
                        videoUrl="https://www.youtube.com/watch?v=BV2LORkZWDk"
                        description="Entrevista com especialista do setor que analisa o cenário da reciclagem no Brasil e os principais entraves enfrentados atualmente."
                        avatar={sbt}
                        name="Especialista explica cenário da reciclagem de resíduos no Brasil"
                        role="de SBT News"
                        buttonColor="#45453A"
                    />

                    <CardVideo
                        image="https://img.youtube.com/vi/WJLACQ4fl2U/hqdefault.jpg"
                        ytLogo={<IconYoutube />}
                        videoUrl="https://youtu.be/WJLACQ4fl2U?feature=shared"
                        description="Explorando práticas sustentáveis para reduzir o desperdício no dia a dia e proteger o meio ambiente."
                        avatar={iconNostalgia}
                        name="Sustentabilidade no cotidiano"
                        role="de Canal Verde"
                        buttonColor="#45453A"
                    />

                    <CardVideo
                        image="https://img.youtube.com/vi/MiuIckYJfQY/hqdefault.jpg"
                        ytLogo={<IconYoutube />}
                        videoUrl="https://youtu.be/MiuIckYJfQY?si=AjLll9UgCLXElR2t"
                        description="Dicas e estratégias para aumentar a reciclagem em sua comunidade, tornando-a mais consciente."
                        avatar={pipm}
                        name="Reciclagem comunitária"
                        role="de Pimp My Carroça"
                        buttonColor="#45453A"
                    />

                    <CardVideo
                        image="https://img.youtube.com/vi/t-0b1k83h5g/hqdefault.jpg"
                        ytLogo={<IconYoutube />}
                        videoUrl="https://youtu.be/t-0b1k83h5g?si=BOoRBh4orYJyN-kY"
                        description="Como o manejo correto dos resíduos contribui para a saúde pública e o equilíbrio ambiental."
                        avatar={douradinho}
                        name="Impactos do manejo de resíduos"
                        role="de Escola Douradinho"
                        buttonColor="#45453A"
                    />

                    <CardVideo
                        image="https://img.youtube.com/vi/n5O_fawifUg/hqdefault.jpg"
                        ytLogo={<IconYoutube />}
                        videoUrl="https://youtu.be/n5O_fawifUg?si=V2mBz88Vij1R3Ub3"
                        description="Conheça histórias inspiradoras de catadores e seu papel fundamental na cadeia da reciclagem."
                        avatar={pipm}
                        name="Histórias dos catadores"
                        role="de Pimp My Carroça"
                        buttonColor="#45453A"
                    />

                    <CardVideo
                        image="https://img.youtube.com/vi/tqr9ww9TTY8/hqdefault.jpg"
                        ytLogo={<IconYoutube />}
                        videoUrl="https://youtu.be/tqr9ww9TTY8?feature=shared"
                        description="Conheça a importância da coleta seletiva e como ela pode ser aplicada com facilidade em casa."
                        avatar={cepagro}
                        name="Coleta seletiva em casa"
                        role="de Cepagro"
                        buttonColor="#45453A"
                    />

                    <CardVideo
                        image="https://img.youtube.com/vi/r4a_GqdWR3M/hqdefault.jpg"
                        ytLogo={<IconYoutube />}
                        videoUrl="https://youtu.be/r4a_GqdWR3M?feature=shared"
                        description="A jornada dos resíduos e a logística reversa que ajuda a minimizar os impactos ambientais."
                        avatar={sustentabilidade}
                        name="Logística reversa dos resíduos"
                        role="de Portal Sustentabilidade"
                        buttonColor="#45453A"
                    />

                    <CardVideo
                        image="https://img.youtube.com/vi/xcyL9niACcU/hqdefault.jpg"
                        ytLogo={<IconYoutube />}
                        videoUrl="https://youtu.be/xcyL9niACcU?feature=shared"
                        description="Técnicas para reaproveitar materiais recicláveis e transformar resíduos em arte e utilidades."
                        avatar={decora}
                        name="Reaproveitamento criativo"
                        role="de Tati Decora"
                        buttonColor="#45453A"
                    />
                </section>
                <button className="arrow right" onClick={() => scroll('right')}>→</button>
            </div>
        </div>
    );
};
