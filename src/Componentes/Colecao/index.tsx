import styled, { createGlobalStyle } from "styled-components";
import imagemTitulo from "../../assets/vector.svg";
import Card from "../Card";
import Footer from "../Footer";

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        background-color: #111315;
    }
`

const ContainerEstilizacao = styled.div`
    position: absolute;
    background-image: url(${imagemTitulo});
    background-position: 70% 20%;
    background-repeat: no-repeat;
    top: 30%;
    left: 50%;
    transform: translate(-50%);
    padding: 2rem;
    border-radius: 8px;
    text-align: center;
    color: #FEF7EE;
    max-width: 1200px;
    width: 100%;
    z-index: 10;
    background-color: #1B1D1F;
`

const ImagemTitulo = styled.div`
    width: 100%;
    height: 100%;
`

const TituloEstilizacao = styled.h1`
    font-family: 'DM Sans', sans-serif;
    font-size: 32px;
    font-weight: 700;
    margin-bottom: 1rem;
`

const ParagrafoEstilizacao = styled.p`
    font-family: 'DM Sans', sans-serif;
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 2rem;
    color: #6F757C;
    max-width: 450px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
`

const BotaoContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 1rem;
`

const BotaoEstilizado = styled.button`
    border: none;
    padding: 0.5rem 1rem;
    cursor: pointer;
    background-color: #1B1D1F;
    color: #FEF7EE;
    font-size: 14px;
    font-weight: 500;
    transition: background-color 0.3s; 
    &:hover {
        background-color: #6F757C;
        border-radius: 4px;
    }
`

const Container = () => {
    return (
     <>
        <GlobalStyle />
        <ContainerEstilizacao>
            <ImagemTitulo />
            <TituloEstilizacao>Our Collection</TituloEstilizacao>
            <ParagrafoEstilizacao>
                Intoducing our Coffee Collection, a selection of unique coffees
                from different roast types and origins, expertly roasted in small
                batches ans shipped fresh weekly.
            </ParagrafoEstilizacao>
            <BotaoContainer>
                <BotaoEstilizado>All Products</BotaoEstilizado>
                <BotaoEstilizado>Available Now</BotaoEstilizado>
            </BotaoContainer>
            <Card />
            <Footer />
        </ContainerEstilizacao>
    </>
    )
}

export default Container;