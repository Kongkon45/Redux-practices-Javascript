const {createStore} = require("redux");
const initialState = {
    count : 1,
    users : ["Kongkon"]
}

const ADD_USER = "ADD_USER"
const add_User = (user)=>{
    return{
        type : ADD_USER,
        payload : user
    }
}
const UserReducer = (state = initialState, action)=>{
    switch (action.type) {
        case ADD_USER:
            return{
                users : [...state.users, action.payload],
                count : state.count + 1
            }
        default:
            state
    }
}

const store = createStore(UserReducer);
store.subscribe(()=>{
    console.log(store.getState())
})
store.dispatch(add_User("Kona"))
store.dispatch(add_User("komol"))
