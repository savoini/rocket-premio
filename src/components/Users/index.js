import React, { Component } from 'react';
import { Form, Input } from '@rocketseat/unform';

function Users() {
  function handleSubmit(data) {
    console.log(data);
  }

  return (
    <>
      <h2>Users</h2>
      <Form onSubmit={handleSubmit}>
        <Input name="user" label="Usuário" placeholder="Usuário Github" />
        <button type="submit">Adicionar</button>
      </Form>
    </>
  );
}

export default Users;
