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
