import {  put, takeEvery } from 'redux-saga/effects';
import {constants,actionCreators} from './index';
import axios from 'axios';

function* getHomeInfo(action){
    try{
       const res= yield axios.get('/api/home.json');
  
       const result=res.data.data;
       console.log(result);
       const action=actionCreators.changeHomeInfo(result);
        yield put(action);
    }catch(e){
        alert('网络异常，请重新获取');
    }
}

function* homeSaga(){
    yield takeEvery(constants.GET_HOME_INFO,getHomeInfo)
  
}


export default homeSaga;