import { loginActionTypes } from './actionTypes';
import { IAction } from '../../../Model';
import { ILoginFormParams, IUserState } from '../ILogin';
import axios from 'axios';
import { APP_CONFIG } from '../../../utils/app.constants';
import { showAlert } from '../../alert/redux';

export const setUserInformation = (data: IUserState): IAction => {
  localStorage.setItem('auth_token', btoa(data.token));
  return {
    type: loginActionTypes.VALIDATE_USER,
    payload: {
      ...data,
    },
  };
};

export const clearUserInformation = (): IAction => {
  localStorage.removeItem('auth_token');
  return {
    type: loginActionTypes.CLEAR_USER_INFO,
    payload: {
      token: '',
      username: '',
      name: '',
    },
  };
};

export const validateUser = (credentials: ILoginFormParams): Function => {
  return (dispatch: Function) => {
    dispatch(clearUserInformation());
    const password = btoa(credentials.password);
    return axios.get(`${APP_CONFIG.serviceBase}user.json?user=${credentials.username}&password=${password}`)
      .then((res) => {
        const user: IUserState = res.data;
        if (user && user.token) {
          dispatch(setUserInformation(user));
          dispatch(showAlert('success', `${user.name} loggedin successfully!`));
          return user;
        }
      }).catch(() => {
        // todo: write a commom block to handle the exceptions
      });
  };
};
