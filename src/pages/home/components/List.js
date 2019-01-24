import React,{Component} from 'react';
import {
        ListItem,
        ListInfo,
        ListLine,
        ListAciton,
        LoadMore
} from '../style';
import {connect} from 'react-redux';
import { dispatch } from 'rxjs/internal/observable/range';


class List extends Component{
    render(){
        const {list,handleLoadMore}=this.props;
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
                <LoadMore onClick={handleLoadMore}>阅读更多</LoadMore>
            </div>
            
        )
    }
}

const mapStateToProps=(state)=>({
    list:state.getIn(['home','articleList'])
})

const mapDispatchToProps=(dispatch)=>({
        handleLoadMore(){
            
        }
})

export default connect(mapStateToProps,mapDispatchToProps)(List);