import { createSelector } from 'reselect';

const selectDemo = state => state.get('');

const makeSelectDemo = () =>
    createSelector(selectDemo, state =>
        state.get('demo'),
    );

export {
    makeSelectDemo,
    
};