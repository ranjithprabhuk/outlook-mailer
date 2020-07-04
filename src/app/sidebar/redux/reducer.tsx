
import { sideBarActionTypes } from './actionTypes';
import { IAction } from '../../../Model';
import { ISideBarState } from '../ISideBar';

const defaultState: ISideBarState = {
  selectedMail: null,
};

const sidebarReducer = (state: ISideBarState = defaultState, action: IAction): ISideBarState => {
  switch (action.type) {
    case sideBarActionTypes.UPDATE_SELECTED_EMAILS: {
      return { ...state, selectedMail: action.payload.selectedMail };
    }
    default: {
      return state;
    }
  }
};

export default sidebarReducer;
