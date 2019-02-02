import React,{PureComponent} from 'react';
import {InfoWrapper,
        WriterWrapper,
        InfoTitle,
        WriterInfo,
        AvatarPic,
        Content
} from '../style'; 
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class Info extends PureComponent{
    render(){
        const {title,content}=this.props;
      return (
          <InfoWrapper>
              <InfoTitle>{title}</InfoTitle>
              <WriterWrapper>
                  <Link to="/">
                    <AvatarPic>
                        <img className="avatar"
                            alt="" 
                            src="//upload.jianshu.io/users/upload_avatars/2535252/ac7a35d6-1e38-44a2-9e86-7612264958e8.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96"/>
                    </AvatarPic>
                  </Link>
                <WriterInfo>
                    <Link className="name" to="/">李弯湾</Link>
                    <img className="wujiaoPic" alt="" src="../../statics/wujiao.png"></img>
                    <Link className="attention" to="/">
                        <span className="iconfont">&#xe613;</span>
                    关注</Link>
                    <div className="meta">
                        <span className="item">2019.01.20 00:56</span>
                        <span className="item">字数 1759</span>
                        <span className="item">阅读 3368</span>
                        <span className="item">评论 20</span>
                        <span className="item">喜欢 129</span>
                    </div>
                </WriterInfo>
              </WriterWrapper>
              <Content dangerouslySetInnerHTML={{__html:content}}></Content>
          </InfoWrapper>
      )
    }
}

 const mapStateToProps=(state)=>({
    title:state.getIn(['detail','title']),
    content:state.getIn(['detail','content'])
})

export default connect(mapStateToProps,null)(Info);