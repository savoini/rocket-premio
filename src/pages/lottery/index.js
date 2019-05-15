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
        <h1>
          <Link to="/">Rocket Prizes</Link>
        </h1>
      </Container>
      <Container
        style={{
          width: '98%',
          textAlign: 'center',
          color: 'rgb(113,89,193)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <h1>
          <i className="fa fa-cube" aria-hidden="true" />
          Winners
        </h1>
        <table style={{ width: '80%' }}>
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
                    <Item>
                      {winner.user.login}
                      <span>
                        <a href={winner.user.html_url} target="_blank" rel="noopener noreferrer">
                          {winner.user.html_url}
                        </a>
                      </span>
                    </Item>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        <Link
          to="/"
          style={{
            height: '52px',
            width: '500px',
            color: '#FFF',
            fontSize: '18px',
            background: 'rgb(113,89,193,0.8)',
            borderRadius: '10px',
            border: '2px',
            marginTop: '10px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          Go back
        </Link>
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
