import { mailActionTypes } from './actionTypes';
import { IAction } from '../../../Model';
import { IMailState, IMails } from '../IMail';

const defaultState: IMailState = {
  mails: [],
  archivedMails: [],
  newMails: [],
};

export const getMailInfo = (mails: IMails[], selectedMail: IMails, action: string): IMailState => {
  const newMails: IMails[] = [];
  const archivedMails: IMails[] = [];
  if (action === 'delete') {
    const index = mails.findIndex(mail => mail.id === selectedMail.id);
    mails.splice(index, 1);
  }
  (mails || []).forEach((mail: IMails) => {
    if (action === 'update' && selectedMail && selectedMail.id === mail.id) {
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
      const { mails, archivedMails, newMails } = getMailInfo(state.mails, action.payload.mail, 'update');
      return { ...state, mails, archivedMails, newMails };
    }
    case mailActionTypes.DELETE_MAILS: {
      const { mails, archivedMails, newMails } = getMailInfo(state.mails, action.payload.mail, 'delete');
      return { ...state, mails, archivedMails, newMails };
    }
    default: {
      return state;
    }
  }
};

export default mailReducer;
