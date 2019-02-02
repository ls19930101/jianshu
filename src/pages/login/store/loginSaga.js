import {  put, takeEvery } from 'redux-saga/effects';
import {constants,actionCreators} from './index';
import axios from 'axios';


function* getInputValue(user,password){
    try{
       const res= yield axios.get('/api/login.json?+user'+user+'&password'+password);
       const result=res.data.data;
       console.log(result);
       const action=actionCreators.changeLoginState(result);
        yield put(action);
    }catch(e){
        alert('网络异常，请重新获取');
    }
}


function* loginSaga(){
    yield takeEvery(constants.GET_INPUT_VALUE,getInputValue);
  
}


export default loginSaga;