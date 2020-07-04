import { mailActionTypes } from './actionTypes';
import { IAction } from '../../../Model';
import axios from 'axios';
import { APP_CONFIG } from '../../../utils/app.constants';
import { updateSelectedMail } from '../../sidebar/redux';
import { IMails } from '../IMail';
import { MailCategory } from '../../mail-header/IMailHeader';
import { updateSelectedCategory } from '../../mail-header/redux';
import { showAlert } from '../../alert/redux';

export const setMailInfo = (mails: IMails[]): IAction => {
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
  return {
    type: mailActionTypes.FETCH_MAILS,
    payload: {
      mails,
      newMails,
      archivedMails,
    },
  };
};

const getCategoryInfo = (mail: IMails): string => {
  if (mail.isNew) {
    return MailCategory.NEW;
  } else if (mail.isArchived) {
    return MailCategory.TOTAL;
  }

  return MailCategory.TOTAL;
};

export const fetchMails = (): Function => {
  return (dispatch: Function) => {
    setMailInfo([]); // clear the mail information
    return axios.get(`${APP_CONFIG.serviceBase}mails.json`)
      .then(res => {
        if (res.data && res.data.length > 0) {
          const latestMail = res.data[0];
          dispatch(updateSelectedCategory(getCategoryInfo(latestMail)));
          dispatch(updateSelectedMail(latestMail));
          dispatch(setMailInfo(res.data));
          return res.data;
        }
      }).catch(() => {
        // todo: write a commom block to handle the exceptions
      });
  };
};

export const updateArchiveState = (mail: IMails): IAction => {
  return {
    type: mailActionTypes.TOGGLE_ARCHIVE_MAILS,
    payload: {
      mail,
    },
  };
};

export const updateDeleteState = (mail: IMails): IAction => {
  return {
    type: mailActionTypes.DELETE_MAILS,
    payload: {
      mail,
    },
  };
};

export const toggleArchive = (mail: IMails): Function => {
  return (dispatch: Function) => {
    mail.isArchived = !mail.isArchived;
    const archiveText = mail.isArchived ? 'Archived' : 'Unarchived';
    const category = mail.isArchived ? MailCategory.ARCHIVED : MailCategory.TOTAL;
    dispatch(updateArchiveState(mail));
    dispatch(updateSelectedCategory(category));
    dispatch(updateSelectedMail(mail));
    dispatch(showAlert('primary', `Mail ${archiveText} successfully!`));
  };
};

export const deleteMail = (mail: IMails): Function => {
  return (dispatch: Function) => {
    dispatch(updateDeleteState(mail));
    dispatch(updateSelectedMail(null as any));
    dispatch(showAlert('danger', `Mail deleted successfully!`));
  };
};
