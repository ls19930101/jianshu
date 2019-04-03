import styled from 'styled-components';

export const Content=styled.div`
background:#f0f2f5;
box-sizing:border-box;
overflow:hidden;

`


export const Layout=styled.div`
margin:24px;    
height:100vh;
`

export const InfoWrapper=styled.div`
positon:relative;
margin-left:-12px;
margin-right:-12px;
display:flex;
flex-wrap:wrap;
box-sizing:border-box;
overflow:hidden;
`

export const InfoItem=styled.div`
float:left;
padding-left:12px;
padding-right:12px;
margin-bottom:24px;
width:25%;
float:left;
padding-left:12px;
padding-right:12px;
margin-bottom:24px;
.info{
    background-color:#fff;
    height:200px;
    &:hover{
       background-color:#ccc;
       color:#fff;
       weight:700;
    }
}
@media (min-width:1px){
    &.col-xs-24{
        display:block;
        box-sizing: border-box;
        width: 100%;
    } 
}
@media (min-width: 576px){
    &.col-sm-12{
        display: block;
        box-sizing: border-box;
        width: 50%;
    }
}
@media (min-width: 768px){
    &.col-md-12{
        display: block;
        box-sizing: border-box;
        width: 50%;
    }  
}
@media(min-width:992px){
    &.col-lg-12{
        display: block;
        box-sizing: border-box;
        width: 50%;
    }     
}
@media (min-width:1200px){
    &.col-xl-6{
        display: block;
        box-sizing: border-box;
        width:25%;
    }     
}
`
