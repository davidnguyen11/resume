import { call, put, takeLatest } from 'redux-saga/effects';
import { FETCH_DATA } from './constants';

import { fetchDataSuccess, fetchDataFail } from './actions';

import { config } from '~/app/config';
import request from '~/app/utils/request';

function* fetchData({ payload: { query } }) {
  try {
    const newQuery = query.dev;
    const url = `${config.api.sample}/${newQuery}`;
    const response = yield call(request, url);
    yield put(fetchDataSuccess(response));
  } catch (err) {
    yield put(fetchDataFail(err));
  }
}

export function* root() {
  yield takeLatest(FETCH_DATA, fetchData);
}

export default root;
