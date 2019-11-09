import { LOADER } from "./actions";

export const INITIAL_STATE = {
  active: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOADER:
      return {
        ...state,
        active: action.payload,
      }
    default:
      return state;
  }
};