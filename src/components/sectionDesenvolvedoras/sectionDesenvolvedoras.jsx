import './sectionDesenvolvedoras.css';
import catarina from '../../assets/images/catarina.jpg';
import iasmin from '../../assets/images/iasmin.jpg';
import isamaia from '../../assets/images/isamaia.jpg';
import yasmim from '../../assets/images/yasmim.jpg';
import lavinia from '../../assets/images/lavinia.jpg';

export const SectionDesenvolvedoras = () => {
    const desenvolvedoras = [
        {
            nome: "Catarina Sayuri",
            tarefa: "Desenvolvedora Front-end",
            imagem: catarina,
            linkedin: "https://www.linkedin.com/in/catarina-sayuri/"

        },
        {
            nome: "Iasmin Jesus",
            tarefa: "Scrum Master",
            imagem: iasmin,
            linkedin: "https://www.linkedin.com/in/iasmim-/"

        },
        {
            nome: "Isabelly Maia",
            tarefa: "Líder",
            imagem: isamaia,
            linkedin: "https://www.linkedin.com/in/isabellymaia/"

        },
        {
            nome: "Yasmin Minario",
            tarefa: "Designer",
            imagem: yasmim,
            linkedin: "https://www.linkedin.com/in/yasmin-minario/"

        },
        {
            nome: "Lavínia Mendonça",
            tarefa: "Game Designer",
            imagem: lavinia,
            linkedin: "https://www.linkedin.com/in/lav%C3%ADnia-mendon%C3%A7a-b4b977243/"

        },
    ];

    return (
        <section className="section-desenvolvedoras">
            <h2>Desenvolvedoras do Site</h2>
            <div className="cards-container">
                {desenvolvedoras.map((dev, index) => (
                    <div key={index} className="card-dev">
                        <a href={dev.linkedin} target="_blank" rel="noopener noreferrer">
                            <img src={dev.imagem} alt={dev.nome} className="foto-dev" />
                        </a>
                        <p className="nome">{dev.nome}</p>
                        <p className="tarefa">{dev.tarefa}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};