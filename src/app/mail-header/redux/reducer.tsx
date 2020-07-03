
import { mailActionTypes } from './actionTypes';
import { IAction } from '../../../Model';
import { IMailHeaderState } from '../IMailHeader';

const defaultState: IMailHeaderState = {
  from: '',
};

const mailViewerReducer = (state: IMailHeaderState = defaultState, action: IAction): IMailHeaderState => {
  switch (action.type) {
    case mailActionTypes.DISPLAY_EMAILS: {
      return { ...state, ...action.payload  };
    }
    default: {
      return state;
    }
  }
};

export default mailViewerReducer;
