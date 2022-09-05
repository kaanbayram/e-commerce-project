import { put, takeEvery, all, take } from 'redux-saga/effects'
import { BaseActionTypes } from '../actions';


function* helloSaga() {
    console.log('Hello Sagas!')
    yield takeEvery(BaseActionTypes.BASE_CHANGE_FILTER_DRAWER_STATUS, () => { console.log("test") })
}

export default function* rootSaga() {
    yield all([helloSaga()]);
}