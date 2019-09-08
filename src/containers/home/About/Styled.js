import styled from 'styled-components';

export const StyledAbout= styled.div`
.aboutContainer {
    display: grid;
    grid-template-columns: 80px 300px auto ;
    grid-template-rows: 130px auto;
    grid-template-areas: 'a b c'
                         'd e f'
                         'g h i';
    justify-items: start;
    grid-gap:10px 10px;
}

.col1-row1 {
    grid-column: 1 / 4;
    grid-row: 1 / 2;

    color: #007FFF; 
    text-decoration:none;
        font: bold 70px futura;

    padding:0px;
    padding-top:30px;
    padding-bottom:20px;
    list-style-type: none;
    font: bold 4.5vw futura;
    padding: 0px 0px 0px 20px;
  }

.col2-row3{
    grid-column: 2 / 4;
    grid-row: 2 / 3;
    justify-self: start;
}

.info{
    margin-top:30px;
    display:flex;
    flex-wrap: wrap;
}

.infoType{
    margin-top:20px;
    margin-left:7vw;
    width:250px;

}

.item{
    margin-bottom:30px;
    // height:155px;
}

p,h3,h4{
    margin:5px;
    text-align:left;
}

p{
    padding: 0px 0px 5px 20px;
}

.name{
    display: block;
    list-style-type: none;
    font: bold 70px futura;
    text-align: left;
    padding: 0px;
    margin: 0px;
} 

.brief{
    display: block;
    list-style-type: none;
    font: normal 24px futura;
    text-align: left;
    padding: 0;
    margin: 0px;
    color:#979797;
}

h2 {
    display: block;
    list-style-type: none;
    font: bold 32px futura;    
    color: #007FFF; 
}

@media screen and (max-width: 575px){
    .col2-row3{
        margin-top: 70px;
    }
    .infoType{
        margin-left:5vw;
    }
} 
@media screen and (max-width: 560px){
    .col2-row3{
        margin-top: 100px;
        margin-left:0vw;
    }
} 

`;