import { createStore, combineReducers } from "redux";
import { elevators } from "./building/reducers";
//import { persistReducer } from "redux-persist";
//import storage from "redux-persist/lib/storage";
//import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
//import thunk from "redux-thunk";
//import { composeWithDevTools } from "redux-devtools-extension";

const reducers = {
	elevators,
};

/* const persistConfig = {
	key: "root",
	storage,
	stateReconciler: autoMergeLevel2,
}; */

const rootReducer = combineReducers(reducers);
//const persistedReducer = persistReducer(persistConfig, rootReducer);

export const configureStore = () => createStore(rootReducer);
