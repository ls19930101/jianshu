import styled from 'styled-components';
import wujiaoPic from '../../statics/wujiao.png';
import appPic from '../../statics/AppPic.png'

export const InfoWrapper=styled.div`
margin:0 auto;
padding-top:20px;
padding-bottom:40px;
width:620px;

`
export const InfoTitle=styled.div`
font-size:34px;
line-height:1.3;
font-weight:700;
padding-top:20px;

`
export const WriterWrapper=styled.div`
margin:30px 0 40px;
`
export const AvatarPic=styled.div`
width:48px;
display:inline-block;
vertical-align:middle;
.avatar{
    height:100%;
    width:100%
    border-radius:24px;
    border:1px solid #ddd;
}
`

export const WriterInfo=styled.div`
display:inline-block;
margin-left:8px;
vertical-align:middle;
line-height:1.42857;
.name{
    margin-right:6px;
    font-size:16px;
    text-decoration:none;   
    color:#333;
}
.wujiaoPic{
    width:20px;
    height:20px;
    margin-right:8px;
    display:inline-block
    vertical-align:middle;
    background:url(${wujiaoPic});
    background-size:contain;
}
.attention{
    font-size:12px;
    font-weight:400;
    display:inline-block;
    line-height:20px;
    background:#42c02e;
    color:#fff;
    padding:0 7px 0 5px;
    border-radius:10px;
    text-decoration:none;
    .iconfont{
       
        font-size:12px;
        margin-right:2px;
    }
}
.meta{
    margin-top:5px;
    font-size:12px;
    color:#969696;
    .item{
        
        padding-right:5px;
    }
}


`
export const QrcodeWrapper=styled.div`

box-sizing:border-box;
position:fixed;
top:80px;
right:50%;
margin-right:-550px;
`
export const Content=styled.div`
color:#2f2f2f;
font-size:16px;
font-weight:400;
line-height:1.7;
p{
    margin:25px 0 ;
}
img{
    width:100%;
}
`

export const AppPic=styled.div`
background:url(${appPic});
display:inline-block;
height:260px;
width:180px;
background-size:contain;


`

export const CloseBtn=styled.div`
position:absolute;
z-index:2;
display:inline-block;
top:10px;
right:10px;
cursor:pointer;
.iconfont{
    font-size:14px;
    color:#000;
    // opacity:.2;
}
.hover{
    color:#999;
}
`