import styled from 'styled-components';

export const StyledProjectList= styled.div`

.content {
    overflow: scroll;
    padding-left: 10px;

}

a:hover{
    text-decoration: underline;
}

ul{
    height:75vh;
    padding:0;
}

a,li {
    color: inherit;
    text-decoration: none;
    list-style-type: none;
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