import {constants} from './';

export const getInputValue=(userValue,passwordValue)=>({
    type:constants.GET_INPUT_VALUE,
})

export const changeLoginState=(result)=>({
    type:constants.CHANGE_LOGIN_STATE,
    loginState:result
})

export const loginOut=()=>({
    type:constants.LOGIN_OUT,
    loginState:false
})