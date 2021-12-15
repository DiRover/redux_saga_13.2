import { ofType } from 'redux-observable';
import { ajax } from 'rxjs/ajax';
import { map, tap, switchMap, catchError } from 'rxjs/operators';
import { LOAD_SERVICES_LIST, LOAD_DESCRIPTION } from '../actions/actionTypes';
import { loadSuccess, loadFail, loadDescriptionSuccess, loadDescriptionFail } from '../actions/actionCreators';
import { of } from 'rxjs';
// эпик
export const listEpic = action$ => action$.pipe(
    ofType(LOAD_SERVICES_LIST),//реагирем на загрузку списка
    switchMap(() => ajax.getJSON(`${process.env.REACT_APP_SEARCH_URL}/services`).pipe(//отправляем запрос
        map(respons => loadSuccess(respons)),//обработка удачного запроса
        catchError(() => of(loadFail()))//ловим и обрабатываем ошибку
    )),
);

export const descriptionEpic = action$ => action$.pipe(
    ofType(LOAD_DESCRIPTION),//реагирем на  загрузку описания
    map(o => o.payload.id),//получам айди элемента, для которого нужно описание
    tap(o => console.log(o)),//айди в консоль
    //map(o => new URLSearchParams({ q: o })),//нафиг этот квери, потом на сервере сложнее айди вытащить
    switchMap((id) => ajax.getJSON(`${process.env.REACT_APP_SEARCH_URL}/services/${id}`).pipe(//отправляем запрос
        map(o => loadDescriptionSuccess(o)),//обработка удачного запроса
        catchError(() => of(loadDescriptionFail()))//ловим и обрабатываем ошибку
    )),

);