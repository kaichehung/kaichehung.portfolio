import {
    SET_SNAKE_MOVING,
    SET_SNAKE_DIRECTION,
    SET_SNAKE_GAME_START,
    SET_SNAKE_SPEED_MODIFIED,
} from './constants';

export const setSnakeMoving = () => ({
    type: SET_SNAKE_MOVING,
});

export const setSnakeDirection = (directionType) => ({
    type: SET_SNAKE_DIRECTION,
    payload: directionType,
});

export const setGameStart = () => ({
    type: SET_SNAKE_GAME_START,
});

export const setSnakeSpeedModified = (payload) => ({
    type: SET_SNAKE_SPEED_MODIFIED,
    payload,
});
