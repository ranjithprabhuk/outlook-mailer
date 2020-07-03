import { RouterState } from 'react-router-redux';
import { IUserState } from './app/login';
import { FormStateMap } from 'redux-form';
import { Reducer } from 'redux';
import { IMailState } from './app/mail/IMail';

export interface IAppState {
  routing: RouterState;
  user: Reducer<IUserState>;
  form: Reducer<FormStateMap>;
  mail: Reducer<IMailState>;
}

export interface IAction {
  type: string;
  payload: any;
}
