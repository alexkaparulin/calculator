import { NUMBER_SELECTED, INPUT_CLEAR, WORTH } from "./Calculate.action";

const initialState={
    value:0
}

export default (state=initialState,action)=>{

    switch (action.type) {
        case NUMBER_SELECTED:
            return      {...state,
            value: state.value === 0 ? action.number : state.value + action.number
        };
        
        case INPUT_CLEAR:
            return {...state,value:0};
         
        case WORTH:
            return{...state,value:eval(state.value)}; 
           
        default:
        return state;
            
    }
}
