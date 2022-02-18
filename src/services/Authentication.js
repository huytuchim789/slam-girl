import { api } from './api';

export const postSignInApi = (params) => {
  return api.post('/user/sign-in', params);
};
