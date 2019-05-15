import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toast } from 'react-toastify';

import { Creators as LotteryActions } from '../../store/redux/lottery';
import Prizes from '../../components/Prizes';
import ListPrizes from '../../components/ListPrizes';
import Rules from '../../components/Rules';
import Users from '../../components/Users';

import { Container, Header, SideBar } from '../../styles/global';

function Main({
  users, prizes, generate, history,
}) {
  function clickHandle(e) {
    e.preventDefault();
    if (users.data.length > 0) {
      if (prizes.length > 0) {
        generate();
        history.push({ pathname: '/lottery' });
      } else {
        toast.error('There are no prizes to raffle');
      }
    } else {
      toast.error('No users are allowed to draw');
    }
  }

  return (
    <Fragment>
      <Container style={{ width: '98%', textAlign: 'center', color: 'rgb(113,89,193)' }}>
        <h1>Rocket Prizes</h1>
      </Container>
      <Header>
        <div style={{ minWidth: '350px' }}>
          <Prizes />
          <Rules />
        </div>
        <SideBar>
          <ListPrizes />
        </SideBar>
      </Header>
      <Users />
      <Container
        style={{
          width: '98%',
          color: 'rgb(113,89,193)',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <form onSubmit={e => clickHandle(e)}>
          <button type="submit">
            <i className="fa fa-cube" aria-hidden="true" />
            Sortear
          </button>
        </form>
      </Container>
    </Fragment>
  );
}

Main.propTypes = {
  users: PropTypes.shape({}).isRequired,
  prizes: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  generate: PropTypes.shape({}).isRequired,
  history: PropTypes.shape({}).isRequired,
};

const mapDispatchToProps = dispatch => bindActionCreators(LotteryActions, dispatch);
const mapStateToProps = state => ({
  users: state.users,
  prizes: state.prizes,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
