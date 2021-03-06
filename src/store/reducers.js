import { combineReducers } from 'redux';
import { INCREASE, DECREASE, RESET, SHOW_ITEM} from './actionsTypes';

// 原始默认state
const defaultState = {
  count: 5,
  factor: 1,
  showSelectItem: false
}

function counter(state = defaultState, action) {
  switch (action.type) {
    case INCREASE:
      return { ...state, count: state.count + state.factor };
    case DECREASE:
      return { ...state, count: state.count - state.factor };
    case RESET:
      return { ...state, count: 0 };
    case SHOW_ITEM:
      return {...state, showSelectItem: !state.showSelectItem}
    default:
      return state;
  }
}

export default combineReducers({
    counter
});