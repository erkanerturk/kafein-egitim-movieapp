import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "./modules/rootReducer";

const applied = applyMiddleware(thunk);
const composed = composeWithDevTools(applied);

const store = createStore(rootReducer, undefined, composed);

export default store;
