import { RouterState } from 'react-router-redux';
import { IUserState } from './app/login';

export interface IAppState {
  routing: RouterState;
  user: IUserState
}

export interface IAction {
  type: string;
  payload: any;
}
