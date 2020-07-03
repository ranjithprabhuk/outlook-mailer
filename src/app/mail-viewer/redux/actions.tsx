import { mailViewerActionTypes } from './actionTypes';

export const displayMails = (selectedEmail: string): any => {
  return {
    type: mailViewerActionTypes.DISPLAY_SELECTED_EMAILS,
    payload: {
      selectedEmail,
    },
  };
};
