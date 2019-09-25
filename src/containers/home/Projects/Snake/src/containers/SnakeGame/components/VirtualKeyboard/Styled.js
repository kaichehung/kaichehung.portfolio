import styled from 'styled-components';

export const StyledVirtualKeyboard = styled.div`
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 5em;
    margin-top: 10px;
    .virtual-keyboard__button {
        cursor: pointer;
        &:hover {
            color: #ffd600;
        }
    }
    .virtual-keyboard__wrapper-bottom {
        display: flex;
    }

`;
