import React,{PureComponent} from 'react';
import Qrcode from './components/Qrcode';
import Info from './components/Info';
import {connect} from 'react-redux';
import { actionCreators } from '../detail/store';
 

class Detail extends PureComponent{
    
    render(){
       
        return (
           <div>
                <Info/>
                <Qrcode/>
           </div>
        )
    }

    componentDidMount(){
        //将首页获取的id值与path中id对应起来，并将id值传给子页面
        //  console.log(this.props.match.params.id);
        this.props.changeDetailData(this.props.match.params.id);
    }
}

const mapStateToProps=(state)=>({

})

const mapDispatchToProps=(dispatch)=>({
    changeDetailData(homeId){
        console.log(homeId);
        const action=actionCreators.getDetailInfo(homeId);
        dispatch(action);
    }
    

})

export default connect(mapStateToProps,mapDispatchToProps)(Detail);