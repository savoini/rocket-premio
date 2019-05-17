import { put, select } from 'redux-saga/effects';
import { Creators as LotteryActions } from '../redux/lottery';
import { Creators as ModalActions } from '../redux/modal';

function* lotteryUser(users) {
  const user = yield users[Math.floor(Math.random() * (users.length - 0)) + 0];
  return user;
}

function* lotteryAllUsers(users, prize, winners) {
  const lotteryUsers = [];
  let count = 0;

  while (count < prize.amount) {
    const user = yield lotteryUser(users);
    const userFind = winners.find(userWinner => userWinner.user.id === user.id);
    if (!userFind) {
      lotteryUsers.push({
        user,
        prize: {
          ...prize,
          amount: 1,
        },
      });
      count += 1;
    }
  }
  return lotteryUsers;
}

function* lotteryAllPrizes(users, prizes) {
  let winners = [];
  let count = 0;

  while (count < prizes.length) {
    const prize = prizes[count];
    const lotteryUsers = yield lotteryAllUsers(users, prize, winners);
    winners = [...winners, ...lotteryUsers];
    // winners.reduce((winner, val) => winner.concat(val), []);

    count += 1;
  }

  return winners;
}

export function* lottery() {
  try {
    yield put(ModalActions.loading(true));
    const users = yield select(state => state.users.data);
    if (users) {
      const prizes = yield select(state => state.prizes);
      if (prizes) {
        const winners = yield lotteryAllPrizes(users, prizes);
        yield put(LotteryActions.lotterySuccess(winners));
      } else {
        yield put(LotteryActions.lotteryError('There are no prizes to raffle'));
      }
    } else {
      yield put(LotteryActions.lotteryError('No users are allowed to draw'));
    }
  } catch (error) {
    yield put(LotteryActions.lotteryError(error));
  } finally {
    yield put(ModalActions.loading(false));
  }
}
