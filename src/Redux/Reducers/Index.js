import { combineReducers } from "redux";
import counterReducer from "./Counter";
import loggedReducer from "./IsLoggedIn";
import { todoReducers } from "./Todo";
import { FriendDataReducer } from "./FriendData";



const allReducers = combineReducers({
    counter: counterReducer,
    isLogged: loggedReducer,
    myTodo: todoReducers,
    singleData: FriendDataReducer,

})

export default allReducers;

