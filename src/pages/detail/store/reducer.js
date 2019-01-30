import {fromJS} from 'immutable'
import { constants } from './';


const defaultState =fromJS({
  title:["111"]
})

export default (state=defaultState,action)=>{
    switch(action.type){
        case constants.CHANGE_DETAIL_INFO:
      return state.merge({
        title:fromJS(action.title)
      })
   
       default:
       return state;
    }
    
}
