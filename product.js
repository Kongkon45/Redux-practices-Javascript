const {createStore, combineReducers} = require("redux");

// product state 
const initialProduct = {
    numberOfProduct : 2,
    products : ["sugar", "salt"]
}
// cart state 
const initialCart = {
    count : 1, 
    carts : ["Milk"]
}

// product constants 
const GET_PRODUCTS = "GET_PRODUCTS";
const ADD_PRODUCT = "ADD_PRODUCT";
// cart constants 
const GET_CARTS = "GET_CARTS";
const ADD_CART = "ADD_CART";

// product action 
const getProducts = ()=>{
    return{
        type : GET_PRODUCTS
    }
}
const addProduct = (product)=>{
    return{
        type : ADD_PRODUCT,
        payload : product
    }
}
// cart action 
const getCarts = ()=>{
    return{
        type : GET_CARTS
    }
}
const addCart = (cart)=>{
    return{
        type : ADD_CART,
        payload : cart
    }
}

// product reducer 
const productReducer = (state = initialProduct, action)=>{
    switch (action.type) {
        case GET_PRODUCTS:
           return{
            ...state
           }
        case ADD_PRODUCT:
            return{
               products : [...state.products, action.payload] ,
               numberOfProduct : state.numberOfProduct +1
            }
        default:
            return state;
    }
}
// cart reducer 
const cartReducer = (state = initialCart, action)=>{
    switch (action.type) {
        case GET_CARTS:
            return{
                ...state
            }
        case ADD_CART:
            return{
                carts : [...state.carts, action.payload],
                count : state.count + 1
            }
        default:
            return state;
    }
}

// combineReducers 
const rootReducer = combineReducers({
    productR : productReducer,
    cartR : cartReducer
})

// product store 
const store = createStore(rootReducer);
store.subscribe(()=>{
    console.log(store.getState());
})
store.dispatch(getProducts())
store.dispatch(addProduct("Milk"))
// cart store 
store.dispatch(getCarts())
store.dispatch(addCart("mango"))