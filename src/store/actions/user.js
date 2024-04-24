import userEnums from '../enums/user';

const addUserStart = payload => ({
  type: userEnums.ADD_USER_START,
  payload,
});

const addUserSuccess = payload => ({
  type: userEnums.ADD_USER_SUCCESS,
  payload,
});

const addUserError = error => ({
  type: userEnums.ADD_USER_ERROR,
  error,
});

export { addUserStart, addUserSuccess, addUserError };
