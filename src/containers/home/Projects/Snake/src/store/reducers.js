import { combineReducers } from 'redux-immutable';
import snakeGame from '../containers/SnakeGame/reducer';

/**
 * Creates the main reducer with the asynchronously loaded ones
 */
export default function createReducer(injectedReducers) {
    return combineReducers({
        snakeGame: snakeGame,
    });
};
