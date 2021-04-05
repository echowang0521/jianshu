import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavItem } from '../../../common/header/style';
import {WriterWraper,WriterHeader,WriterSwitch,WriterItem,WriterInfo} from '../style';

class Writer extends Component {
    render(){
      console.log(this.props);
        return (
        <WriterWraper>
          <WriterHeader>
              推荐作者
              <WriterSwitch>
              换一批
              </WriterSwitch>
          </WriterHeader>
            {
             this.props.list ?
             this.props.list.map ((item)=>{
                return(
                <WriterItem key={item.get('id')}>
                <img className='writer-pic'src={item.get('imgUrl')}/>
             <WriterInfo>
                <h3 className='name'>{item.get('name')}</h3>
                <p className='de'>{item.get('de')}</p>
              </WriterInfo>
            </WriterItem>)
            
            })
            : ''
        }
          </WriterWraper>
            ) }

            }

const mapState=(state) =>({
    list:state.get('home').get('writerList')
})

export default connect(mapState,null) (Writer);