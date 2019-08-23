import { combineReducers } from 'redux-immutable';
import subReducer from '';

/**
 * Creates the main reducer with the asynchronously loaded ones
 */
export default function createReducer(injectedReducers) {
    return combineReducers({
        sampleReducer: sampleReducer,
    });
};
