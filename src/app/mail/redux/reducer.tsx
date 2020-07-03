import { mailActionTypes } from './actionTypes';
import { IAction } from '../../../Model';

const defaultState: any = {
  username: '',
  name: '',
  token: localStorage.getItem('auth_token') || '',
};

const userReducer = (state: any = defaultState, action: IAction): any => {
  switch (action.type) {
    case mailActionTypes.VALIDATE_USER: {
      return { ...state, ...action.payload  };
    }
    default: {
      return state;
    }
  }
};

export default userReducer;
