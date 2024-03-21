const { createStore, applyMiddleware, combineReducers } = require("redux");
const { default: logger } = require("redux-logger");

// product state 
const initialProduct = {
    count : 2,
    products : ["Banana", "Mango"]
}
// cart state 
const initialCart = {
    count : 1, 
    cart : ["Orange"]
}
// product constants 
const GET_PRODUCTS = "GET_PRODUCTS";
const ADD_PRODUCT = "ADD_PRODUCT";
// cart constants 
const GET_CARTS = "GET_PRODUCTS";
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
                ...state,
                
            }
        case ADD_PRODUCT:
            return{
                products : [...state.products, action.payload],
                count : state.count + 1

            }
        default:
            return state;
    }
}

// cart reducer 
const cartReducer = (state=initialCart, action)=>{
    switch (action.type) {
        case GET_CARTS:
          return{
            ...state
            
          }
        case ADD_CART:
          return{
            cart : [...state.cart, action.payload],
            count : state.count + 1

          }
        default:
            return state
    }
}

const rootReducer = combineReducers({
    product_R : productReducer,
    cart_R : cartReducer
})

const store = createStore(rootReducer);
store.subscribe(()=>{
    console.log(store.getState())
})
store.dispatch(getProducts())
store.dispatch(addProduct("Milk"))

store.dispatch(getCarts())
store.dispatch(addCart("Mobile"))