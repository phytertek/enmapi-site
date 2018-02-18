import React from 'react';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';

const ClassListCardsPresentation = props => {
  console.log('card props', props);
  return (
    <div>
      <Typography variant="display3" color="primary">
        Current Classes
      </Typography>
      <Grid container>
        <Grid item />
        {props.classes.map(element => (
          <Grid item>
            <Button>
              <Typography variant="display4">{element}</Typography>
            </Button>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ClassListCardsPresentation;
