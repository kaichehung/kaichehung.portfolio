import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Map, List } from 'immutable';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import VirtualKeyboard from './components/VirtualKeyboard';
import {
    setSnakeMoving,
    setSnakeDirection,
    setGameStart,
    setSnakeSpeedModified,
} from './actions';
import { StyledSnakeGame } from './Styled';
import {
    makeSelectSnake,
    makeSelectBlocks,
    makeSelectFood,
    makeSelectisGameStart,
    makeSelectScore,
    makeSelectIsPause,
    makeSelectIsSpeedModified,
} from './selectors';
import {
    SPACE,
} from './constants';

let gameInterval;

const updateGameView = (snake, block, food) => {
    //draw snake head
    if (snake.getIn(['headPosition', 'x']) === block.get('x') &&
        snake.getIn(['headPosition', 'y']) === block.get('y')) {
        return 'snake-game__map-block-item snake-game__draw-snake-body';
    }
    const snakeBody = snake.get('body');
    if (snakeBody.size > 1) {
        const found = snakeBody.find((bodyPos) => {
            return bodyPos.get('x') === block.get('x') &&
                bodyPos.get('y') === block.get('y');
        });
        // draw snake body
        if (found) {
            return 'snake-game__map-block-item snake-game__draw-snake-body';
        }
    }
    // draw food
    if (block.get('x') === food.get('x') &&
        block.get('y') === food.get('y')) {
        return 'snake-game__draw-snake-food';
    }
    return 'snake-game__map-block-item';
};

class SnakeGame extends Component {
    static propTypes = {
        snake: PropTypes.instanceOf(Map),
        blocks: PropTypes.instanceOf(List),
        food: PropTypes.instanceOf(Map),
        isGameStart: PropTypes.bool,
        score: PropTypes.number,
        isPause: PropTypes.bool,
        isSpeedModified: PropTypes.bool,
        handleOnSetSnakeMoving: PropTypes.func,
        handleOnSetSpeedModified: PropTypes.func,
    }
    static defaultProps = {
        snake: Map(),
        blocks: List(),
        food: Map(),
        isGameStart: false,
        score: 0,
        isPause: false,
        isSpeedModified: true,
        handleOnSetSnakeMoving: () => { },
        handleOnSetSpeedModified: () => { },
    }
    componentDidMount() {
        document.addEventListener('keydown', this.handleOnKeyDown);
    }
    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleOnKeyDown);
        clearInterval(gameInterval);
    }
    componentDidUpdate(prevProps, prevState) {
        const {
            isSpeedModified,
        } = prevProps;
        const {
            snake,
            isGameStart,
            isPause,
            handleOnSetSnakeMoving,
            handleOnSetSpeedModified,
        } = this.props;
        if (isPause) {
            clearInterval(gameInterval);
        }
        if (isSpeedModified) { // to udpate speed
            handleOnSetSpeedModified(false);
            clearInterval(gameInterval);
            gameInterval = setInterval(() => {
                if (isGameStart && !isPause) {
                    handleOnSetSnakeMoving()
                }
            }, snake.get('speed'));
        }
        if (!isGameStart) {
            clearInterval(gameInterval);
            handleOnSetSpeedModified(true);
        }
    }
    handleOnKeyDown = (event) => {
        const {
            handleOnSetSnakeDirection,
        } = this.props;
        handleOnSetSnakeDirection(event.code);
    }
    handleOnGameStartClick = () => {
        const {
            handleOnSetSnakeMoving,
            handleOnSetGameStart,
        } = this.props;
        handleOnSetGameStart();
        handleOnSetSnakeMoving();
    }
    handleOnVirtualKeyboardClick = (event) => {
        const {
            handleOnSetSnakeDirection,
        } = this.props;
        const code = event.currentTarget.getAttribute('data-code');
        handleOnSetSnakeDirection(code);
    }

    render() {
        const {
            snake,
            blocks,
            food,
            isGameStart,
            score,
            isPause,
        } = this.props;
        return (
            <StyledSnakeGame onKeyDown={this.handleOnKeyDown}>
                <div className="snake-game__score-info">Score: {score}</div>
                {
                    !isGameStart &&
                    <div className="snake-game__panel">
                        <div className="snake-game__score">
                            <span>Score: </span>
                            <span>{score}</span>
                        </div>
                        <button
                            className="snake-game__start-game-btn"
                            onClick={this.handleOnGameStartClick}
                        >
                            Start
                        </button>
                    </div>
                }
                <div className="snake-game__map-wrapper">
                    {
                        blocks.map((rows) => (
                            rows.map((block) => (
                                <div
                                    key={block.get('id')}
                                    className={updateGameView(snake, block, food)}
                                >
                                </div>
                            ))
                        ))
                    }
                </div>
                <div data-code={SPACE} onClick={this.handleOnVirtualKeyboardClick} className="snake-game__pause-game-btn">
                    {
                        isPause ? 'continue' : 'pause'
                    }
                </div>
                <VirtualKeyboard handleOnClick={this.handleOnVirtualKeyboardClick} />
            </StyledSnakeGame>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    snake: makeSelectSnake(),
    blocks: makeSelectBlocks(),
    food: makeSelectFood(),
    isGameStart: makeSelectisGameStart(),
    score: makeSelectScore(),
    isPause: makeSelectIsPause(),
    isSpeedModified: makeSelectIsSpeedModified(),
});

const mapDispatchToProps = dispatch => ({
    handleOnSetSnakeMoving: () => dispatch(setSnakeMoving()),
    handleOnSetSnakeDirection: (directionType) => dispatch(setSnakeDirection(directionType)),
    handleOnSetGameStart: () => dispatch(setGameStart()),
    handleOnSetSpeedModified: (payload) => dispatch(setSnakeSpeedModified(payload)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(SnakeGame);
