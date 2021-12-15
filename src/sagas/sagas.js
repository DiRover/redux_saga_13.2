import { all, put, call, takeEvery } from 'redux-saga/effects';
import {loadSuccess, loadFail, loadDescriptionSuccess, loadDescriptionFail} from '../actions/actionCreators';
import {LOAD_DESCRIPTION, LOAD_SERVICES_LIST} from '../actions/actionTypes';
import {loaderList, loaderDescription} from '../api/api';

// worker for list
function* handleListSearch() { // делаем загрузчик для загрузки списка
    try {
        const data = yield call(loaderList); // вызывваем функцию загрузки списка
        yield put(loadSuccess(data)); // диспатчим удачную загрузку
    } catch(e) {
        yield put(loadFail());  // диспатчим неудачную загрузку
    }
}

// watcher for list

function* watcherListSearch() { // наблюдатель для загрузки списка
    yield takeEvery(LOAD_SERVICES_LIST, handleListSearch); // берем тип экшена и воркер для загрузки списка
}

// worker for description
function* handleDescriptionSearch(action) {
    const {id} = action.payload;
    try {
        const data = yield call(loaderDescription, id);
        yield put(loadDescriptionSuccess(data));  // диспатчим удачную загрузку
    } catch {
        yield put(loadDescriptionFail());   // диспатчим неудачную загрузку
    }
};

// watcher for description
function* watcherDescriptionSearch() { // наблюдатель для загрузки описания
    yield takeEvery(LOAD_DESCRIPTION, handleDescriptionSearch)  // берем тип экшена и воркер для загрузки описания
};

export default function* rootSaga() {
    yield all([watcherListSearch(),
    watcherDescriptionSearch()]) // вместо all можно было каждую отдельную сагу вызвать при помощи  spawn
}