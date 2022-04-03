import { REMOVE_USER, SAVE_USER } from './actionTypes';

export const saveUser = (payload) => {
    return {
        type: SAVE_USER,
        payload
    };
};

export const removeUser = () => {
    return {
        type: REMOVE_USER
    }
}