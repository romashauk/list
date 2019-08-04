import {SET_USERS} from './types';

const initialState = {
  users: []
};

const actionsHandlers = {
  [SET_USERS]: (state, action) => {
    return {
      ...state,
      users: action.users
    };
  }
};

const reducer = (state = initialState, action) => {
  const handler = actionsHandlers[action.type];
  return handler ? handler(state, action) : state;
};
export default reducer;
