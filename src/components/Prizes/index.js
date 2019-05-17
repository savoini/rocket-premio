import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as Yup from 'yup';
import { Form, Input } from '@rocketseat/unform';
import { Creators as PrizesActions } from '../../store/redux/prizes';
import { Container, Group } from '../../styles/global';

const schema = Yup.object().shape({
  name: Yup.string().required('Prize Name is required'),
  amount: Yup.string().required('Amount is required'),
});

function Prizes({ addPrize }) {
  const initialData = {
    name: '',
  };

  function handleSubmit(data, { resetForm }) {
    addPrize(data);
    resetForm();
  }

  return (
    <Container>
      <h2>Add prize draws</h2>
      <Form schema={schema} initialData={initialData} onSubmit={handleSubmit}>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
          <Group>
            <Input name="amount" type="text" label="Amount" placeholder="Amount" />
          </Group>
          <Group style={{ marginLeft: '5px' }}>
            <Input name="name" type="text" label="Prize" placeholder="Prize name" />
          </Group>
        </div>
        {/* <ReactSelect name="amount" options={amounts} label="Amount" multiple={false} /> */}
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
