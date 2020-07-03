import { mailActionTypes } from './actionTypes';
import { IAction } from '../../../Model';
import axios from 'axios';
import { APP_CONFIG } from '../../../utils/app.constants';

export const setUserInformation = (data: any): IAction => {
  return {
    type: mailActionTypes.VALIDATE_USER,
    payload: {
      ...data,
    },
  };
};

export const validateUser = (credentials: any): Function => {
  return (dispatch: Function) => {
    setUserInformation({} as any); // clear the user information if it exists
    return axios.get(`${APP_CONFIG.serviceBase}user.json?user=${credentials.username}&password=${credentials.username}`)
      .then(res => {
        if (res.data && res.data.token) {
          dispatch(setUserInformation(res.data));
          return res.data;
        }
      }).catch(() => {
        // todo: write a commom block to handle the exceptions
      });
  };
};
