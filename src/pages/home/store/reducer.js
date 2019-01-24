import {fromJS} from 'immutable'
import { constants } from '.';

const defaultState =fromJS({
    articleList:[],
    recommendsList:[],
    writersList:[]
})

export default (state=defaultState,action)=>{
    switch(action.type){
        case constants.CHANGE_HOME_INFO:
       console.log(action.articleList);
         return  state.merge({
            articleList:fromJS(action.articleList),
            recommendsList:fromJS(action.recommendsList),
            writersList:fromJS(action.writersList)
         }
        )
       default:
       return state;
    }
    
}