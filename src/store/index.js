import { createStore,applyMiddleware,compose } from 'redux';
import creatSagaMiddleware from 'redux-saga';
import reducer from './reducer';
import headerSaga from '../common/header/store/headerSaga';

const composeEnhancers =window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

  const sagaMiddleware=creatSagaMiddleware();

const enhancer=composeEnhancers(applyMiddleware(sagaMiddleware));

const store=createStore(reducer,enhancer);
sagaMiddleware.run(headerSaga);

export default store;