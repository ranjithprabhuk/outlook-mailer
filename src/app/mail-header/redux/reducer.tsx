
import { mailHeaderActionTypes } from './actionTypes';
import { IAction } from '../../../Model';
import { IMailHeaderState, MailCategory } from '../IMailHeader';

const defaultState: IMailHeaderState = {
  selectedCategory: MailCategory.NEW,
};

const mailHeaderReducer = (state: IMailHeaderState = defaultState, action: IAction): IMailHeaderState => {
  switch (action.type) {
    case mailHeaderActionTypes.UPDATE_CATEGORY: {
      return { ...state, ...action.payload  };
    }
    default: {
      return state;
    }
  }
};

export default mailHeaderReducer;
