import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Creators as PrizesActions } from '../../store/redux/prizes';

import {
  Container, List, ListItem, Item, Action,
} from '../../styles/global';

function ListPrizes({ prizes, removePrize }) {
  return (
    <Container>
      <h2>List of Prizes</h2>
      <List>
        {prizes
          && prizes.map(prize => (
            <ListItem key={prize.id}>
              <Item>{prize.name}</Item>
              <Action>
                <i
                  className="fa fa-times-circle"
                  aria-hidden="true"
                  style={{ color: '#F00' }}
                  onClick={() => removePrize(prize.id)}
                />
              </Action>
            </ListItem>
          ))}
      </List>
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
