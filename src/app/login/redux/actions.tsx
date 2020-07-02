import { loginActionTypes } from './actionTypes';
import { IAction } from '../../../Model';

export const validateUser = (username: string, password: string): IAction => {
  return {
    type: loginActionTypes.VALIDATE_USER,
    payload: {
      username, password,
    },
  };
};
