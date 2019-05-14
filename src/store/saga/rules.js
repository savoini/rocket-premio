import { call, put } from 'redux-saga/effects';

import api from '../../services/api';
import { Creators as UsersActions } from '../redux/users';

const loadingStars = function* stars(repository) {
  const response = yield call(api.get, `/repos/${repository}/stargazers`);
  console.log(response);

  // return new Promise((resolve, reject) => {
  //   resolve({
  //     data: [
  //       ...data.map(value => ({
  //         id: value.id,
  //         name: value.name,
  //         login: value.login,
  //         avatar: value.avatar_url,
  //       })),
  //     ],
  //   });
  // });
};

export function* loadingUser(action) {
  try {
    const { stars, forks, repository } = action.payload;

    let users = [];

    if (stars) {
      const { data } = yield call(api.get, `/repos/${repository}/stargazers`);

      users = [
        ...data.map(value => ({
          id: value.id,
          name: value.name,
          login: value.login,
          avatar: value.avatar_url,
        })),
      ];
    }

    if (forks) {
      console.log(forks);
    }

    const { headers } = yield call(api.get, `/repos/${repository}/stargazers`);
    console.log(headers.link.split(','));

    const [usersStars] = yield [call(loadingStars, repository)];
    const { meudado } = usersStars;
    console.log(meudado);

    yield put(UsersActions.addUserSuccess(users));
  } catch (error) {
    yield put(UsersActions.addUserFailure(`Erro ao adicionar usuário: ${error.message}`));
  }
}
