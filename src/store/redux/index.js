import { combineReducers } from 'redux';

import rules from './rules';
import users from './users';
import modal from './modal';
import prizes from './prizes';
import lottery from './lottery';

export default combineReducers({
  rules,
  users,
  modal,
  prizes,
  lottery,
});
