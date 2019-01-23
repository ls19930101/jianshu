import React,{Component} from 'react';
import { WritersWrapper, WritersInfoTitle, WritersInfoSwitch, WritersInfoList, WritersInfoItem } from '../style';

class Writers extends Component{
    render(){
        return (
           <WritersWrapper>
               <WritersInfoTitle>
                   推荐作者
                    <WritersInfoSwitch>
                        <span className  ="iconfont">&#xe851;</span>
                        换一批
                    </WritersInfoSwitch>
               </WritersInfoTitle>
               <WritersInfoList>
                   <WritersInfoItem>
                       <img className="user" alt="" src="//upload.jianshu.io/users/upload_avatars/3136195/484e32c3504a.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp"/>
                       <a href="/detail" className="follow"> 
                            <span className="iconfont">&#xe61e;</span>
                            关注
                       </a>
                       <a href="/detail" className="name">
                       梅花开
                       </a>
                       <p className="writerinfo">写了261.7k字 · 22.7k喜欢</p>
                   </WritersInfoItem>
               </WritersInfoList>         
           </WritersWrapper>
        )
    }
}

export default Writers;