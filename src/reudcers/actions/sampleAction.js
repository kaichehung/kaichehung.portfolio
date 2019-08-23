import {
    GET_DEMO_SUCC,
    GET_DEMO_ERR,

} from './constants';

export const getDemoSucc = (data) => {
    return {
        type: GET_DEMO_SUCC,
        payload: {
            data
        }
    }
};

export const getDemoErr = () => {
    return {
        type: GET_DEMO_ERR,
    }
};