import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
//import rootReducer from "./reducers";
import thunk from "redux-thunk";
import { counter_reducer } from "./reducers/counter_reducer";
import { register_reducer } from "./reducers/register_reducer";
import { user_reducer } from "./reducers/user_reducer";
import expensive_Reducer from "./reducers/expensives_reducer";

const rootStore = combineReducers({
  count: counter_reducer,
  user_reducer,
  register: register_reducer,
  data: expensive_Reducer,
});

const store = createStore(
  rootStore,

  composeWithDevTools(applyMiddleware(thunk))
);
export default store;
