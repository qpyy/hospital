import { addUserStart, addUserSuccess, addUserError } from '../actions/user';
import { signUpService } from '../../services/user';

const addNewUser = (login, password) => {
  return async dispatch => {
    dispatch(addUserStart());
    try {
      const userData = await signUpService(login, password);
      const token = userData.accessToken;
      localStorage.setItem('token', token);
      dispatch(addUserSuccess(userData));
    } catch (error) {
      dispatch(addUserError(error.message));
    }
  };
};

export { addNewUser };
