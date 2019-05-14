import React, { Component } from 'react';
import { Form, Input } from '@rocketseat/unform';

function Prizes() {
  function handleSubmit(data) {
    console.log(data);
  }

  return (
    <>
      <h2>Prizes</h2>
      <Form onSubmit={handleSubmit}>
        <Input name="premium" label="Prêmio" />
        <button type="submit">Salvar</button>
      </Form>
    </>
  );
}

export default Prizes;
