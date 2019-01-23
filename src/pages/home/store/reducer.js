import {fromJS} from 'immutable'

const defaultState =fromJS({
    articleList:[],
    recommendsList:[],
    writersList:[]
})

export default (state=defaultState,action)=>{
    switch(action.type){
        case 'change_home_data':
        // console.log(action);
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