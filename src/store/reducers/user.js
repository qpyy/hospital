import userEnums from '../enums/user';

const initialState = {
  isAuth: false,
  user: {},
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case userEnums.ADD_USER_START:
      return state;

    case userEnums.ADD_USER_SUCCESS:
      return {
        ...state,
        isAuth: true,
        user: action.payload,
      };

    case userEnums.ADD_USER_ERROR:
      return {
        ...state,
        error: action.error,
      };

    default:
      return state;
  }
};

export default userReducer;
