import { LIST_HOME } from "./actions";

export const INITIAL_STATE = {
  list: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LIST_HOME:
      return {
        ...state,
        list: action.payload,
      }
    default:
      return state;
  }
};