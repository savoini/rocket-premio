import { all, takeLatest } from 'redux-saga/effects';

import { addUserGithub } from './users';
import { Types as GitHubTypes } from '../redux/users';

export default function* rootSaga() {
  yield all([takeLatest(GitHubTypes.ADD_REQUEST, addUserGithub)]);
}
