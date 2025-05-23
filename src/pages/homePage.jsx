import { Header } from "../components/header/header";
import { SectionDescription } from "../components/sectionDescription/sectionDescription";
import { SectionInfo } from "../components/sectionInfo/sectionInfo";
import { SectionLibrary } from "../components/sectionLibrary/sectionLibrary";
import { SectionVideo } from "../components/sectionVideo/sectionVideo";
import { SectionAbout } from "../components/sectionAbout/sectionAbout";
import { SectionGame } from "../components/sectionGame/sectionGame";
import { SectionFinal } from "../components/sectionFinal/sectionFinal";
import { Footer } from "../components/footer/footer";
import '../pages/homePage.css'
import { SectionDesenvolvedoras } from "../components/sectionDesenvolvedoras/sectionDesenvolvedoras";

function HomePage() {
    return (
        <div className="home-page">

            <Header />

            <SectionInfo />

            <div id="sobre-nos" >
                <SectionDescription />
            </div>

            <div id="biblioteca-verde" >
                <SectionLibrary />
            </div>

            <div id="sustentabilidade" >
                <SectionVideo />
            </div>

            <div id="sobre-iniciativa" >
                <SectionAbout />
            </div>

            <div className="section-game-wrapper">
                <SectionGame />
            </div>

            <div id="desenvolvedoras">
                <SectionDesenvolvedoras />
            </div>

            <SectionFinal />

            <div id="contato">
                <Footer />
            </div>

        </div>
    );
}

export default HomePage;
