import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Form from '../../Form';
import Header from '../../Header';
import CustomSnackbar from '../../UI/Snackbar';
import CustomInput from '../../UI/CustomInput';
import useActions from '../../../hooks/useActions';
import Vector from '../../../images/Vector.png';
import { StyledSignUpPage, StyledImage } from './style';

const SignUpPage = () => {
  const [newUser, setNewUser] = useState({
    login: '',
    password: '',
    repeatPassword: '',
  });
  const [errorMessage, setErrorMessage] = useState({
    loginError: '',
    passwordError: '',
    repeatPasswordError: '',
  });
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
  });
  const error = useSelector(state => state.user.error);

  const { addNewUser } = useActions();

  useEffect(() => {
    if (error) {
      handleSnackbar(true, error);
    }
  }, [error]);

  const handleSnackbar = (open, message = '') => {
    setSnackbar({
      open: open,
      message: message,
    });
  };

  const handleChangeInput = event => {
    setNewUser(state => ({
      ...state,
      [event.target.name]: event.target.value,
    }));
  };

  const validateNewUser = event => {
    event.preventDefault();
    setErrorMessage({
      loginError: '',
      passwordError: '',
      repeatPasswordError: '',
    });
    const { login, password, repeatPassword } = newUser;

    if (login.trim().length < 6) {
      setErrorMessage({
        loginError: 'Логин должен содержать не менее 6 символов.',
      });
      return;
    }

    if (!/^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z0-9]{6,}$/.test(password)) {
      setErrorMessage({
        passwordError:
          'Пароль должен содержать минимум 6 символов, включая букву и цифру.',
      });
      return;
    }

    if (password !== repeatPassword) {
      setErrorMessage({
        repeatPasswordError: 'Пароль и его повторение не совпадают!',
      });
      return;
    }

    addNewUser(login, password);
    setNewUser({
      login: '',
      password: '',
      repeatPassword: '',
    });
  };

  return (
    <StyledSignUpPage>
      <Header title="Зарегистрироваться в системе" />
      <StyledImage src={Vector} alt="Welcome..." />
      <Form
        formLinkText="Авторизация"
        buttonText="Зарегистрироваться"
        formTitle="Регистрация"
        submitAction={validateNewUser}
        destination="/sign-in"
      >
        <CustomInput
          name="login"
          inputLabel="Логин:"
          placeholderValue="Логин"
          handleChangeInput={handleChangeInput}
          errorMessage={errorMessage.loginError}
        />
        <CustomInput
          name="password"
          inputLabel="Пароль:"
          placeholderValue="Пароль"
          handleChangeInput={handleChangeInput}
          errorMessage={errorMessage.passwordError}
        />
        <CustomInput
          name="repeatPassword"
          inputLabel="Повторите пароль:"
          placeholderValue="Пароль"
          handleChangeInput={handleChangeInput}
          errorMessage={errorMessage.repeatPasswordError}
        />
      </Form>
      <CustomSnackbar
        open={snackbar.open}
        message={snackbar.message}
        autoHideDuration={2500}
        handleClose={() => handleSnackbar(false, '')}
      />
    </StyledSignUpPage>
  );
};

export default SignUpPage;
