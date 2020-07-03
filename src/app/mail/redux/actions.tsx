import { mailActionTypes } from './actionTypes';
import { IAction } from '../../../Model';
import axios from 'axios';
import { APP_CONFIG } from '../../../utils/app.constants';

export const setMailInfo = (mails: any): IAction => {
  return {
    type: mailActionTypes.FETCH_MAILS,
    payload: {
      mails,
    },
  };
};

export const fetchMails = (): Function => {
  return (dispatch: Function) => {
    setMailInfo({} as any); // clear the mail information
    return axios.get(`${APP_CONFIG.serviceBase}mails.json`)
      .then(res => {
        if (res.data) {
          dispatch(setMailInfo(res.data));
          return res.data;
        }
      }).catch(() => {
        // todo: write a commom block to handle the exceptions
      });
  };
};
