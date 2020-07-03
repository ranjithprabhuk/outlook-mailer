
import { mailHeaderActionTypes } from './actionTypes';
import { IAction } from '../../../Model';
import { IMailHeaderState, MailCategory } from '../IMailHeader';

const defaultState: IMailHeaderState = {
  selectedCategory: MailCategory.NEW,
  searchText: '',
};

const mailHeaderReducer = (state: IMailHeaderState = defaultState, action: IAction): IMailHeaderState => {
  switch (action.type) {
    case mailHeaderActionTypes.UPDATE_CATEGORY: {
      return { ...state, ...action.payload  };
    }
    case mailHeaderActionTypes.UPDATE_SEARCH_TEXT: {
      return { ...state, ...action.payload  };
    }
    default: {
      return state;
    }
  }
};

export default mailHeaderReducer;
