import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Pagination from 'react-js-pagination';

import { Form, Input } from '@rocketseat/unform';

import {
  Container,
  List,
  ListItem,
  Item,
  Avatar,
  Action,
  Search,
  SideBar,
  Message,
} from '../../styles/global';
import { Creators as UsersActions } from '../../store/redux/users';

function Users({ users, removeUser }) {
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState('');
  const [listUsers, setListUsers] = useState([]);

  function filterUsers(search) {
    const usersFilter = listUsers.filter(user => user.login.toLocaleLowerCase().includes(search.toLocaleLowerCase()));
    setListUsers(usersFilter);
    setFilter(search);
  }

  useEffect(() => {
    if (filter) {
      const usersFilter = users.data.filter(user => user.login.toLocaleLowerCase().includes(filter.toLocaleLowerCase()));
      setListUsers(usersFilter);
      setPage(1);
    } else {
      setListUsers(users.data);
    }
  }, [filter, users]);

  function handlePage(number) {
    setPage(number);
  }

  function handleSearch(data) {
    const { search } = data;
    const usersFilter = listUsers.filter(user => user.login.toLocaleLowerCase().includes(search.toLocaleLowerCase()));
    setListUsers(usersFilter);
    filterUsers(search);
    setPage(1);
  }

  function clear(value) {
    if (value) {
      setFilter('');
      setPage(1);
    }
  }

  const lastPage = Math.ceil(listUsers.length / 30);
  const begin = 30 * (page - 1);
  const end = page === lastPage ? listUsers.length : 30 * page;

  return (
    <>
      <Container style={{ width: '99%' }}>
        <SideBar>
          <Search>
            <Form onSubmit={handleSearch}>
              <Input
                type="search"
                name="search"
                placeholder="Search"
                onClick={e => clear(e.target.value)}
              />
              <button type="submit">
                <i className="fa fa-search" aria-hidden="true" />
              </button>
            </Form>
          </Search>
          <h2 style={{ flexGrow: 1 }}>
            List of valid users {users.data.length > 0 ? `(${users.data.length})` : ''}
          </h2>
        </SideBar>
        {listUsers.length > 0 && (
          <>
            <List>
              {listUsers.slice(begin, end).map(user => (
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
              totalItemsCount={listUsers.length}
              pageRangeDisplayed={5}
              onChange={handlePage}
            />
          </>
        )}
        {listUsers.length === 0 && (
          <Message>
            <span>No users</span>
            {filter && (
              <button onClick={() => clear('clear')} type="button">
                Clear filter
              </button>
            )}
          </Message>
        )}
      </Container>
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
