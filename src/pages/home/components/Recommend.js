import React, { Component } from 'react';
import { Recommends,RecommendItem } from '../style';
import{ connect } from 'react-redux';

class Recommend extends Component {
    render(){
        const{list}=this.props
        console.log(list);
        return (
        
           
           list.map((item)=>{
            return(
             <Recommends key={item.get('id')}>
                <RecommendItem>
                <img className='r-pic' alt=''src={item.get('imgUrl')}/>
                </RecommendItem>
             </Recommends>)



        })

    

       


        )

        }
        
       
    
}
const mapState=(state) =>({
    list:state.get('home').get('recoList')
})

export default connect (mapState)(Recommend);
