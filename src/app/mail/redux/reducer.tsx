import { mailActionTypes } from './actionTypes';
import { IAction } from '../../../Model';
import { IMailState, IMails } from '../IMail';

const defaultState: IMailState = {
  mails: [],
  archivedMails: [],
  newMails: [],
};

export const getMailInfo = (mails: IMails[], selectedMail: IMails): IMailState => {
  const newMails: IMails[] = [];
  const archivedMails: IMails[] = [];
  (mails || []).forEach((mail: IMails) => {
    if (selectedMail && selectedMail.id === mail.id) {
      mail.isArchived = mail.isArchived;
      mail.isNew = false;
    }
    if (mail.isNew) {
      newMails.push(mail);
    }
    if (mail.isArchived) {
      archivedMails.push(mail);
    }
  });
  return {
    mails,
    newMails,
    archivedMails,
  };
};

const mailReducer = (state: IMailState = defaultState, action: IAction): IMailState => {
  switch (action.type) {
    case mailActionTypes.FETCH_MAILS: {
      return { ...state, ...action.payload };
    }
    case mailActionTypes.TOGGLE_ARCHIVE_MAILS: {
      const { mails, archivedMails, newMails } = getMailInfo(state.mails, action.payload.mail);
      return { ...state, mails, archivedMails, newMails };
    }
    default: {
      return state;
    }
  }
};

export default mailReducer;
