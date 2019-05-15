import { call, put } from 'redux-saga/effects';

import api from '../../services/api';
import { Creators as UsersActions } from '../redux/users';
import { Creators as ModalActions } from '../redux/modal';

function* stargazers(repositoryID, page) {
  const { data } = yield call(api.get, `/repositories/${repositoryID}/stargazers?page=${page}`);
  return data;
}

function* loadingStars(repository) {
  let users = [];

  const { data: repositoryData } = yield call(api.get, `/repos/${repository}`);
  const length = Math.ceil(repositoryData.stargazers_count / 30);

  for (let page = 1; page <= length; page += 1) {
    users = [...users, ...(yield stargazers(repositoryData.id, page))];
  }

  return [
    ...users.map(user => ({
      id: user.id,
      login: user.login,
      avatar: user.avatar_url,
      html_url: user.html_url,
    })),
  ];
}

function* repoforks(repositoryID, page) {
  const { data } = yield call(api.get, `/repositories/${repositoryID}/forks?page=${page}`);
  return data;
}

function* loadingForks(repository) {
  let users = [];

  const { data: repositoryData } = yield call(api.get, `/repos/${repository}`);
  const length = Math.ceil(repositoryData.forks_count / 30);

  for (let page = 1; page <= length; page += 1) {
    users = [...users, ...(yield repoforks(repositoryData.id, page))];
  }

  return [
    ...users.map(user => ({
      id: user.owner.id,
      login: user.owner.login,
      avatar: user.owner.avatar_url,
      html_url: user.owner.html_url,
    })),
  ];
}

export function* loadingUser(action) {
  try {
    yield put(ModalActions.loading(true));

    yield put(UsersActions.addUserRequest());

    const { stars, forks, repository } = action.payload;

    let users = [];

    if (stars) {
      users = yield loadingStars(repository);
    }

    if (forks) {
      const usersFork = yield loadingForks(repository);

      if (users.length > 0) {
        users = [...users.filter(user => usersFork.find(f => f.id === user.id))];
      } else {
        users = [...usersFork];
      }
    }

    yield put(UsersActions.addUserSuccess(users));
  } catch (error) {
    yield put(UsersActions.addUserFailure(`Erro ao adicionar usuário: ${error.message}`));
  } finally {
    yield put(ModalActions.loading(false));
  }
}
