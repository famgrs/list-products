import React from 'react';
import PropTypes, { InferProps } from 'prop-types';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

const propTypes = {
  counter: PropTypes.number.isRequired,
  onAdd: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired
};

type CounterProps = InferProps<typeof propTypes>;

const Counter = ({ counter, onAdd, onRemove }: CounterProps) => (
  <Grid
    container
    alignItems="center"
    spacing={2}>
    <Grid item>
      <IconButton
        size="small"
        onClick={() => onRemove()}>
        <RemoveIcon />
      </IconButton>
    </Grid>
    <Grid item>
      <Typography>{counter}</Typography>
    </Grid>
    <Grid item>
      <IconButton
        size="small"
        onClick={() => onAdd()}>
        <AddIcon />
      </IconButton>
    </Grid>
  </Grid>
)

Counter.propTypes = propTypes;

export default Counter;
