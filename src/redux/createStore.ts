import { Reducer, Store, compose, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from "./reducers";
import rootSaga from "./sagas/rootSaga";

export default function (): Store<any> {
    const sagaMiddleware = createSagaMiddleware();
    const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(
        rootReducer,
        composeEnhancers(applyMiddleware(sagaMiddleware))
    );

    sagaMiddleware.run(rootSaga);

    return store;
}