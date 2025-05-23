import { CardVideo } from './cardVideo/cardVideo';
import { IconYoutube } from './iconYoutube/iconYoutube';
import { TitleVideo } from '../titles/titles';
import './sectionVideo.css';
import iconNostalgia from '../../assets/icons/iconsyt/nostalgia.jpg';
import pipm from '../../assets/icons/iconsyt/pimp.jpg';
import douradinho from '../../assets/icons/iconsyt/douradinho.jpg';
import scarti from '../../assets/icons/iconsyt/scarti.jpg';
import cepagro from '../../assets/icons/iconsyt/cepagro.jpg';
import sustentabilidade from '../../assets/icons/iconsyt/sustentabilidade.jpg';
import magicas from '../../assets/icons/iconsyt/magicas.jpg';
import recicla from '../../assets/icons/iconsyt/recicla.jpg';
import conosco from '../../assets/icons/iconsyt/conosco.jpg';
import papai from '../../assets/icons/iconsyt/papai.jpg';
import casarosa from '../../assets/icons/iconsyt/casarosa.jpg';
import decora from '../../assets/icons/iconsyt/decora.jpg';
import moda from '../../assets/icons/iconsyt/moda.jpg';
import show from '../../assets/icons/iconsyt/show.jpg';
import { ArrowButton } from '../buttons/button';

