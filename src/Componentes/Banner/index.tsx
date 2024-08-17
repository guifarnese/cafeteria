import styled from 'styled-components';
import imagemBanner from '../../assets/bannerCafe.jpg';

const BannerEstilizacao = styled.header`
    display: block;
    width: 100%;
    height: 300px;
    overflow: hidden;
`
const Banner = () => {
    return (
        <BannerEstilizacao>
            <img src={imagemBanner} alt='imagem banner cafe' />
        </BannerEstilizacao>
    )
}

export default Banner;