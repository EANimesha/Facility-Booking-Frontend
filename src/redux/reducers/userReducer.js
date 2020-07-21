import {SET_USER,SET_AUTHENTICATED} from '../types';

const initialState={
    authenticated:false,
    user:''
};

export default function(state=initialState,action){
    switch(action.type){
        case SET_AUTHENTICATED:
            return{
                ...state,
                authenticated:true
            };
        case SET_USER:
            return{
                ...state,
                user:action.payload
            }
        default:
            return state;
    }
}