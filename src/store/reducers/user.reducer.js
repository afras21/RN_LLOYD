import * as ActionTypes from '../actions/actionTypes';

const initialState = {
    id: '',
    loginProvider: '', // Google or Facebook
    name: '', 
    email: '', 
    avatar: '',
    accessToken: ''
};

const userReducer = (state = initialState, action) => {
    switch(action.type){
        case ActionTypes.SAVE_USER: 
            const { payload } = action;
            return {
                ...state
            }, payload;
        case ActionTypes.REMOVE_USER: 
            return {
                id: '',
                loginProvider: '', // Google or Facebook
                name: '', 
                email: '', 
                name: '',
                avatar: '',
                accessToken: ''
            }
        default: 
            return state;
    }
}

export default userReducer