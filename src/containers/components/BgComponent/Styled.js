import styled from 'styled-components';
import img from '../../../assets/images/kai2.png';

export const StyledBgComponent = styled.div`

.bg{
    z-index:-2;
    position: absolute;
    top:0px; left:0px;
    width: 100vw; height:100vh;
    background-image: url(${img});
    background-size: cover;
    background-position:0px
}
`;