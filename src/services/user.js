import $api from '../http';

const signUpService = async (login, password) => {
  const response = await $api.post('/users/signup', {
    login,
    password,
  });

  return response.data;
};

export { signUpService };
