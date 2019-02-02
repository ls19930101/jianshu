import styled from 'styled-components';

export const LoginWrapper=styled.div`
background-color:#fafafa;
min-height:100vh;
text-align:center;
box-sizing:border-box;
`

export const Title=styled.div`
font-size:18px;
margin:0 auto 50px;
padding:10px;
color:#969696;
.text{
    padding:10px;
}
.active{
    font-weight:700;
    color:#ea6f5a;
    border-bottom:2px solid #ea6f5a;
    padding:10px;
}
`

export const LoginInfo=styled.div`
position:relative;
width:400px;
display:inline-block;
margin:60px auto 0;
padding:50px 50px 30px;
border-radius:4px;
background-color:#fff;
box-shadow:0 0 8px rgba(0,0,0,.1);
box-sizing:border-box;
`
export const User=styled.div`
position:relative;
.up{
    border-left:1px solid #c8c8c8;
    border-right:1px solid #c8c8c8;
    border-top:1px solid #c8c8c8;
    border-radius:4px 4px 0 0;
}
.input{
    width:100%;
    display:block;
    height:50px;
    margin-bottom:0;
    font-size:14px;
    padding:4px 12px 4px 35px;
    box-sizing:border-box;
    background-color: hsla(0,0%,71%,.1);
}
.iconfont{
    position:absolute;
    top:14px;
    font-size:20px;
    left:10px;
    color:#969696;
}
`
export const PassWord=styled.div`
position:relative;
.bottom{
    border:1px solid #c8c8c8;
    border-radius: 0 0 4px 4px;
}
.input{
    width:100%;
    display:block;
    height:50px;
    margin-bottom:0;
    font-size:14px;
    padding:4px 12px 4px 35px;
    box-sizing:border-box;
    background-color: hsla(0,0%,71%,.1);
}
.iconfont{
    position:absolute;
    top:14px;
    font-size:20px;
    left:10px;
    color:#969696;
}
`
export const Remember=styled.div`
float:left;
margin:15px 0;
color:#969696;
.remember{
    padding-left:4px;
    vertical-align:middle;
}
`
export const Forget=styled.span`
float:right;
margin:15px 0;
vertical-align:middle;
font-size:14px;
color:#999;
`
export const Button=styled.button`
    cursor:pointer;
    float:left;
    width:100%;
    background:#3194d0;
    line-height:1.42857;
    font-size:18px;
    color:#fff; 
    padding:9px 18px;
    box-sizing:border-box;
    border-radius:40px;

`