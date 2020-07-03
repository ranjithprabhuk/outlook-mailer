
import { mailViewerActionTypes } from './actionTypes';
import { IAction } from '../../../Model';
import { IMailViewerState } from '../IMailViewer';


const defaultState: IMailViewerState = {
  selectedMail: '',
};

const mailHeaderReducer = (state: IMailViewerState = defaultState, action: IAction): IMailViewerState => {
  switch (action.type) {
    case mailViewerActionTypes.DISPLAY_SELECTED_EMAILS: {
      return { ...state, ...action.payload  };
    }
    default: {
      return state;
    }
  }
};

export default mailHeaderReducer;
