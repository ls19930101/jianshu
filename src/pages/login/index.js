import React, {PureComponent} from 'react';
import {LoginWrapper, 
        Title,  
        LoginInfo,
        User,
        PassWord,
        Remember,
        Forget,
        Button
        } from './style';
import {connect} from 'react-redux';
import {actionCreators} from './store/';
import {Link} from 'react-router-dom';

class Login extends PureComponent{
    render(){
        const {handleLogin}=this.props;
        return (
            <LoginWrapper>
                <LoginInfo>
                <Title>
                    <a href="/" className="active">登录</a>
                    <b className="text">·</b>
                    <a href="/" className="text">注册</a>
                </Title>
                    <User>
                    <input className="input up" placeholder="手机号或邮箱" ref={(input)=>{this.user=input}}/>
                    <span className="iconfont">&#xe623;</span>
                    </User>
                    <PassWord>
                    <input  className="input bottom" placeholder="密码" ref={(input)=>{this.password=input}}/>
                    <span className="iconfont">&#xe61b;</span>
                    </PassWord>
                    <Remember>
                    <input type="checkbox"/>
                    <span className="remember">记住我</span>
                    </Remember>
                    <Forget>登录遇到问题?</Forget>
                    <Link to='/'>
                    <Button onClick={()=>handleLogin(this.user,this.password)}>登录</Button>

                    </Link>
                </LoginInfo>
            </LoginWrapper>
            
           
        )
    }
}

const mapDispatchToProps=(dispatch)=>({
    handleLogin(user,password){
    //    console.log(user.value,password.value)
       dispatch(actionCreators.getInputValue(user.value,password.value))
    }
})

export default connect(null,mapDispatchToProps)(Login);