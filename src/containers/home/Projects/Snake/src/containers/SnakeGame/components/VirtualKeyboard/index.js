import React from 'react';
import PropTypes from 'prop-types';
import {
    StyledVirtualKeyboard,
} from './Styled';
import {
    ARROW_UP,
    ARROW_DOWN,
    ARROW_LEFT,
    ARROW_RIGHT,
} from '../../constants';

const VirtualKeyboard = ({ handleOnClick }) => (
    <StyledVirtualKeyboard>
        <div>
            <div data-code={ARROW_UP} className="virtual-keyboard__button fas fa-arrow-circle-up fa-sm" onClick={handleOnClick} />
        </div>
        <div className="virtual-keyboard__wrapper-bottom">
            <div data-code={ARROW_LEFT} className="virtual-keyboard__button fas fa-arrow-circle-left fa-sm" onClick={handleOnClick} />
            <div data-code={ARROW_DOWN} className="virtual-keyboard__button fas fa-arrow-circle-down fa-sm" onClick={handleOnClick} />
            <div data-code={ARROW_RIGHT} className="virtual-keyboard__button fas fa-arrow-circle-right fa-sm" onClick={handleOnClick} />
        </div>
    </StyledVirtualKeyboard>
);

VirtualKeyboard.propTypes = {
    handleOnClick: PropTypes.func,
};

VirtualKeyboard.propTypes = {
    handleOnClick: () => {},
};

export default VirtualKeyboard;
