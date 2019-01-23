import styled from 'styled-components';

export const HomeWrapper=styled.div`
overflow:hidden
width:960px;
margin:0 auto;
`
export const HomeLeft=styled.div`
float:left
width:625px;
padding-left:15px;
padding-top:30px;
.banner-img{
    width:625px;
    height:270px;
    margin-bottom:30px;
}
`
export const HomeRight=styled.div`
float:left;
width:280px;
margin-left:40px;
padding:30px 0 0;
`
export const ListItem=styled.div`
overflow:hidden;
float:left;
padding:15px 2px 20px 0;
margin-bottom:15px;
border-bottom:1px solid #f0f0f0;
box-sizing:border-box;
.pic{
   
    
    float:right;
    margin-top:20px;
    width:150px;
    height:100px; 
    border-radius:4px;
}
`
export const ListLine=styled.div`
margin:-5px 0 15px;
border-top:1px solid #f0f0f0;
`

export const ListInfo=styled.div`
float:left;
display:block;
width:458px;
margin-right:15px;
font-size:13px;
line-height:24px;
color:#999;

.title{
    margin:-7px 0 4px;
    font-size:18px;
    font-weight:700;
    line-height:1.5;
    color:#333;
    display: inherit;
}
.desc{
    line-height:24px;
    font-size:13px;
    margin:0 0 8px;
}
`

export const ListAciton=styled.div`
padding-right: 0!important;
font-size:12px;
font-weight:400;
line-height:20px;
.action {
    margin-right:10px;
    color:#b4b4b4;
    text-decoration:none;
}
.iconfont{
    font-size:13px;
    margin-right:2px;
}
`
export const RecommendsWrapper=styled.div`
overflow:hidden;

margin-top:-4px; 
padding-bottom:4px;
min-height:228px;
box-sizing:border-box;
`

export const RecommendsItem=styled.a`
cursor:pointer;
box-sizing:border-box;
.chahua{
    width:100%;
    min-height:50px;
    margin-bottom:4px;
    border-radius:4px;
}
`

export const DownloadWrapper=styled.a`
cursor:pointer;
float:left;
width:100%;
box-sizing:border-box;
margin-bottom:30px;
padding:10px 22px;
border:1px solid #f0f0f0;
border-radius:6px;
vertical-align:top;
.qrcode{
    width:60px;
    height:60px;
    opacity:.85;
}
`
export const DownloadInfo=styled.div`
overflow-hidden;
display:inline-block;
margin-left:7px;
line-height:1.42857;
vertical-align:top;
.title{
    font-size:15px;
    color:#333;
}
.desc{
    margin-top:4px;
    font-size:13px;
    color:#999;
}
`

export const WritersWrapper=styled.div`
margin-top:60px;
width:280px;
height:60px;
`
export const WritersInfoTitle=styled.span`
font-size:14px;
color:#969696;
`
export const WritersInfoSwitch=styled.a`
float:right;
cursor:pointer;
.iconfont{
    font-size:14px;
    margin-right:4px;
}

`

export const WritersInfoList=styled.div`

`
export const WritersInfoItem=styled.div`

`