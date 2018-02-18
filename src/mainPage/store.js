import { GET_TEST_RESULTS_SUCCESS } from './async';

const initState = {
  testResults: []
};

export default (state = initState, { type, payload }) => {
  switch (type) {
    case GET_TEST_RESULTS_SUCCESS:
      console.log('main page store get test results', payload.data);
      return { ...state, testResults: payload.data };
    default:
      return state;
  }
};
