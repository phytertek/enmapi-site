import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { connect } from 'react-redux';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import Button from 'material-ui/Button';
import MenuIcon from 'material-ui-icons/Menu';
import AccountCircle from 'material-ui-icons/AccountCircle';
import Switch from 'material-ui/Switch';
import { FormControlLabel, FormGroup } from 'material-ui/Form';
import Menu, { MenuItem } from 'material-ui/Menu';
import Input, { InputAdornment, InputLabel } from 'material-ui/Input';
import { FormControl } from 'material-ui/Form';
import Visibility from 'material-ui-icons/Visibility';
import VisibilityOff from 'material-ui-icons/VisibilityOff';
import Save from 'material-ui-icons/Save';
import Done from 'material-ui-icons/Done';
import Drawer from 'material-ui/Drawer';
import List from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Grid from 'material-ui/Grid';
import NavBarDrawer from './drawer';
import font from '../font.js';

const styles = theme => {
  return {
    root: { width: '100%' }
  };
};

class NavBarPresentation extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { classes, isAuth } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="sticky" color="secondary">
          <Toolbar>
            <Grid container spacing={0} justify="space-between">
              <Grid item>
                <NavBarDrawer />
              </Grid>
              <Grid item style={{alignSelf: 'center'}}>
                <Typography
                  variant={isAuth ? 'title' : 'display4'}
                  color="primary"
                  style={{ paddingTop: isAuth ? 4 : 0, ...font }}
                >
                  Eviluators Instructor View
                </Typography>
              </Grid>
              <Grid item style={{alignSelf: 'center'}}>
                {isAuth && (
                  <div>
                    <Button style={font}onClick={this.props.logout}>Logout</Button>
                  </div>
                )}
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

NavBarPresentation.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NavBarPresentation);
