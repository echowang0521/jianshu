import styled from 'styled-components';

export const HomeWrapper= styled.div`
overflow:hidden;
width:960px;
margin:0 auto;

`;
export const HomeLeft = styled.div`
float:left;
margin-left:120px;
padding-top:30px;
width:500px;
.banner-img{
    width:400px;
    height:210px;
}
`;
export const HomeRight=styled.div`
float:right;
width:240px;
`;
 export const TopicWrapper = styled.div`
 overflow:hidden;
 padding:20px 0 10px 0;
 margin-left:-18px;
 border-bottom:1px solid #dcdcdc;

 `
export const TopicItem =styled.div`
float:left;
background:#f7f7f7;
height:32px;
line-height:32px;
margin-left:18px;
font-size:14px;
margin-bottom:18px;
padding-right：10px;
border-radius:4px;
border:1px solid #dcdcdc;
border-radius:4px;
.pics{
display:block;
float:left;
width:32px;
height:32px;
margin-right:10px;

}

`
export const ListItem= styled.div`
overflow:hidden;
padding:20px 0;
border-bottom:1px solid #dcdcdc;
.pic{
    display:block;
    width:100px;
    height:90px;
    float:right;
    border-radius:10px;
}

`
export const ListInfo= styled.div`
width:400px;
float:left;
.title{
    line-height:27px;
    font-size:18px;
    font-weight:bold;
    color:#333;
    margin-top:0px;
}
.desc{
    line-height:24px;
    font-size:13px;
    color:#999;
}

`
export const Recommends=styled.div`
overflow:hidden;
width:280px;
:first-child{
    padding-top:30px;
}
`
export const RecommendItem=styled.a`
.r-pic{
    width:200px;
    height:39px;
    margin:0;
    padding-top:0;
}
`
export const WriterWraper=styled.div`
width:200px;
border:1px solid #dcdcdc;
border-radius:3px;
height:300px;
line-height-300px;

`
export const WriterHeader=styled.div`
padding-top:10px;
font-size:10px;
color:#969696;
`

export const WriterSwitch=styled.p`
font-size:10px;
color:#969696;
float:right;
margin-top:0;
`
export const WriterItem=styled.div`
.writer-pic{
    width:48px;
    height:48px;
    border-radius:50%;
}
padding-top:15px;
`
export const WriterInfo=styled.div`
font-size:13px;
float:right;
.name{padding-right:55px;
margin-TOP:0;
margin-bottom:0}
.de{
    margin-top:5px;
    color:#dcdcdc;
}
`
