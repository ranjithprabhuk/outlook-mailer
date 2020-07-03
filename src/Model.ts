import { RouterState } from 'react-router-redux';
import { IUserState } from './app/login';
import { FormStateMap } from 'redux-form';
import { Reducer } from 'redux';
import { IMailState } from './app/mail/IMail';
import { IMailHeaderState } from './app/mail-header/IMailHeader';
import { IMailViewerState } from './app/mail-viewer/IMailViewer';
import { ISideBarState } from './app/sidebar/ISideBar';

export interface IAppState {
  routing: RouterState;
  user: Reducer<IUserState>;
  form: Reducer<FormStateMap>;
  mail: IMailState;
  mailHeader: IMailHeaderState;
  mailViewer: IMailViewerState;
  sidebar: ISideBarState;
}

export interface IAction {
  type: string;
  payload: any;
}
