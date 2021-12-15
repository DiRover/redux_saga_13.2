import { LOAD_SERVICES_LIST, LOAD_SUCCESS, LOAD_FAIL, LOAD_DESCRIPTION, LOAD_DESCRIPTION_SUCCESS, LOAD_DESCRIPTION_FAIL, CANCEL } from "../actions/actionTypes";

const initialState = {//начальное состояние
    list: [],//список
    loading: true,//происходит или нет загрузка
    currentId: null,//айди элемента списка, нужно для загрузки описания
    description: null,//описание элемента
    title: null,//не помню для чего, не столь важно
    error: false,//случилась или нет ошибка
};

export default function showListReducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_SERVICES_LIST://экшен загрузки списка
            return {
                ...state, loading: true, error: false,
            }
        case LOAD_SUCCESS://экшен удачной загрузки списка
            const { list } = action.payload;
            return {
                ...state, list,
                loading: false,
            }
        case LOAD_FAIL: //экшен неудачной загрузки списка
            return { ...state, error: true, loading: false }
        case LOAD_DESCRIPTION://экшен загрузки описания элемента списка
            const { id } = action.payload;
            return {
                ...state, loading: true, currentId: id, error: false,
            }
        case LOAD_DESCRIPTION_SUCCESS://экшен удачной загрузки описания элемента списка
            const { respons } = action.payload;
            const description = respons.description;
            const title = respons.title;
            return {
                ...state, loading: false, description: description, title: title
            }
        case LOAD_DESCRIPTION_FAIL://экшен неудачной загрузки описания элемента списка
            return { ...state, error: true, loading: false }
        case CANCEL:
            return {
                ...state, error: false, loading: false
            }

        default:
            return state;
    }
}