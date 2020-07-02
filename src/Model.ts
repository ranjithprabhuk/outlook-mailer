import { RouterState } from 'react-router-redux';

export interface IAppState {
  routing: RouterState;
}

export interface IAction {
  type: string;
  payload: any;
}
