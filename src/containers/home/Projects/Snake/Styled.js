import styled from 'styled-components';

export const StyledSnake= styled.div`
p{
    width:600px;
}
.subAppWrapper{
    margin-top:40px
}
@media (min-width : 1250px) {
    .subAppWrapper{
        padding-left:20px;
        width: 50%
        // position: absolute;
        // right:-5%
    }
}
@media (max-width : 1250px) and (min-width : 1000px) {
    .subAppWrapper{
        padding-left:20px;
        padding-right:20px;
        width: 60%
        // position: absolute;
        // right:-7%
    }
}
@media (max-width : 1000px) {
    .subAppWrapper{
        padding-left:20px;
        padding-right:20px;
        width: 100%;
    }
    p{
        width:100%;
    }
}

}


`;