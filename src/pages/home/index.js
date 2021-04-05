import React, { Component } from 'react';
import { connect } from 'react-redux';
import Topic from './components/Topic';
import List from './components/List';
import Writer from './components/Writer';
import Recommend from './components/Recommend';
import axios from 'axios';
import { 
    HomeWrapper,
    HomeRight,
    HomeLeft
 } from './style';

 import img from './images.jpg';

class Home extends Component {
    componentDidMount() {
       this.props.changeHomeData();
       
    }

    render(){
        return (
        <HomeWrapper>
            <HomeLeft>
                <img className='banner-img'src={img} alt="img"/>
                <Topic/>
                <List/>
            </HomeLeft>
            <HomeRight>
                <Recommend/>
                <Writer/>
            </HomeRight>
        </HomeWrapper>
            )
    }
   
}
const mapDispatch=(dispatch)=>({
    
  changeHomeData(){
    axios.get('/api/home.json').then((res)=>{
        const result=res.data.data;
        const action={
            type:'change_home_data',
            topiclist:result.topiclist,
            articleList:result.articleList,
            recoList:result.recoList,
            writerList:result.writerList
        }
        dispatch(action);
     })
     
  }

})

export default connect(null,mapDispatch)(Home);