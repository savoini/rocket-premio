import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  Container, List, ListItem, Item, Avatar, Action,
} from '../../styles/global';

import { Creators as UsersActions } from '../../store/redux/users';

function Users({ users, removeUser }) {
  return (
    <>
      {users.data.length > 0 && (
        <Container>
          <h2>List of valid users</h2>
          <List>
            {users.data.map(user => (
              <ListItem key={user.id}>
                <Avatar src={user.avatar} alt={user.name}>
                  <img src={user.avatar} alt={user.name} />
                </Avatar>
                <Item>
                  <strong>{user.name}</strong>
                  <span>{user.login}</span>
                </Item>
                <Action>
                  <i
                    className="fa fa-times-circle"
                    aria-hidden="true"
                    onClick={() => removeUser(user.id)}
                  />
                </Action>
              </ListItem>
            ))}
          </List>
        </Container>
      )}
    </>
  );
}

Users.propTypes = {
  removeUser: PropTypes.func.isRequired,
  users: PropTypes.shape({
    id: PropTypes.string,
    login: PropTypes.string,
    name: PropTypes.string,
    avatar: PropTypes.string,
  }).isRequired,
};

const mapStateToProps = state => ({
  users: state.users,
});

const mapDispatchToProps = dispatch => bindActionCreators(UsersActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Users);
