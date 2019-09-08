import styled from 'styled-components';
import img from '../../assets/images/kai2.png';

export const StyledHome = styled.div`
* { 
    box-sizing: border-box
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
    grid-template-rows: 60px 530px auto;
    grid-template-areas: 'a b c'
                         'd e f'
                         'g h i';
}


.header {
    color:red;
    display: flex;
    font: bold 16px futura;
    grid-column: 3 / 4;
}

.header>a { 
    color: #007FFF; 
    text-decoration:none;
    padding:20px;
    padding-top:30px;
}

.projectsTitle {
    grid-column: 3 / 4;
}



.bg{
    z-index:-2;
    position: absolute;
    top:0px; left:0px;
    width: 100vw; height:100vh;
    background-image: url(${img});
    background-size: cover;
    background-position:0px
}

.icons {
    text-align: right;
    position: fixed;
    right:30px
    bottom:20px;
}

img {
    padding:10px
}

//transition group
  .page-enter {
    opacity: 0;
    transform: scale(1.1);
  }
  
  .page-enter-active {
    opacity: 1;
    transform: scale(1);
    transition: opacity 300ms, transform 300ms;
  }
  
  .page-exit {
    opacity: 1;
    transform: scale(1);
  }
  
  .page-exit-active {
    opacity: 0;
    transform: scale(0.9);
    transition: opacity 300ms, transform 300ms;
  }

`;