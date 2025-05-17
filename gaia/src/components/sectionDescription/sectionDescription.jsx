import { ImageGirls } from "../images/images.jsx";
import { TextsDescription} from "../texts/texts.jsx";
import './sectionDescription.css'

export const SectionDescription = () => {
    return (
        <section className="sectionDescription">
            <>
            <TextsDescription/>
             <ImageGirls />
            </>

        </section>
    );
};
