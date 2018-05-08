import React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';
import { Link } from 'react-router-dom';

const styles = {
  flex: {
    flex: 1
  },
  links: {
    textDecoration: 'none',
    color: 'inherit'
  }
};

const NavBar = ({ classes }) => (
  <div className={classes.flex}>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="title" color="inherit" className={classes.flex}>
          Playground
        </Typography>
        <Button color="inherit">
          <Link className={classes.links} to="/">
            Login
          </Link>
        </Button>
        <Button color="inherit">
          <Link className={classes.links} to="/">
            Sign Up
          </Link>
        </Button>
      </Toolbar>
    </AppBar>
  </div>
);

export default withStyles(styles)(NavBar);
