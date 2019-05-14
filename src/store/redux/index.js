import { combineReducers } from 'redux';

import rules from './rules';
import users from './users';
import prizes from './prizes';

export default combineReducers({
  rules,
  users,
  prizes,
});
