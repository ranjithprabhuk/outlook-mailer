import { IUserState } from '../ILogin';
import { loginActionTypes } from './actionTypes';
import { IAction } from '../../../Model';

const defaultState: IUserState = {
  isLoggedIn: false,
  username: '',
  name: '',
  token: localStorage.getItem('auth_token') || '',
};

const userReducer = (state: IUserState = defaultState, action: IAction): IUserState => {
  switch (action.type) {
    case loginActionTypes.VALIDATE_USER: {
      return { ...state, isLoggedIn: action.payload.isLoggedIn  };
    }
    default: {
      return state;
    }
  }
};

export default userReducer;
