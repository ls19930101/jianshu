import React,{Component} from 'react';
import {HomeWrapper,
        HomeLeft,
        HomeRight,    
    } from './style';
import {connect} from 'react-redux';
import List from './components/List';
import Recommends from './components/Recommends';
import Writers from './components/Writers';
import Download from './components/Download';
import axios from 'axios';

class Home extends Component{
    render(){
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className="banner-img" alt="" src="//upload.jianshu.io/admin_banners/web_images/4606/5d7f5855af24cb8cd161f37d9f9af47342714f34.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"></img>
                    <List/>
                </HomeLeft>
                <HomeRight>
                    <Recommends/>
                    <Download/>
                    <Writers/>
                </HomeRight>
            </HomeWrapper>
        )
    }

    componentDidMount(){
        axios.get('/api/home.json').then((res)=>{
            const result=res.data.data;
            // console.log(result);
            const action={
                type:'change_home_data',
                articleList:result.articleList,
                recommendsList:result.recommendsList,
                writersList:result.writersList
            }
            // console.log(action);
            this.props.changeHomeData(action);
        })
    }

}


const mapDispatchToProps=(dispatch)=>({
    changeHomeData(action){
        dispatch(action);
    }
})

export default connect(null,mapDispatchToProps)(Home);