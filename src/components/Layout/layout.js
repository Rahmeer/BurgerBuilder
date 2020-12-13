// import classes from '*.module.css';
import React from 'react';
import Aux from '../../hoc/auxi';
import classes from './layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';

const layout = (props) => (
  <Aux>
    <Toolbar />
    <main className={classes.Content}>{props.children}</main>
  </Aux>
);

export default layout;
