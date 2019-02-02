import React,{PureComponent} from 'react'; 
import {QrcodeWrapper, AppPic,CloseBtn} from '../style';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { actionCreators } from '../store';

class Qrcode extends PureComponent{
    render(){
        const {handleClose,onClose}=this.props;
        return (
                onClose? null:  <QrcodeWrapper>
                                    <Link  to="/writer">
                                        <AppPic/>
                                    </Link>
                                    <CloseBtn  onClick={()=>handleClose(onClose)}
                                            className="iconfont hover">&#xe608;</CloseBtn>
                                </QrcodeWrapper>  
        )
        
    }
}

const mapStateToProps=(state)=>({
    onClose:state.getIn(['detail','onClose']),
})

const mapDispatchToProps=(dispatch)=>({
    handleClose(onClose){
        if(!onClose){
            dispatch(actionCreators.changeCloseOn(onClose))
        }
        
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(Qrcode);