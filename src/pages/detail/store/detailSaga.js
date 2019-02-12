import {  put, takeEvery } from 'redux-saga/effects';
import {constants,actionCreators} from './index';
import axios from 'axios';


function* getDetailInfo(homeId){
    try{
        console.log(homeId);
       const res= yield axios.get('/api/detail.json?id='+homeId.id);
       const num=parseInt(homeId.id);
    //    console.log(typeof(num));
    //将父页面的id传入，并通过id值筛选显示不同的详情，完成与后台数据联动
       const detail=res.data.data.filter(item=>item.id===num);
        const newTitle=detail.map(item=>item.title);
        // console.log(newTitle);
        const newContent=detail.map(item=>item.content);
        // console.log(newContent);
       const action=actionCreators.changeDetailInfo(newTitle,newContent);
        yield put(action);
    }catch(e){
        alert('网络异常，请重新获取');
    }
}


function* homeSaga(){
    yield takeEvery(constants.GET_DETAIL_INFO,getDetailInfo);
  
}


export default homeSaga;