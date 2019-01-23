import React,{Component} from 'react';
import {
        ListItem,
        ListInfo,
        ListLine,
        ListAciton,
} from '../style';
import {connect} from 'react-redux';


class List extends Component{
    render(){
        const {list}=this.props;
        return (
            <div>    
                <ListLine/>
                {
                    list.map((item)=>{
                       return(
                        <ListItem key={item.get('id')}>
                            <img 
                                className="pic" 
                                alt= "" 
                                src={item.get('imgUrl')}
                            />
                            <ListInfo>
                                <h3 className="title">{item.get('title')}</h3>
                                <p className="desc">{item.get('desc')}</p>
                                <ListAciton>
                                <a className="action" href="/">{item.get('writer')}</a>
                                <a className="action" href="/detail"><span className="iconfont">&#xe684;</span>{item.get('commend')}</a>
                                <span className="action"><span className="iconfont">&#xe65c;</span>{item.get('praise')}</span>
                                </ListAciton>
                            </ListInfo>
                        </ListItem>
                       ) 
                    })
                }
            </div>
            
        )
    }
}

const mapStateToProps=(state)=>({
    list:state.getIn(['home','articleList'])
})
export default connect(mapStateToProps)(List);