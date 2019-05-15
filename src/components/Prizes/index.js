import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as Yup from 'yup';
import { Form, Input, useField } from '@rocketseat/unform';
import { Creators as PrizesActions } from '../../store/redux/prizes';
import { Container, Group } from '../../styles/global';

import ReactSelect from '../ReactSelect';

const schema = Yup.object().shape({
  name: Yup.string().required('Prize Name is required'),
  amount: Yup.array().required('Amount is required'),
});

const amounts = [
  { value: 1, label: '1' },
  { value: 2, label: '2' },
  { value: 3, label: '3' },
  { value: 4, label: '4' },
  { value: 5, label: '5' },
];

function Prizes({ addPrize }) {
  const initialData = {
    name: '',
    amount: [
      {
        value: 1,
        label: '1',
      },
    ],
  };

  function handleSubmit(data) {
    console.log(data);
    addPrize(data);
  }

  return (
    <Container>
      <h2>Add prize draws</h2>
      <Form schema={schema} initialData={initialData} onSubmit={handleSubmit}>
        <Group>
          <Input name="name" type="text" label="Prize" placeholder="Prize name" />
        </Group>
        <ReactSelect name="amount" options={amounts} label="Amount" />
        <button type="submit">Add Prize</button>
      </Form>
    </Container>
  );
}

Prizes.propTypes = {
  addPrize: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  prizes: state.prizes,
});

const mapDispatchToProps = dispatch => bindActionCreators(PrizesActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Prizes);
