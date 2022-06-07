import { COUNTER_DECREASE, COUNTER_DIVIDE, COUNTER_INCREASE, COUNTER_MULTIPLY } from "./action.types"

export const reducer = (state,action) => 
{

    switch(action.type)
    {
        case COUNTER_INCREASE: 
        {
            state.count += +action.payload
            return{...state}
        }
        case COUNTER_DECREASE:
            {
                state.count -= +action.payload
                return{...state}
            }
        case COUNTER_MULTIPLY:
            {
               
                state.count = state.count*(+action.payload)
                return{...state}
            }
        case COUNTER_DIVIDE:
            {
              
                if(state.count%(+action.payload)===0)
                {
                    state.count = state.count/(+action.payload) 
                    return{...state}
                } 
                alert(`This Number is not completely Divisible `)
                return{...state}
            }

            default:
            {
               
                return state;
            }
    }
}