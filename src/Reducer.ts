import { Reducer, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { IAppState } from './Model';
import { routerReducer } from 'react-router-redux';
import userReducer from './app/login/redux';
import mailHeaderReducer from './app/mail-header/redux';
import sidebarReducer from './app/sidebar/redux';
import mailViewerReducer from './app/mail-header/redux';
import mailReducer from './app/mail/redux';
import alertReducer from './app/alert/redux';

const rootReducer: Reducer<IAppState> = combineReducers<IAppState>({
  routing: routerReducer,
  user: userReducer as any,
  form: formReducer,
  mailHeader: mailHeaderReducer as any,
  sidebar: sidebarReducer as any,
  mailViewer: mailViewerReducer as any,
  mail: mailReducer as any,
  alert: alertReducer as any,
});

export { IAppState, rootReducer };
