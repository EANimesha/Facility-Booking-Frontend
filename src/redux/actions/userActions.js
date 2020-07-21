import {SET_USER, SET_AUTHENTICATED} from '../types';
import axios from "axios";

export const loginUser=(userData)=>(dispatch)=>{

    axios.post('/login',userData)
    .then(res=>{
      setAuthorizationHeader(res.data.token);
      dispatch({type: SET_AUTHENTICATED});
      window.location.href = "/home";
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

export const setUser=(user)=>(dispatch)=>{
    dispatch({type:SET_USER,payload:user})
}