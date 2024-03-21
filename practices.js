const { createStore } = require("redux");

const initialCount = {
    count : 0
}

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";
const INCREMENT_BY_VALUE = "INCREMENT_BY_VALUE";

const incrementCounter = ()=>{
    return{
        type : INCREMENT
    }
}
const decrementCounter = ()=>{
    return{
        type : DECREMENT
    }
}
const resetCounter = ()=>{
    return{
        type : RESET
    }
}
const incrementByValue = (value)=>{
    return{
        type : INCREMENT_BY_VALUE,
        payload : value
    }
}

const counterReducer = (state= initialCount, action)=>{
    switch (action.type) {
        case INCREMENT:
           return{
            ...state,
            count : state.count + 1 
           }
        case DECREMENT:
           return{
            ...state,
            count : state.count - 1 
           }
        case RESET:
           return{
            ...state,
            count : 0 
           }
        case INCREMENT_BY_VALUE:
           return{
            ...state,
            count : state.count + action.payload 
           }
        default:
            return state;
    }
}

const store = createStore(counterReducer);
store.subscribe(()=>{
    console.log(store.getState())
})
store.dispatch(incrementCounter())
store.dispatch(resetCounter())
store.dispatch(decrementCounter())
store.dispatch(incrementByValue(5))