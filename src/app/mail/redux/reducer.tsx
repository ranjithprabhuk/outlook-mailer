import { mailActionTypes } from './actionTypes';
import { IAction } from '../../../Model';
import { IMailState } from '../IMail';

const defaultState: IMailState = {
  mails: [],
  archivedMails: [],
  newMails: [],
};

const mailReducer = (state: IMailState = defaultState, action: IAction): IMailState => {
  switch (action.type) {
    case mailActionTypes.FETCH_MAILS: {
      return { ...state, ...action.payload };
    }
    default: {
      return state;
    }
  }
};

export default mailReducer;
