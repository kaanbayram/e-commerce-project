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

function createSagaInjector(runSaga: any, rootSaga: any) {

    const injectSagas = new Map();

    const isInjected = (key: string) => injectSagas.has(key);

    const injectSaga = (key: string, saga: any) => {

        if (isInjected(key)) return;

        const task = runSaga(saga);

        injectSagas.set(key, task);
    };

    injectSaga('root', rootSaga);

    return injectSaga;
}