import { combineReducers } from 'redux';

const NAME = 'AUTH';

const UPDATE_CURRENT_USER = `${NAME}/UPDATE_CURRENT_USER`;

export const updateCurrentUser = user => ({
  type: UPDATE_CURRENT_USER,
  user,
});

const currentUser = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_CURRENT_USER:
      return action.user;
    default:
      return state;
  }
};

export default combineReducers({
  currentUser,
});
