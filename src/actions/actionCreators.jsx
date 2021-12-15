import {
  LOAD_SERVICES_LIST,
  LOAD_SUCCESS,
  LOAD_DESCRIPTION,
  LOAD_DESCRIPTION_SUCCESS,
  LOAD_FAIL,
  LOAD_DESCRIPTION_FAIL,
  CANCEL,
} from './actionTypes';
//создание экшенов
export const loadServicesList = () => {//начальная загрузка списка
  return {
    type: LOAD_SERVICES_LIST,
  }
}

export const loadSuccess = (respons) => {//удачная начальная загрузка списка
  const list = respons;
  return {
    type: LOAD_SUCCESS,
    payload: { list },
    loading: false,
  }
}

export const loadFail = () => {//неудачная загрузка списка
  return {
    type: LOAD_FAIL,
  }
}

export const loadDescription = (id) => {//загрузка описания
  return {
    type: LOAD_DESCRIPTION,
    payload: { id }
  }
}

export const loadDescriptionSuccess = (respons) => {//удачная загрузка описания
  return {
    type: LOAD_DESCRIPTION_SUCCESS,
    payload: { respons }
  }
}

export const loadDescriptionFail = () => {//неудачная загрузка описания
  return {
    type: LOAD_DESCRIPTION_FAIL,
  }
}

export const cancel = () => {//просто отмена (когда появляется модалка с вопросом новой загрузки)
  return {
    type: CANCEL,
  }
}