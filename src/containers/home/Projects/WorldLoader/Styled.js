import styled from 'styled-components';

export const StyledWorldLoader= styled.div`

p, li{
    letter-spacing:1px;
    word-spacing: 2px;
    line-height: 1.5;
    padding: 0px;
    margin-right:15%;

h3{
    margin-top:30px;
}

}


.title-h2{
    display:inline-block;
}

iframe{
    display:inline-block;
    margin-top:20px;
}

.body{ padding-left:20px}


#profile{
    width:400px;
    display:inline-block;
}
.useScenario-section{
    margin-top:160px
    backgroung-color:#007FFF;
    ;
}
.systemDesign-section{
    margin-top:160px
}

#systemDiagram{
    width:75%
    position:relative;
    left:9%;
    display:block;
    padding-right:90px;
}

.prototypeContainer{
    padding-right:90px;
}

.systemTechnique{
    height:100%
}
.systemTechnique-Wrapper{
    height:150px;
    margin-top:50px

}
.systemTechniqueContainer{
    padding-right:100px;
}

.system-description-p{
    top: 100px;
    position: relative;
}

.flex-container{
    width:90%;
    display:flex;
    flex-direction:row;
    justify-content:space-around;
    flex-wrap:wrap;
}
.flex-row{
    display:inline-block;
    width:100%;
}

.iframeWrapper{
    padding-right: 90px;
}

.prototype-gif{
    width:43%;
    margin-top:20px
}

.prototype-gif:nth-child(1){
    margin-right:20px
}

.intro{
    width:45%
    position:relative;
    display:inline-block;    
    left:5%;
    right:10px;
    top:-15px
}
.prototype-li{
    margin-right:200px
}
section{
    margin-top:200px
    width:100%
}

.next-step{
    padding-bottom:100px;
}

.research{
    width:560px;
    margin-right:40px
}
.research-description-p{
    width:440px;
    display:inline-block;
    margin-right: 0px;
}
.research-wrapper{
    margin-top:50px
}
iframe[title=soccerOnTheTablet]{
    margin-right:40px
}

@media (max-width : 850px){
    h2.{display:block}
    #profile{display:block}
    .intro{
        position:relative;
        top:0px;
        left:0%;
    }

    #profile{
        width:50vw;
    }
}

@media (max-width : 1130px){
    .intro{
        width:100%
        left:0px;
    }
}
`;