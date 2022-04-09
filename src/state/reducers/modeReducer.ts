import { ActionType } from '../action-types';
import { Action } from '../actions';

interface ModeState {
  darkMode: boolean;
}

const initialState = {
  darkMode: false,
};

const stateReducer = (state: ModeState = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.CHANGE_MODE:
      return state.darkMode ? { darkMode: false } : { darkMode: true };

    default:
      return state;
  }
};

export default stateReducer;
