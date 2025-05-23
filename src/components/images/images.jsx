import imgHome from '../../assets/images/kidsimage.png';
import imgGirls from '../../assets/images/girlsImage.jpg';
import decoracaoImg from '../../assets/images/decoracao.png';
import './images.css';

export const ImageHome = () => {
  return (
    <img className='imgHome' src={imgHome} alt="Imagem da sessão inicial" />
  );
};

export const ImageGirls = () => {
  return (
    <img className='imgGirls' src={imgGirls} alt="Imagem das garotas na sessão inicial" />
  );
};

export const DecorationImage = () => {
  return (
    <img className='decorationImage' src={decoracaoImg} alt="Imagem decorativa" />
  );
};
