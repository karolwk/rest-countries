import { ActionType } from '../action-types';
import { ChangeScreenMode } from '../actions';

export const changeMode = (): ChangeScreenMode => {
  return {
    type: ActionType.CHANGE_MODE,
  };
};
