import { loginActionTypes } from './actionTypes';
import { IAction } from '../../../Model';
import { ILoginFormParams, IUserState } from '../ILogin';
import axios from 'axios';
import { APP_CONFIG } from '../../../utils/app.constants';


export const validateUser = (credentials: ILoginFormParams): Function => {
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

export const setUserInformation = (data: IUserState): IAction => {
  return {
    type: loginActionTypes.VALIDATE_USER,
    payload: {
      ...data,
    },
  };
};
