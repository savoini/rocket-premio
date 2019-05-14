import { all, takeLatest } from 'redux-saga/effects';

import { loadingUser } from './rules';
import { Types as RulesTypes } from '../redux/rules';

export default function* rootSaga() {
  yield all([takeLatest(RulesTypes.ADD_RULES, loadingUser)]);
}
