import React, { Component } from 'react';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

const schema = Yup.object().shape({
  repository: Yup.string().required(),
});

const initialData = {
  repository: 'Rocketseat/unform',
  stars: true,
  forks: true,
};

function Rules() {
  function handleSubmit(data) {
    console.log(data);
  }

  return (
    <>
      <h2>Rules</h2>
      <Form schema={schema} initialData={initialData} onSubmit={handleSubmit}>
        <Input name="repository" label="Repository:" placeholder="Name of Repository" />
        <Input name="stars" type="checkbox" value="stars" label="Star" />
        <Input name="forks" type="checkbox" value="forks" label="Fork" />
        <button type="submit">Adicionar</button>
      </Form>
    </>
  );
}

export default Rules;
