import { createStore, combineReducers, applyMiddleware, compose, } from 'redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import showListReducer from '../reducers/showListReducer';
import { listEpic, descriptionEpic} from '../epics/epics';

const reducer = combineReducers({//собираем рэдьюсер
  list: showListReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const epic = combineEpics(//собираем эпик
  listEpic,
  descriptionEpic,
);

const epicMiddleware = createEpicMiddleware();//посредник для обработки асинхронных запросов

const store = createStore(reducer, composeEnhancers( //создаем сторе
  applyMiddleware(epicMiddleware)
));

epicMiddleware.run(epic);

export default store;
