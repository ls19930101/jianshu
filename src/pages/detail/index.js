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
        //将
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