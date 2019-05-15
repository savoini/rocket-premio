import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Creators as PrizesActions } from '../../store/redux/prizes';

import { Container, Action } from '../../styles/global';

function ListPrizes({ prizes, removePrize }) {
  return (
    <Container style={{ width: '99%', display: 'center', alignItems: 'center' }}>
      <h2>List of Prizes</h2>
      <table style={{ width: '90%' }}>
        <thead>
          <tr>
            <th>Amount</th>
            <th>Prize</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {prizes
            && prizes.map(prize => (
              <tr key={prize.id}>
                <td>{prize.amount}</td>
                <td>{prize.name}</td>
                <td style={{ display: 'flex', alignItems: 'center' }}>
                  <Action>
                    <i
                      className="fa fa-times-circle"
                      aria-hidden="true"
                      style={{ color: '#F00' }}
                      onClick={() => removePrize(prize.id)}
                    />
                  </Action>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </Container>
  );
}

ListPrizes.propTypes = {
  removePrize: PropTypes.func.isRequired,
  prizes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    }),
  ).isRequired,
};

const mapStateToProps = state => ({
  prizes: state.prizes,
});

const mapDispatchToProps = dispatch => bindActionCreators(PrizesActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ListPrizes);
