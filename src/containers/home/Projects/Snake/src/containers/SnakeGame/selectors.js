import { createSelector } from 'reselect';

const selectSnakeGame = state => state.get('snakeGame');

const makeSelectSnake = () =>
    createSelector(selectSnakeGame, state =>
        state.get('snake'),
    );

const makeSelectBlocks = () =>
    createSelector(selectSnakeGame, state =>
        state.get('blocks'),
    );

const makeSelectFood = () =>
    createSelector(selectSnakeGame, state =>
        state.get('food'),
    );

const makeSelectisGameStart = () =>
    createSelector(selectSnakeGame, state =>
        state.get('isGameStart'),
    );

const makeSelectScore = () =>
    createSelector(selectSnakeGame, state =>
        state.get('score'),
    );

const makeSelectIsPause = () =>
    createSelector(selectSnakeGame, state =>
        state.get('isPause'),
    );

const makeSelectIsSpeedModified = () =>
    createSelector(selectSnakeGame, state =>
        state.get('isSpeedModified'),
    );

export {
    makeSelectSnake,
    makeSelectBlocks,
    makeSelectFood,
    makeSelectisGameStart,
    makeSelectScore,
    makeSelectIsPause,
    makeSelectIsSpeedModified,
};
