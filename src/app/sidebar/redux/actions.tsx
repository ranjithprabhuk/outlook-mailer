import { sideBarActionTypes } from './actionTypes';

export const displayMails = (selectedEmail: string): any => {
  return {
    type: sideBarActionTypes.DISPLAY_SELECTED_EMAILS,
    payload: {
      selectedEmail,
    },
  };
};
