import {applyMiddleware, compose, createStore, Store} from 'redux';
import {IAppState, rootReducer} from '../Reducer';
import {routerMiddleware} from 'react-router-redux';
import Redux from 'redux-thunk';
import {History} from 'history';

export function configureStore(history: History): Store<IAppState> {

  const routingMiddleware = routerMiddleware(history);
  const enhancers = compose(applyMiddleware(routingMiddleware, Redux));

  return createStore<IAppState>(rootReducer, enhancers);
}
