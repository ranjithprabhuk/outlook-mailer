
import { alertActionTypes } from './actionTypes';
import { IAction } from '../../../Model';
import { IAlertState } from '../IALert';

const defaultState: IAlertState = {
  type: '',
  message: '',
};

const alertReducer = (state: IAlertState = defaultState, action: IAction): IAlertState => {
  switch (action.type) {
    case alertActionTypes.UPDATE_ALERT: {
      return { ...state, ...action.payload  };
    }
    case alertActionTypes.CLEAR_ALERT: {
      return { ...state, type: '', message: ''  };
    }
    default: {
      return state;
    }
  }
};

export default alertReducer;
