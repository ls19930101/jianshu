import {fromJS} from 'immutable'
import { constants } from './';


const defaultState =fromJS({
  title:["111"],
  onClose:false,
  content:'<img data-original-src="//upload-images.jianshu.io/upload_images/2535252-abc3047b950c6428" data-original-width="640" data-original-height="426" data-original-format="image/jpeg" data-original-filesize="49886" class="" style="cursor: zoom-in;" src="//upload-images.jianshu.io/upload_images/2535252-abc3047b950c6428?imageMogr2/auto-orient/strip%7CimageView2/2/w/640/format/webp"><p>"当然，独生子甚至是别的人也有一样的问题，只是在大的历史环境下，独生女相比独生子和别人，女性相比男性，是一个更为尖锐的问题，并非我个人对独生女有什么偏见。这是一篇针对群体的文章，不是针对个体的，所以不要因为“我不是这样的人”就忽略问题的存在）在这样的社会环境、家庭教育背景下，女孩逐渐长成了一个任性、玻璃心、脾气大的人，年少的时候，父母包容你，爷爷奶奶都宠你；你年轻的时候，你男朋友可能还会迁就你；你刚结婚的时候，你丈夫可能还会包容你。但是——衣衫薄岁月长，人心本身就是很凉薄的，没有哪个男人或者女人，能够经得起长时间的摧残和折磨——而一个人控制不好自己的性情和脾气，对于她的丈夫、她的孩子、她的家庭来讲，往往就是一种摧残和折磨。"</p><img data-original-src="//upload-images.jianshu.io/upload_images/2535252-aba69b942c7969ac" data-original-width="600" data-original-height="906" data-original-format="image/jpeg" data-original-filesize="87359" class="" style="cursor: zoom-in;" src="//upload-images.jianshu.io/upload_images/2535252-aba69b942c7969ac?imageMogr2/auto-orient/strip%7CimageView2/2/w/600/format/webp">'
})

export default (state=defaultState,action)=>{
    switch(action.type){
       case constants.CHANGE_DETAIL_INFO:
          return state.merge({
            title:fromJS(action.title)
          })
        case constants.CHANGE_CLOSE_ON:
        return state.merge({
          onClose:fromJS(action.onClose)
        })
        
       default:
       return state;
    }
    
}
