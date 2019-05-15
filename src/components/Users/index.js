import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Pagination from 'react-js-pagination';

import {
  Container, List, ListItem, Item, Avatar, Action,
} from '../../styles/global';

import { Creators as UsersActions } from '../../store/redux/users';

class Users extends Component {
  state = {
    page: 1,
  };

  handlePage = (page) => {
    this.setState({ page });
  };

  render() {
    const { page } = this.state;
    const { users, removeUser } = this.props;

    const lastPage = Math.ceil(users.data.length / 30);
    const begin = 30 * (page - 1);
    const end = page === lastPage ? users.data.length : 30 * page;

    return (
      <>
        {users.data.length > 0 && (
          <Container style={{ width: '99%' }}>
            <h2>List of valid users</h2>
            <List>
              {users.data.slice(begin, end).map(user => (
                <ListItem key={user.id}>
                  <Avatar src={user.avatar} alt={user.login}>
                    <img src={user.avatar} alt={user.login} />
                  </Avatar>
                  <Item>
                    <strong>{user.login}</strong>
                    <span>
                      <a href={user.html_url} target="_blank" rel="noopener noreferrer">
                        {user.html_url}
                      </a>
                    </span>
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
            <Pagination
              style={{ listStyle: 'none' }}
              activePage={page}
              itemsCountPerPage={30}
              totalItemsCount={users.data.length}
              pageRangeDisplayed={5}
              onChange={this.handlePage}
            />
          </Container>
        )}
      </>
    );
  }
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
