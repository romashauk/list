import {SET_USERS} from './types';
import {getUsers} from '../../utils/api';

export const setUsers = () => {
  return async dispatch => {
    const users = await getUsers();
    dispatch({
      type: SET_USERS,
      users
    });
  };
};
