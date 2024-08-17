import imagemData from "../../imagens.json";
import { IData } from "../../Types";
import favoritoAtivo from "../../assets/favoritoAtivo.svg";
import favorito from "../../assets/favorito.svg";
import styled from "styled-components";

const CardEstilizacao = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    justify-items: center;
    align-items: start;
    padding: 20px;

    @media (max-width: 1024px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 15px;
    }

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 10px;
    }
`

const CardItem = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    position: relative;

    @media (max-width: 768px) {
        width: 100%;
    }
`

const Imagem = styled.img`
    width: 100%;
    border-radius: 8px;

    @media (max-width: 768px) {
        border-radius: 4px;
    }
`

const TituloEstilizacao = styled.h2`
    font-family: 'DM Sans', sans-serif;
    font-size: 16px;
    font-weight: 500;
    color: #FEF7EE;
    margin-top: 1rem;
    align-items: flex-start;
    text-align: left;

    @media (max-width: 768px) {
        font-size: 14px;
    }
`

const FavoritoContainer = styled.div`
    display: flex;
    align-items: center;
    margin-top: 0.5rem;
`

const ImagemFavorito = styled.img`
    margin-right: 0.2rem;
`

const RatingEstilizacao = styled.span`
     margin-right: 0.2rem;
     font-family: 'DM Sans', sans-serif;
     font-size: 14px;
     font-weight: 500;
`

const VotosEstilizacao = styled.span`
    font-family: 'DM Sans', sans-serif;
    font-size: 14px;
    color: #6F757C;
`

const PrecoEstilizacao = styled.span`
    position: absolute;
    bottom: 2.5rem;
    right: 0;
    font-family: 'DM Sans', sans-serif;
    font-size: 12px;
    font-weight: 550;
    color: #111315;
    box-sizing: border-box;
    background-color: #BEE3CC;
    padding: 0.5em 0.8em;
    border-radius: 4px;

    @media (max-width: 768px) {
        bottom: 1.5rem;
    }
`

const PopularSection = styled.div`
    position: absolute;
    top: 10px;
    left: 10px;
    background-color: #F6C768;
    color: #1B1D1F;
    font-size: 12px;
    font-family: 'DM Sans', sans-serif;
    font-weight: 500;
    padding: 0.3rem 0.8rem;
    border-radius: 12px;
    z-index: 1;

    @media (max-width: 768px) {
        font-size: 10px;
        top: 5px;
        left: 5px;
    }
`

const Card = () => {
    return (
        <CardEstilizacao>
            {imagemData.map((imagem: IData) => (
                <CardItem key={imagem.id}>
                    {imagem.popular && <PopularSection>Popular</PopularSection>}
                    <Imagem src={imagem.image} alt={imagem.name} />
                    <TituloEstilizacao>{imagem.name}</TituloEstilizacao>
                    <FavoritoContainer>
                        <ImagemFavorito src={imagem.votes > 0 ? favoritoAtivo : favorito} />
                        <RatingEstilizacao>{imagem.rating !== null ? Number(imagem.rating) : "No ratings"}</RatingEstilizacao>
                        <VotosEstilizacao>{imagem.votes > 0 ? `(${imagem.votes} votes)` : ''}</VotosEstilizacao>
                    </FavoritoContainer>
                    <PrecoEstilizacao>{imagem.price}</PrecoEstilizacao>
                </CardItem>
            ))}
        </CardEstilizacao>
    )
}

export default Card;