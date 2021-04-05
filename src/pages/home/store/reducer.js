
import { fromJS } from 'immutable';

const defaultState = fromJS({
   topiclist:[],
articleList:[],
recoList:[]
});

export default (state=defaultState,action)=>{
    switch(action.type){
        case 'change_home_data':
            return state.merge({
                topiclist:fromJS(action.topiclist),
                recoList:fromJS(action.recoList),
                articleList:fromJS(action.articleList),
                writerList:fromJS(action.writerList)
            })
    }
   
    
    return state;
}