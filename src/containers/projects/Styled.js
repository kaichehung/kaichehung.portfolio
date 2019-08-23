import styled from 'styled-components';

export const StyledProjects= styled.div`
a { 
    color: #007FFF; 
    text-decoration:none;
    padding:20px;
    padding-top:30px;
}

ul{
    height:75vh;
    padding:0;
}

li {
    list-style-type: none;
    font: bold 70px futura;
    text-align: left;
}

li:nth-child(odd){
    color:#007FFF;
}

li:nth-child(even){
    color:#979797;
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