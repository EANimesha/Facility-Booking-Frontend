import {SET_AUTHENTICATED} from '../types';
import axios from "axios";

export const loginUser=(userData)=>(dispatch)=>{

    axios.post('/login',userData)
    .then(res=>{
      setAuthorizationHeader(res.data.token);
      dispatch({SET_AUTHENTICATED});
    })
    .catch(err=>{
        console.log(err);
    })
}

const setAuthorizationHeader=(token)=>{
    const Token=`Bearer ${token}`;
      localStorage.setItem('Token',Token);
      axios.defaults.headers.common['Authorization']=Token;
}