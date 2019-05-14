import React, { Component, Fragment } from 'react';

import Prizes from '../../components/Prizes';
import Users from '../../components/Users';
import Rules from '../../components/Rules';

function Main() {
  return (
    <Fragment>
      <Rules />
      <Prizes />
      <Users />
    </Fragment>
  );
}

export default Main;