export const SectionVideo = () => {
    const scroll = (direction) => {
        const container = document.querySelector('.sectionVideoCarousel');
        const scrollAmount = 300;
        container.scrollBy({
            left: direction === 'left' ? -scrollAmount : scrollAmount,
            behavior: 'smooth'
        });
    };

    return (
        <div className='video-container'>
            <TitleVideo />

            <div className="carouselWrapper">
                <ArrowButton direction="left" onClick={() => scroll('left')} />
                <section className="sectionVideoCarousel">
                    <CardVideo
                        image="https://img.youtube.com/vi/sfa-jnXtA84/hqdefault.jpg"
                        ytLogo={<IconYoutube />}
                        videoUrl="https://youtu.be/sfa-jnXtA84?si=CQFNHQmgH8IUzle-"
                        description="Uma análise detalhada sobre o impacto do lixo no meio ambiente e como atitudes diárias podem ajudar a reduzir a poluição."
                        avatar={iconNostalgia}
                        name="O que nunca te contaram sobre o lixo"
                        role="de canal Nostalgia"
                        buttonColor="#45453A"
                    />

                    <CardVideo
                        image="https://img.youtube.com/vi/PvJf2zhaKKs/hqdefault.jpg"
                        ytLogo={<IconYoutube />}
                        videoUrl="https://youtu.be/PvJf2zhaKKs?si=Mj9VbfvHpEyEKODG"
                        description="Dicas práticas e essenciais dos catadores para separar corretamente os resíduos em casa, facilitando a reciclagem."
                        avatar={pipm}
                        name="Catadores dando dicas de como separar seus resíduos em casa"
                        role="de Pimp My Carroça"
                        buttonColor="#45453A"
                    />

                    <CardVideo
                        image="https://img.youtube.com/vi/Db87yDu9VoE/hqdefault.jpg"
                        ytLogo={<IconYoutube />}
                        videoUrl="https://youtu.be/Db87yDu9VoE?si=gQV2zvLlTyDo3N9u"
                        description="Uma visão histórica sobre a evolução da educação ambiental no Brasil e sua importância para o futuro."
                        avatar={douradinho}
                        name="Uma breve história da educação ambiental"
                        role="de Escola Douradinho"
                        buttonColor="#45453A"
                    />

                    <CardVideo
                        image="https://img.youtube.com/vi/ZHbNmiYRaF8/hqdefault.jpg"
                        ytLogo={<IconYoutube />}
                        videoUrl="https://youtu.be/ZHbNmiYRaF8?si=dwZYQiwP77l2VJBv"
                        description="Passo a passo das etapas envolvidas no gerenciamento correto dos resíduos sólidos urbanos."
                        avatar={scarti}
                        name="Etapas do gerenciamento dos resíduos sólidos"
                        role="de Scarti"
                        buttonColor="#45453A"
                    />

                    <CardVideo
                        image="https://img.youtube.com/vi/0PMa0O3wFsk/hqdefault.jpg"
                        ytLogo={<IconYoutube />}
                        videoUrl="https://youtu.be/0PMa0O3wFsk?si=QwNWAlH1Ef1AZcIj"
                        description="Conheça a origem da profissão de catador e a importância social e ambiental dessa atividade."
                        avatar={pipm}
                        name="Como surgiu a profissão catador?"
                        role="de Pimp My Carroça"
                        buttonColor="#45453A"
                    />

                    <CardVideo
                        image="https://img.youtube.com/vi/pd1ah84ZgTo/hqdefault.jpg"
                        ytLogo={<IconYoutube />}
                        videoUrl="https://youtu.be/pd1ah84ZgTo?si=O-RLidVwEzDw7eOu"
                        description="Tudo sobre as características, vantagens e desafios da embalagem Tetra Pak para reciclagem."
                        avatar={pipm}
                        name="Embalagem da Tetra Pak"
                        role="de Pimp My Carroça"
                        buttonColor="#45453A"
                    />

                    <CardVideo
                        image="https://img.youtube.com/vi/4Kt_wdNFDAU/hqdefault.jpg"
                        ytLogo={<IconYoutube />}
                        videoUrl="https://youtu.be/4Kt_wdNFDAU?si=Q_7oTJsqK_nO-lTJ"
                        description="Compostagem doméstica: aprenda a transformar resíduos orgânicos em adubo natural para o seu jardim."
                        avatar={cepagro}
                        name="Com Postagem"
                        role="Cepagro"
                        buttonColor="#45453A"
                    />

                    <CardVideo
                        image="https://img.youtube.com/vi/tjajGOWIHAQ/hqdefault.jpg"
                        ytLogo={<IconYoutube />}
                        videoUrl="https://youtu.be/tjajGOWIHAQ?si=oZHYsQD3pPNIbx7ZJ"
                        description="A jornada dos resíduos perigosos e como o descarte correto protege o meio ambiente e a saúde pública."
                        avatar={sustentabilidade}
                        name="Jornada dos Resíduos Perigosos"
                        role="de Portal Sustentabilidade"
                        buttonColor="#45453A"
                    />

                    <CardVideo
                        image="https://img.youtube.com/vi/S86siUbAHxk/hqdefault.jpg"
                        ytLogo={<IconYoutube />}
                        videoUrl="https://youtu.be/S86siUbAHxk"
                        description="Conceitos e práticas para uma gestão eficiente dos resíduos, com foco na sustentabilidade."
                        avatar={cepagro}
                        name="Gestão de Resíduos"
                        role="de Cepagro"
                        buttonColor="#45453A"
                    />

                    <CardVideo
                        image="https://img.youtube.com/vi/tjJvL8FP1IU/hqdefault.jpg"
                        ytLogo={<IconYoutube />}
                        videoUrl="https://youtu.be/tjJvL8FP1IU?si=9XVxyXZEKlXdMm8j"
                        description="Uma reflexão poética sobre a Terra, nosso planeta e a responsabilidade ambiental de todos."
                        avatar={magicas}
                        name="A TERRA"
                        role="de HISTÓRIAS MÁGICAS"
                        buttonColor="#45453A"
                    />

                    <CardVideo
                        image="https://img.youtube.com/vi/hwxIoW3cj4U/hqdefault.jpg"
                        ytLogo={<IconYoutube />}
                        videoUrl="https://youtu.be/hwxIoW3cj4U?si=8-rqpvkBlckme0tO"
                        description="Explicação do processo de reciclagem do plástico e sua importância para reduzir o impacto ambiental."
                        avatar={recicla}
                        name="Processo de reciclagem do plástico "
                        role="de Recicla Sampa"
                        buttonColor="#45453A"
                    />

                    <CardVideo
                        image="https://img.youtube.com/vi/EDBEDtGH-8k/hqdefault.jpg"
                        ytLogo={<IconYoutube />}
                        videoUrl="https://youtu.be/EDBEDtGH-8k?si=J7nwesdgmnXyIYHo"
                        description="Análise da cultura do desperdício e como pequenas mudanças podem gerar grandes impactos positivos."
                        avatar={conosco}
                        name="Cultura do Desperdício "
                        role="de É conosco"
                        buttonColor="#45453A"
                    />

                    <CardVideo
                        image="https://img.youtube.com/vi/fSZOHXypWnA/hqdefault.jpg"
                        ytLogo={<IconYoutube />}
                        videoUrl="https://youtu.be/fSZOHXypWnA?si=WTsseS2S2tEk3rfO"
                        description="Discussão sobre o consumismo e suas consequências ambientais específicas para o Brasil."
                        avatar={papai}
                        name="O consumismo e as consequências ambientais para o Brasil"
                        role="de Aprendi com o Papai"
                        buttonColor="#45453A"
                    />

                    <CardVideo
                        image="https://img.youtube.com/vi/KWIEnztOXJU/hqdefault.jpg"
                        ytLogo={<IconYoutube />}
                        videoUrl="https://youtu.be/KWIEnztOXJU?si=7IHoGCWlptB9SB1t"
                        description="Documentário sobre a rotina do lixo e seus impactos sociais e ambientais na cidade."
                        avatar={casarosa}
                        name="O Lixo Nosso de Cada Dia"
                        role="de Casa Rosa Filmes"
                        buttonColor="#45453A"
                    />

                    <CardVideo
                        image="https://img.youtube.com/vi/JQvgZh71sx4/hqdefault.jpg"
                        ytLogo={<IconYoutube />}
                        videoUrl="https://youtu.be/JQvgZh71sx4?si=VAPm6u2H133zk8Un"
                        description="Tutorial de projetos DIY para reaproveitar lixo em decoração criativa e sustentável."
                        avatar={decora}
                        name="Junção Especial do lixo ao lixo DIY"
                        role="de Tati Decora"
                        buttonColor="#45453A"
                    />

                    <CardVideo
                        image="https://img.youtube.com/vi/Cm-7_2QjjY4/hqdefault.jpg"
                        ytLogo={<IconYoutube />}
                        videoUrl="https://youtu.be/Cm-7_2QjjY4?si=UJ7aCh_9xuZHFZ7d"
                        description="Como fazer cestos de papelão com corda sisal para reutilizar materiais e decorar sua casa."
                        avatar={decora}
                        name="Cesto De Papelão Com Corda Sisal"
                        role="de Tati Decora"
                        buttonColor="#45453A"
                    />

                    <CardVideo
                        image="https://img.youtube.com/vi/I3_uEEjTS3Y/hqdefault.jpg"
                        ytLogo={<IconYoutube />}
                        videoUrl="https://youtu.be/I3_uEEjTS3Y?si=f8ww5v2zLSteOTAg"
                        description="Transformações incríveis de móveis velhos, dando uma nova vida com técnicas simples de DIY."
                        avatar={decora}
                        name="30 Transformações Incríveis de móveis velhos DIY"
                        role="de Tati Decora"
                        buttonColor="#45453A"
                    />

                    <CardVideo
                        image="https://img.youtube.com/vi/fTe_UciWbtE/hqdefault.jpg"
                        ytLogo={<IconYoutube />}
                        videoUrl="https://youtu.be/fTe_UciWbtE?si=7pBcERp1TKLFJyBT"
                        description="DIY de costura para renovar suas roupas e contribuir com a moda sustentável."
                        avatar={moda}
                        name="DIY de Costura"
                        role="de Ider Alves - DIY Moda Fashion "
                        buttonColor="#45453A"
                    />

                    <CardVideo
                        image="https://img.youtube.com/vi/gGmkRUrvgII/hqdefault.jpg"
                        ytLogo={<IconYoutube />}
                        videoUrl="https://youtu.be/gGmkRUrvgII?si=iDlFSuCZaDRr7ADo"
                        description="Ideias práticas para consertos fáceis que vão renovar suas roupas e prolongar o uso."
                        avatar={moda}
                        name="11 IDEIAS DE CONSERTOS FÁCEIS PARA RENOVAR TUAS ROUPAS"
                        role="de Dida Oliver"
                        buttonColor="#45453A"
                    />

                    <CardVideo
                        image="https://img.youtube.com/vi/RYJ6pdDlYu8/hqdefault.jpg"
                        ytLogo={<IconYoutube />}
                        videoUrl="https://youtu.be/RYJ6pdDlYu8?si=RwXSuevIi3gNo4kO"
                        description="Quatro ideias criativas para transformar roupas velhas em peças novas e estilosas."
                        avatar={show}
                        name="4 IDEIAS PARA TRANSFORMAR ROUPAS VELHAS"
                        role="de Show de Artesanato"
                        buttonColor="#45453A"
                    />

                </section>
                <ArrowButton direction="right" onClick={() => scroll('right')} />
            </div>
        </div>
    );
};
