import {combineReducers} from 'redux';
import calculateReducer from '../calculate/Calculate.reducer';


const rootReducer  = combineReducers({
    calculate: calculateReducer
})

export default rootReducer;