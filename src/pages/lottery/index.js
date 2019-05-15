import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { Container, Item, Avatar } from '../../styles/global';

function Lottery({ lottery }) {
  console.log(lottery);
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
        <table>
          <thead>
            <tr>
              <th>Prize</th>
              <th>User GitHub</th>
            </tr>
          </thead>
          <tbody>
            {lottery
              && lottery.winners
              && lottery.winners.map(winner => (
                <tr key={winner.user.id}>
                  <td>{winner.prize.name}</td>
                  <td style={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar src={winner.user.avatar} alt={winner.user.login}>
                      <img src={winner.user.avatar} alt={winner.user.login} />
                    </Avatar>
                    <Item>{winner.user.login}</Item>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        <Link to="/">Go back</Link>
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
