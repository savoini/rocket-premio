import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { Creators as RulesActions } from '../../store/redux/rules';

import { Container, Group } from '../../styles/global';

const schema = Yup.object().shape({
  repository: Yup.string().required(),
});

function Rules({ rules, addRule }) {
  const [stars, setStars] = useState(rules.stars);
  const [forks, setForks] = useState(rules.forks);

  function handleSubmit(data) {
    addRule({
      ...data,
      stars,
      forks,
    });
  }

  return (
    <Container>
      <h2>Rules</h2>
      <Form schema={schema} initialData={rules} onSubmit={handleSubmit}>
        <Group>
          <Input type="text" name="repository" label="Repository:" placeholder="user/repository" />
        </Group>
        <Input
          name="stars"
          type="checkbox"
          checked={stars}
          label="Star"
          onChange={e => setStars(e.target.checked)}
        />
        <Input
          name="forks"
          type="checkbox"
          checked={forks}
          label="Fork"
          onChange={e => setForks(e.target.checked)}
        />
        <button type="submit">Load users</button>
      </Form>
    </Container>
  );
}

Rules.propTypes = {
  addRule: PropTypes.func.isRequired,
  rules: PropTypes.shape({}).isRequired,
};

const mapStateToProps = state => ({
  rules: state.rules,
});

const mapDispatchToProps = dispatch => bindActionCreators(RulesActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Rules);
