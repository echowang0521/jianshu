import React,{ Component } from 'react';
import { connect } from 'react-redux';
import {CSSTransition} from 'react-transition-group';
import { actionCreator } from './store';
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    SearchWrapper,
    NavSearch,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoList,
    SearchInfoItem,
    Addition,
    Button
} from './style';



class Header extends Component{
    getListArea(){
        const {focused,list,page,totalPage,mouseIn,handleChangePage} = this.props;
        const newList=list.toJS();
        var pageList=[];
        if(newList.length){
            pageList=[];
        for (let i=(page-1)*10; i<page*10;i++){
            pageList.push(
                <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
            )
        }
    }
        if(focused ||mouseIn ){
            return(
                <SearchInfo 
                onMouseEnter={this.props.handleMouseEnter}
                onMouseLeave={this.props.handleMouseLeave}>
                <SearchInfoTitle>
                    热门搜索
                    <SearchInfoSwitch onClick={()=>handleChangePage(page,totalPage)}>
                        换一批
                    </SearchInfoSwitch>
                
                </SearchInfoTitle>
            <SearchInfoList>
                {pageList}
            </SearchInfoList>
            </SearchInfo>
            )
        }else{
            return null
        }
    }
    render(){
        const {focused,handleInputFocus,handleInputBlur}= this.props;
        return (
            <HeaderWrapper>
               <Logo/>
               <Nav>
                <NavItem className="left active">首页</NavItem>
                <NavItem className="left">下载App</NavItem>
                <NavItem className="right">登录</NavItem>
                <NavItem className="right">
                <span className="iconfont">&#xe636;</span> 
                
                </NavItem>
                <SearchWrapper>
                    <CSSTransition
                    in={focused}
                    timesout={200}
                    classNames="slides">
                <NavSearch className={focused? 'focused':''}
                onFocus={handleInputFocus}
                onBlur={
                    handleInputBlur}>
    
                </NavSearch>
                </CSSTransition>
                {this.getListArea()}
                </SearchWrapper>
               </Nav>
               <Addition>
                   <Button className="reg">写文章</Button>
                   <Button className="writing">注册</Button>
               </Addition>
            </HeaderWrapper>
        )
    
    }
}



const mapStateToProps=(state)=>{
    return{
        focused: state.get('header').get('focused'),
        list: state.getIn(['header','list']),
        page: state.getIn(['header','page']),
        totalPage:state.getIn(['header','totalPage']),
        mouseIn: state.getIn(['header','mouseIn'])
    }
}
const mapDispathToProps=(dispatch)=>{
    return{
      handleInputFocus(){
          dispatch(actionCreator.getList());
          dispatch(actionCreator.searchFocus());
      },
      handleInputBlur(){
          
          dispatch(actionCreator.searchBlur());
      },
      handleMouseEnter(){
        dispatch(actionCreator.mouseEnter());
      },
      handleMouseLeave(){
        dispatch(actionCreator.mouseLeave());
      },
      handleChangePage(page,totalPage){
          console.log(page,totalPage);
          if(page<totalPage){
        dispatch(actionCreator.changePage(page+1));
    }else{
       dispatch(actionCreator.changePage(1));
    }
     }
    }
}
export default connect(mapStateToProps,mapDispathToProps) (Header);