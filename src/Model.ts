import { RouterState } from 'react-router-redux';
import { IUserState } from './app/login';
import { FormStateMap } from 'redux-form';
import { Reducer } from 'redux';

export interface IAppState {
  routing: RouterState;
  user: Reducer<IUserState>;
  form: Reducer<FormStateMap>;
}

export interface IAction {
  type: string;
  payload: any;
}
