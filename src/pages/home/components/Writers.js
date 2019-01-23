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
                   <WritersInfoItem/>
               </WritersInfoList>         
           </WritersWrapper>
        )
    }
}

export default Writers;