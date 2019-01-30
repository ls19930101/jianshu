import React,{PureComponent} from 'react'; 
import {QrcodeWrapper, AppPic} from '../style';
import {Link} from 'react-router-dom';
class Qrcode extends PureComponent{
    render(){
        return (
            <QrcodeWrapper>
                <Link  to="https://www.jianshu.com/apps">
                
                <AppPic>
                    <span className="iconfont">&#xe608;</span>
                </AppPic>
                </Link>
            </QrcodeWrapper>
        )
        
    }
}
export default Qrcode;