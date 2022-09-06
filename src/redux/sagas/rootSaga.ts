import { put, takeEvery, all, take, call, fork } from 'redux-saga/effects'
import { BaseActionTypes, setCompaniesAction, setProductsAction } from '../actions';
import axios from 'axios'

function* root() {
    yield takeEvery(BaseActionTypes.BASE_INITIALIZE_DATA, initializeData)
}

function* initializeData() {
    try {

        yield fork(getCompanies);
        yield fork(getProducts);

    } catch (e: any) {
        console.log(e.message)
    }
}

export default function* rootSaga() {
    yield all([root()]);
}

function* getCompanies() {
    const { data } = yield call(axios.get, 'https://getir-assignment-app-server.herokuapp.com/api/companies');
    yield put(setCompaniesAction(data));

}

function* getProducts() {
    const { data } = yield call(axios.get, 'https://getir-assignment-app-server.herokuapp.com/api/products');
    yield put(setProductsAction(data));
}