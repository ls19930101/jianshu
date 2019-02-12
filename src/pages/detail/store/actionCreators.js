import {constants} from './';
 
export const getDetailInfo=(id)=>({
 type:constants.GET_DETAIL_INFO,
 id
})

export const changeDetailInfo=(newTitle,newContent)=>({
    type:constants.CHANGE_DETAIL_INFO,
    title:newTitle,
    content:newContent
})

export const changeCloseOn=(onClose)=>({
    type:constants.CHANGE_CLOSE_ON,
    onClose:true
})

