import { put, select } from 'redux-saga/effects';
import { Creators as LotteryActions } from '../redux/lottery';

export function* lottery() {
  try {
    const users = yield select(state => state.users.data);
    console.log(users);

    if (users) {
      const prizes = yield select(state => state.prizes);
      console.log(prizes);

      if (prizes) {
        const winners = prizes.map((prize) => {
          const user = users[Math.floor(Math.random() * (users.length - 0)) + 0];
          console.log(user);

          return {
            user,
            prize: {
              ...prize,
              amount: 1,
            },
          };
        });

        console.log(winners);

        yield put(LotteryActions.lotterySuccess(winners));
      } else {
        yield put(LotteryActions.lotteryError('There are no prizes to raffle'));
      }
    } else {
      yield put(LotteryActions.lotteryError('No users are allowed to draw'));
    }
  } catch (error) {
    yield put(LotteryActions.lotteryError(error));
  }
}
