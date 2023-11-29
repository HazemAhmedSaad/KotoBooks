import { legacy_createStore as createStore } from "redux";
import reducers from "./Reducer";
const store = createStore(reducers);
export default store;
