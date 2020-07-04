import { alertActionTypes } from './actionTypes';
import { IAction } from '../../../Model';
import { APP_CONFIG } from '../../../utils/app.constants';

export const updateAlertMessage = (type: string, message: string): IAction => {
  return {
    type: alertActionTypes.UPDATE_ALERT,
    payload: {
      type,
      message,
    },
  };
};

export const clearAlertMessage = (): IAction => {
  return {
    type: alertActionTypes.CLEAR_ALERT,
    payload: null,
  };
};

export const showAlert = (type: string, message: string): Function => {
  return (dispatch: Function) => {
    dispatch(updateAlertMessage(type, message));
    setTimeout(() => dispatch(clearAlertMessage()), APP_CONFIG.alertTimeout);
  };
};
