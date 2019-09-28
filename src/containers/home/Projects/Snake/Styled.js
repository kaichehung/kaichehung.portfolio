import styled from 'styled-components';

export const StyledSnake= styled.div`

@media (min-width : 1250px) {
    .subAppWrapper{
        padding-left:20px;
        width: 50%
    }
}
@media (max-width : 1250px) and (min-width : 1000px) {
    .subAppWrapper{
        padding-left:20px;
        padding-right:20px;
        width: 65%
    }
}
@media (max-width : 1000px) {
    .subAppWrapper{
        padding-left:20px;
        padding-right:20px;
        width: 100%;
    }
}



`;