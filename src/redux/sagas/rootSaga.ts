import { put, takeEvery, all, take, call } from 'redux-saga/effects'
import { BaseActionTypes, setProductsAction } from '../actions';
import axios from 'axios'

function* root() {
    console.log('Hello Sagas!')
    yield takeEvery(BaseActionTypes.BASE_INITIALIZE_DATA, initializeData)
}

function* initializeData() {
    try {
        const { data } = yield call(axios.get, 'https://getir-assignment-app-server.herokuapp.com/api/products');
        // const { data } = yield call(axios.get, 'https://getir-assignment-app-server.herokuapp.com/api/products');
        // console.log(data);
        yield put(setProductsAction(data))
    } catch (e: any) {
        console.log(e.message)
    }
}

export default function* rootSaga() {
    yield all([root()]);
}