import styled from 'styled-components';
import img from '../../assets/images/kai2.png';

export const StyledHome = styled.div`
* { 
    @font-face {
    font-family: "Nunito";
    src: url('https://fonts.googleapis.com/css?family=Nunito&display=swap');
    }
    @font-face {
        font-family: "Futura Bold";
        src: url('../../assets/fonts/futura');
        }

    font-family: 'Nunito';
    border: 0px solid #1F9F81;
    //background-color: transparent;
}

.container {
    display: grid;
    grid-template-columns: 5% 5% auto ;
    grid-template-rows: 10% 70% 20%;
    grid-template-areas: 'a b c'
                         'd e f'
                         'g h i';
}


.header {
    color:red;
    display: flex;
    font: bold 16px futura;
    grid-column-start: 3;
    grid-column-end: 4;

}

.projectsTitle {
    grid-column-start: 3;
    grid-column-end: 4;
}

.category { 
    color: #007FFF; 
    text-decoration:none;
    padding:20px;
    padding-top:30px;
}

.bg{
    z-index:-1;
    position: absolute;
    top:0px; left:0px;
    width: 101vw; height:100vh;
    background-image: url(${img});
    background-size: cover;
    background-position:0px
}

.icons {
    text-align: right;
    position: absolute;
    right:30px
    bottom:20px;
}

img {
    padding:10px
}

`;