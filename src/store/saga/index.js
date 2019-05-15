import { all, takeLatest } from 'redux-saga/effects';

import { loadingUser } from './rules';
import { lottery } from './lottery';
import { Types as RulesTypes } from '../redux/rules';
import { Types as LotteryTypes } from '../redux/lottery';

export default function* rootSaga() {
  yield all([
    takeLatest(RulesTypes.ADD_RULES, loadingUser),
    takeLatest(LotteryTypes.LOTTERY_REQUEST, lottery),
  ]);
}
