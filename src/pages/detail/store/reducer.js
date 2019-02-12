import {fromJS} from 'immutable';
import { constants } from './';


const defaultState =fromJS({
  title:"111",
  onClose:false,
  content:""
})

export default (state=defaultState,action)=>{
    switch(action.type){
       case constants.CHANGE_DETAIL_INFO:
       console.log(action.content);
          return state.merge({
            title:action.title,
            content:action.content
          })
        case constants.CHANGE_CLOSE_ON:
        return state.merge({
          onClose:fromJS(action.onClose)
        })
        
       default:
       return state;
    }
    
}
