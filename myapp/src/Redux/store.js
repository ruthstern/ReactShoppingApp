import {configureStore } from "redux";
import {rootReducer} from "./RootReducer";

const store = configureStore (rootReducer);

export default store;