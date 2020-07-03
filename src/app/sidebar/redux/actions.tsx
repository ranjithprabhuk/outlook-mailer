import { sideBarActionTypes } from './actionTypes';
import { IMails } from '../../mail/IMail';

export const updateSelectedMail = (selectedMail: IMails): any => {
  return {
    type: sideBarActionTypes.UPDATE_SELECTED_EMAILS,
    payload: {
      selectedMail,
    },
  };
};
