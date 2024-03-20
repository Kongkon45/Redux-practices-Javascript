const {createStore} = require("redux");

const initialState = {
    count : 1,
    users : ["Mehedi"]
}

const ADD_USER = "ADD_USER";

const addUser = (user)=>{
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
            state;
    }
}

const store = createStore(UserReducer);
store.subscribe(()=>{
    console.log(store.getState())
})
store.dispatch(addUser("dalim"))