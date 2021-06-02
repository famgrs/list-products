import React from 'react';
import PropTypes, { InferProps} from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useStoreActions, useStoreState } from 'easy-peasy';

const propTypes = {
  children: PropTypes.node.isRequired
}

type LayoutProps = InferProps<typeof propTypes>;

const Layout = ({ children }: LayoutProps) => {
  const renderHeader = () => (
    <AppBar position="static">
      <Toolbar>
        
      </Toolbar>
    </AppBar>
  )

  return (
    <Grid container direction="column">
      <Grid item>
        {renderHeader()}
      </Grid>

      <Grid item xs>
        {children}
      </Grid>
    </Grid>
  );
};


Layout.propTypes = propTypes;


export default Layout;
