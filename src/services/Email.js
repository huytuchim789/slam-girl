import axios from 'axios';

export const sendEmailAPI = (params) => {
  return axios.post(
    'https://b9c0v7fi40.execute-api.ap-southeast-1.amazonaws.com/prod/submit-email',
    params
  );
};
