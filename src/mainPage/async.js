import axios from 'axios';
import { API_HOST } from '../appConfig';

import { LOGIN_SUCCESS, REGISTER_SUCCESS, LOGIN } from '../auth/async';

export const GET_TEST_RESULTS = 'GET_TEST_RESULTS';
export const GET_TEST_RESULTS_SENT = 'GET_TEST_RESULTS_SENT';
export const GET_TEST_RESULTS_SUCCESS = 'GET_TEST_RESULTS_SUCCESS';
export const GET_TEST_RESULTS_ERROR = 'GET_TEST_RESULTS_ERROR';
export const getTestResults = () => ({ type: GET_TEST_RESULTS });

export default store => next => async action => {
  next(action);
  const state = store.getState();
  const authHeader = { headers: { Authorization: state.authStore.token } };
  switch (action.type) {
    case LOGIN_SUCCESS:
      next({ type: GET_TEST_RESULTS });
    case REGISTER_SUCCESS:
      next({ type: GET_TEST_RESULTS });
    case GET_TEST_RESULTS:
      try {
        next({ type: GET_TEST_RESULTS_SENT });
        console.log(authHeader);
        const response = await axios.get(
          `${API_HOST}/airtable/test-results`,
          authHeader
        );
        next({ type: GET_TEST_RESULTS_SUCCESS, payload: response });
      } catch (error) {
        next({ type: GET_TEST_RESULTS_ERROR, payload: error });
      }
    default:
      break;
  }
};
