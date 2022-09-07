import { put, takeEvery, all, take, call, fork } from 'redux-saga/effects'
import { BaseActionTypes, setCompaniesAction, setLoadingStatus, setProductsAction } from '../actions';
import axios from 'axios'

function* root() {
    yield takeEvery(BaseActionTypes.BASE_INITIALIZE_DATA, initializeData)
}

/**
 * Current app not huge but we still have sideEffects to manage
 * Redux-Saga is nice middleware to manage them with our state.
 */

function* initializeData() {
    try {

        yield fork(getCompanies);  // We are forking because we want send the request 
        yield fork(getProducts);   // same time to send but depends still same task tree.

    } catch (e: any) {
        console.log(e.message)
    }
}

export default function* rootSaga() {
    yield all([root()]);
}

function* getCompanies() {
    try {
        const { data } = yield call(axios.get, 'https://getir-assignment-app-server.herokuapp.com/api/companies');
        yield put(setCompaniesAction(data));
    } catch (error) {
        console.log(error);
    }
}

function* getProducts() {
    try {
        const { data } = yield call(axios.get, 'https://getir-assignment-app-server.herokuapp.com/api/products');
        yield put(setProductsAction(data));
    } catch (error) {
        console.log(error);
    }
    finally {
        yield put(setLoadingStatus(false));
    }
}