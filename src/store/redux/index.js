import { combineReducers } from 'redux';

import rules from './rules';
import users from './users';
import prize from './prizes';

export default combineReducers({
  rules,
  users,
  prize,
});
