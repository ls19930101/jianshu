import {fromJS} from 'immutable'


const defaultState =fromJS({
 articleList:[{
     id:1,
     title:"年轻、任性、脾气大的女人，但愿你能听懂舒淇讲的这段话",
     desc:"文|李弯湾 放眼全世界，中国的年轻一代的女人，不说社会地位吧，光说家庭地位，应该是全球最高的之一。如果这个描述不够准确，那么把范围在缩小一点—...",
     imgUrl:"//upload-images.jianshu.io/upload_images/14524620-b3352a48f9e7cf13.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240",
     writer:"极物",
     commend:12,
     praise:666   
 },
 { 
     id:2,
     title:"如何建立一个适合自己的手帐体系",
     desc:"你是不是也被网路上那些高颜值的手帐本吸引，是不是看了好多填充满满日程记录的PO主后，被她们热血又充实的生活所感染，可是买了一个又一个本子...",
     imgUrl:"//upload-images.jianshu.io/upload_images/700870-43aedeb1dd8f5ea7.png?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240",
     writer:"极物",
     commend:9,
     praise:333   
 },
 {
     id:3,
     title:"一个英语学习者的自我修养",
     desc:"越来越多人选择在业余时间学习英语来给自己增值。我身边不时有朋友和我说，想学习英语，但是不知道何从下手。毕竟凭借一腔热血就开始，像无头苍蝇一样漫无...",
     imgUrl:"//upload-images.jianshu.io/upload_images/14827152-52f62460542043e2.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240",
     writer:"极物",
     commend:7,
     praise:87   
 }
],
recommendsList:[{
    id:1,
    imgUrl:"//cdn2.jianshu.io/assets/web/banner-s-3-7123fd94750759acf7eca05b871e9d17.png"
},
{
    id:2,
    imgUrl:"//cdn2.jianshu.io/assets/web/banner-s-4-b70da70d679593510ac93a172dfbaeaa.png"
},
{
    id:3,
    imgUrl:"//cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png"
},
{
    id:4,
    imgUrl:"//cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png"
},
{
    id:5,
    imgUrl:"//cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png"
},
]
 
})

export default (state=defaultState,action)=>{
    switch(action.type){
        
       default:
       return state;
    }
    
}