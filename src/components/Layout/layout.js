// import classes from '*.module.css';
import React from 'react';
import Aux from '../../hoc/auxi';
import classes from './layout.module.css';

const layout = (props) => (
  <Aux>
    <div>Toolbar, sideDrawer, Backdrop</div>
    <main className={classes.Content}>{props.children}</main>
  </Aux>
);

export default layout;
