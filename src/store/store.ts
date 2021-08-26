import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage/session";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { PersistConfig } from "redux-persist/es/types";

import { checkAuthMiddleware } from "./checkAuthMiddleware";
import reducer from "./reducer";

const persistConfig: PersistConfig<any> = {
    key: "root",
    storage: storage,
    whitelist: ["login", "basicData"]
};
const checkAuth = checkAuthMiddleware();
const persistedReducer = persistReducer(persistConfig, reducer);
const enhancer = composeWithDevTools(applyMiddleware(thunk, checkAuth));

export const store = createStore(persistedReducer, enhancer);
export const persistor = persistStore(store);
