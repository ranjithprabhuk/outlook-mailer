import { mailActionTypes } from './actionTypes';

export const displayMails = (category: string): any => {
  return {
    type: mailActionTypes.DISPLAY_EMAILS,
    payload: {
      category,
    },
  };
};
