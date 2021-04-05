import styled from 'styled-components';
import logpic from '../../statics/logo.png';


export const HeaderWrapper =styled.div`
position:relative;
height:56px;
border-bottom:solid 1px #f0f0f0;
`;
export const Logo =styled.a.attrs({
    href:'/'
})`
position:absolute;
top:0;
left:0;
background:url(${logpic});
display:block;
height:56px;
width:100px;
background-size:contain;
`;
export const Nav=styled.div`
width:760px;
height:100%;
margin:0 auto;
padding-right:90px;
box-sizing:border-box;

`;
export const NavItem=styled.div`
line-height:56px;
padding:0 15px;
font-size:17px;
color: #333;
&.left{
    float:left;
    }
&.right{
    float:right;
    color:#969696;
}
&.active{
    color:#ea6f5a;
}
`;
export  const SearchWrapper=styled.div`
postion:relative;
float:left;
display:grid;
.slide-enter{
    transition:all .2s ease-out;
}
.slide-enter-active{
    width:200px;
}
.slide-exit{
    transition:all .2s ease-out;
}
.slide-exit-active{
    width:160px;
}

`
export const NavSearch=styled.input.attrs({
    placeholder:'搜索'
})`
width:160px;
height:38px;
padding:0 20px;
margin-top:9px;
margin-left:20px;
border-size:border-box;
border:none;
outline:none;
border-radius:19px;
background:#eee;
&::placeholder{
    color:#999;
}
&.focused{
    width:200px;
}
`
export const SearchInfo=styled.div`
position:absolute;
left:0;
top:56px;
width:180px;
margin-left:300px;
padding:0 20px;
box-shadow:0 0 8px rgba(0,0,0,.2);
background:#fff;
`
 export const SearchInfoTitle=styled.div`
 margin-top:20px;
 margin-bottom:15px;
 line-height:20px;
 font-size:14px;
 color:#969696;
 `
 export const SearchInfoSwitch=styled.span`
 float:right;
 font-size:13px;
 `
 export const SearchInfoList=styled.div`
 overflow:hidden;
 `
 export const SearchInfoItem=styled.a`
 display:block;
 float:left;
 line-height:20px;
 padding: 0 5px;
 font-size:10px;
 margin-right:10px;
 margin-bottom:5px;
 border:1px solid #ddd;
 color:#969696;
 border-radius:3px;
 `
export const Addition=styled.div`
position:absolute;
right:0;
top:0;
height:56px;
`
export const Button=styled.div
`
float:right;
margin-top:9px;
margin-right:20px;
padding:0 20px;
line-height:38px;
border-ridus:19px;
border:1px solid #ec6149;
font-size:14px;
&.reg{
    color:#ec6149;
}
&.writing{
    color:#fff;
    background:#ec6149;
}
`
