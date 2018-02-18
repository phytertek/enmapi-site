import React from 'react';
import Grid from 'material-ui/Grid';
import PropTypes from 'prop-types';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';

const StudentAssignmentPresentation = props => {
  return (
    <div>
      <Typography variant="display3" color="primary">
      All Assignments
      </Typography>  
      <List>
        {props.assignments.map(element => (
          <ListItem button>
            <ListItemText primary={element} />
          </ListItem>
        ))}  
      </List>  
    </div>
  );
};

export default StudentAssignmentPresentation;
