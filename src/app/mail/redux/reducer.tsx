import { mailActionTypes } from './actionTypes';
import { IAction } from '../../../Model';
import { IMailState, IMails } from '../IMail';

const defaultState: IMailState = {
  mails: [],
};

const mailReducer = (state: IMailState = defaultState, action: IAction): IMailState => {
  switch (action.type) {
    case mailActionTypes.FETCH_MAILS: {
      const mails = action.payload.mails;
      const newMails: IMails[] = [];
      const archivedMails: IMails[] = [];
      (mails || []).forEach((mail: IMails) => {
        if (mail.isNew) {
          newMails.push(mail);
        }
        if (mail.isArchived) {
          archivedMails.push(mail);
        }
      });
      return { ...state, mails, newMails, archivedMails };
    }
    default: {
      return state;
    }
  }
};

export default mailReducer;
