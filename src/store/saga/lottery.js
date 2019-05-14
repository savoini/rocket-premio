import { put, select } from 'redux-saga/effects';
import { Creators as LotteryActions } from '../redux/lottery';

export function* lottery() {
  try {
    const users = select(state => state.users.data);
    if (users) {
      const prizes = select(state => state.prizes);
      if (prizes) {
        const winners = prizes.map((prize) => {
          const user = users[Math.floor(Math.random() * (users.length - 0)) + 0];

          return {
            user,
            prize: {
              ...prize,
              amount: 1,
            },
          };
        });

        yield put(LotteryActions.lotterySucces(winners));
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
