import { sideBarActionTypes } from './actionTypes';
import { IMails } from '../../mail/IMail';
import { showAlert } from '../../alert/redux';

export const updateSelectedMail = (selectedMail: IMails): any => {
  return {
    type: sideBarActionTypes.UPDATE_SELECTED_EMAILS,
    payload: {
      selectedMail,
    },
  };
};

export const toggleReply = (selectedMail: IMails): any => {
  selectedMail.isReply = !selectedMail.isReply;
  return {
    type: sideBarActionTypes.TOGGLE_REPLY,
    payload: {
      selectedMail,
    },
  };
};

export const sendMail = (mail: IMails): Function => {
  return (dispatch: Function) => {
    dispatch(toggleReply(mail));
    dispatch(showAlert('primary', `Mail $sent successfully!`));
  };
};
