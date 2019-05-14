import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Container } from '../../styles/global';

function Lottery({ lottery }) {
  return (
    <Fragment>
      <Container style={{ width: '98%', textAlign: 'center', color: 'rgb(113,89,193)' }}>
        <h1>Rocket Prizes</h1>
      </Container>
      <Container style={{ width: '98%', textAlign: 'center', color: 'rgb(113,89,193)' }}>
        <h1>
          <i className="fa fa-cube" aria-hidden="true" />
          Winners
        </h1>
      </Container>
    </Fragment>
  );
}

Lottery.propTypes = {
  lottery: PropTypes.shape({
    error: PropTypes.string,
    loading: PropTypes.bool,
    winners: PropTypes.arrayOf(
      PropTypes.shape({
        users: PropTypes.shape({}),
        prize: PropTypes.shape({}),
      }),
    ),
  }).isRequired,
};

const mapStateToProps = state => ({
  lottery: state.lottery,
});

export default connect(mapStateToProps)(Lottery);
