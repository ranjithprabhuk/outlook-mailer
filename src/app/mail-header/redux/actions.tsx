import { mailHeaderActionTypes } from './actionTypes';
import { IAction } from '../../../Model';

export const updateSelectedCategory = (selectedCategory: string): IAction => {
  return {
    type: mailHeaderActionTypes.UPDATE_CATEGORY,
    payload: {
      selectedCategory,
    },
  };
};

export const updateSearchText = (searchText: string): IAction => {
  return {
    type: mailHeaderActionTypes.UPDATE_SEARCH_TEXT,
    payload: {
      searchText,
    },
  };
};
