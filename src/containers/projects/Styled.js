import styled from 'styled-components';

export const StyledProjects= styled.div`

.content {
    overflow: scroll;
}

.projectLink { 
    color: #007FFF; 
    text-decoration:none;
    padding:0px;
    padding-top:30px;
    padding-bottom:20px;

}

ul{
    height:75vh;
    padding:0;
}

a,li {
    list-style-type: none;
    font: bold 70px futura;
    text-align: left;
    padding: 0;
}

li:nth-child(odd){
    color:#007FFF;
}

li:nth-child(even){
    color:#979797;
}


`;