import { Reducer, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { IAppState } from './Model';
import { routerReducer } from 'react-router-redux';
import userReducer from './app/login/redux';

const rootReducer: Reducer<IAppState> = combineReducers<IAppState>({
  routing: routerReducer,
  user: userReducer as any,
  form: formReducer,
});

export { IAppState, rootReducer };
