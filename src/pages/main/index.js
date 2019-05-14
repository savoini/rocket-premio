import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Creators as LotteryActions } from '../../store/redux/lottery';
import Prizes from '../../components/Prizes';
import ListPrizes from '../../components/ListPrizes';
import Rules from '../../components/Rules';
import Users from '../../components/Users';

import { Container, Header, SideBar } from '../../styles/global';

function Main({ generate }) {
  function clickHandle(e) {
    e.preventDefault();
    generate();
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
      <Container style={{ width: '98%', color: 'rgb(113,89,193)' }} onClick={() => generate()}>
        <form onSubmit={clickHandle}>
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
  generate: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => bindActionCreators(LotteryActions, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(Main);
