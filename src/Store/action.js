import { COUNTER_DECREASE, COUNTER_DIVIDE, COUNTER_INCREASE, COUNTER_MULTIPLY } from "./action.types";


export const add = (value) => ({ type: COUNTER_INCREASE ,payload:(value)});
export const substract = (value) => ({ type: COUNTER_DECREASE,payload:(value) });
export const multiply = (value) => ({ type: COUNTER_MULTIPLY,payload:(value) });
export const divide = (value) => ({ type: COUNTER_DIVIDE,payload:(value) });