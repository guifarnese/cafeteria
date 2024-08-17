import styled from "styled-components";


const FooterEstilizacao = styled.footer`
    font-family: 'DM Sans', sans-serif;
    font-size: 18px;
    color: #ffffff;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    margin-top: 3rem;
    border-radius: 8px;
`

const LinkEstilizacao = styled.a`
    text-decoration: none;
    color: #acf232;
    font-size: 16px;
`

const Footer = () => {
    return (

        <FooterEstilizacao>
            Desenvolvido por Guilherme Farnese.
             <LinkEstilizacao href="https://github.com/guifarnese" target="_blank" rel="noopener noreferrer">
               https://github.com/guifarnese
            </LinkEstilizacao>
        </FooterEstilizacao>
    )
}

export default Footer;