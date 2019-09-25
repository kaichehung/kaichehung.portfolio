import { fromJS } from 'immutable';
import {
    INIT,
} from './constants';
import _ from 'lodash';
import {
    GAME_WIDTH,
    SET_SNAKE_MOVING,
    SET_SNAKE_DIRECTION,
    SET_SNAKE_GAME_START,
    SET_SNAKE_SPEED_MODIFIED,
    SNAKE_LIMITED_SPEED,
    SNAKE_INITIAL_SPEED,
    SNAKE_DELTA_SPEED,

    ARROW_UP,
    ARROW_DOWN,
    ARROW_LEFT,
    ARROW_RIGHT,
} from './constants';

const direction = {};
direction[ARROW_UP] = { x: 0, y: -1 };
direction[ARROW_DOWN] = { x: 0, y: 1 };
direction[ARROW_LEFT] = { x: -1, y: 0 };
direction[ARROW_RIGHT] = { x: 1, y: 0 };

const createFood = () => ({
    x: Math.floor(Math.random() * GAME_WIDTH),
    y: Math.floor(Math.random() * GAME_WIDTH),
});

const defaultSnake = {
    headPosition: {
        x: 0,
        y: 0,
    },
    body: [],
    maxLength: 2,
    direction: {
        x: 1,
        y: 0,
    },
    speed: SNAKE_INITIAL_SPEED,
};

const defaultBlocks = _.range(0, GAME_WIDTH).map((value, indexY) => (
    _.range(0, GAME_WIDTH).map((value, indexX) => (
        {
            id: indexX + GAME_WIDTH * indexY,
            x: indexX,
            y: indexY,
        }
    ))
));

const initialState = fromJS({
    blocks: defaultBlocks,
    snake: defaultSnake,
    food: createFood(),
    isGameStart: false,
    isPause: false,
    isSpeedModified: true,
    score: 0,
});

function snakeGameReducer(state = initialState, action) {
    switch (action.type) {
        case INIT: {
            return initialState;
        }

        case SET_SNAKE_MOVING: {
            const direction = state.getIn(['snake', 'direction']);
            const headPositionX = state.getIn(['snake', 'headPosition', 'x']);
            const headPositionY = state.getIn(['snake', 'headPosition', 'y']);
            const maxLength = state.getIn(['snake', 'maxLength']);
            const snakeBody = state.getIn(['snake', 'body']);
            const food = state.get('food');
            const isEatFood = food.get('x') === headPositionX && food.get('y') === headPositionY;
            const updatedPositionX = headPositionX + direction.get('x');
            const updatedPositionY = headPositionY + direction.get('y');
            const eatSelf = snakeBody.find((body) => (
                body.get('x') === updatedPositionX && body.get('y') === updatedPositionY
            ));
            if (state.get('isPause') || !state.get('isGameStart')) {
                return state;
            }
            if (eatSelf) {
                return state.set('isGameStart', false);
            }
            return state
                // update snake body
                .updateIn(['snake', 'body'], (body) => {
                    let updatedBody = body.push(fromJS({
                        x: headPositionX,
                        y: headPositionY,
                    }));
                    if (updatedBody.size > maxLength) {
                        updatedBody = updatedBody.shift();
                    }
                    return fromJS(updatedBody);
                })
                // update snake head position
                .updateIn(['snake', 'headPosition'], (headPosition) =>
                    headPosition
                        .set('x', updatePosition(headPosition.get('x') + direction.get('x')))
                        .set('y', updatePosition(headPosition.get('y') + direction.get('y')))
                )
                // create new food
                .updateIn(['food'], (food) => {
                    if (isEatFood) {
                        return fromJS(createFood());
                    }
                    return food;
                })
                // update snake maxLength
                .updateIn(['snake', 'maxLength'], (maxLength) => {
                    if (isEatFood) {
                        return maxLength + 1;
                    }
                    return maxLength;
                })
                // update snake speed after eating food
                .updateIn(['snake', 'speed'], (speed) => {
                    if (isEatFood) {
                        const updatedSpeed = (speed - SNAKE_DELTA_SPEED) > SNAKE_LIMITED_SPEED ? (speed - SNAKE_DELTA_SPEED) : SNAKE_LIMITED_SPEED;
                        return updatedSpeed;
                    }
                    return speed;
                })
                // update score
                .updateIn(['score'], (score) => {
                    if (isEatFood) {
                        return score + 1;
                    }
                    return score;
                })
                // update isSpeedModified
                .updateIn(['isSpeedModified'], (isSpeedModified) => {
                    if (isEatFood) {
                        return true;
                    }
                    return false;
                });
        }

        case SET_SNAKE_SPEED_MODIFIED: {
            return state.set('isSpeedModified', action.payload);
        }

        case SET_SNAKE_DIRECTION: {
            if (!state.get('isGameStart')) {
                return state;
            }
            let isPause = state.get('isPause');
            let isSpeedModified = state.get('isSpeedModified');
            if (action.payload === 'Space') {
                isPause = !state.get('isPause');
                isSpeedModified = isPause;
            }
            if (!direction[action.payload] && !(action.payload === 'Space')) {
                return state;
            }

            return state.updateIn(['snake', 'direction'], (dir) => {
                if (action.payload === 'Space' || isPause) {
                    return dir;
                }
                if (dir.get('x') * -1 === direction[action.payload].x &&
                    dir.get('y') * -1 === direction[action.payload].y) {
                    return dir;
                }
                return fromJS(direction[action.payload]);
            })
            .set('isPause', isPause)
            .set('isSpeedModified', isSpeedModified);
        }

        case SET_SNAKE_GAME_START: {
            return initialState
                .set('isGameStart', true);
        }

        default: {
            return state;
        }
    }
}

const updatePosition = (position) => {
    if (position > GAME_WIDTH - 1) {
        return 0;
    } else if (position < 0) {
        return GAME_WIDTH;
    }
    return position;
}

export default snakeGameReducer;
