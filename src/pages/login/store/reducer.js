import {fromJS} from 'immutable'
import { constants } from './';


const defaultState =fromJS({
  loginState:false
})

export default (state=defaultState,action)=>{
    switch(action.type){
       case constants.CHANGE_LOGIN_STATE:
          return state.merge({
            loginState:fromJS(action.loginState)
          })
        case constants.LOGIN_OUT:
        return state.merge({
            loginState:fromJS(action.loginState)
        })  
        // return action.loginState;
       default:
       return state;
    }
    
}