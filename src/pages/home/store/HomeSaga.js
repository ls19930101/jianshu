import {  put, takeEvery } from 'redux-saga/effects';
import {constants,actionCreators} from './index';
import axios from 'axios';


function* getHomeInfo(action){
    try{
       const res= yield axios.get('api/home.json');
       const result=res.data.data;
       console.log(result);
       const action=actionCreators.changeHomeInfo(result);
        yield put(action);
    }catch(e){
        alert('网络异常，请重新获取');
    }
}

function* loadMoreInfo(page){
    try{
        const res= yield axios.get('api/homeList.json?page='+page);
        const more=res.data.data;
        console.log(more);
        const action=actionCreators.changeMoreInfo(more,page+1);
        yield put(action);
    }catch(e){
        alert('网络异常，请重新获取');
    }
}

function* homeSaga(){
    yield takeEvery(constants.GET_HOME_INFO,getHomeInfo);
    yield takeEvery(constants.LOAD_MORE_INFO,loadMoreInfo)
  
}


export default homeSaga;