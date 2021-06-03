import React, { useContext, useRef, useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Badge from '@material-ui/core/Badge';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
// import { useStoreActions, useStoreState, Action } from 'easy-peasy';
// import { Store } from 'store';
import CartProduct from 'models/cartProduct';
import Product from 'models/product';
import ProductCartItem from './components/ProductCartItem';
import ShopContext, { ShopContextInterface } from 'containers/Main/Context';
import * as Styled from './style';

interface MouseEventElement {
  currentTarget: HTMLElement
}

const Header = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement>()
  // const cart = useStoreState(({ shop }: Store) => shop.cart)
  // const addToCart: Action<ShopModel, Product> = useStoreActions(({ shop }: Store) => shop.addToCart)
  // const removeFromCart: Action<ShopModel, number> = useStoreActions(({ shop }: Store) => shop.removeFromCart)
  const { cart = [], totalCart = 0, onAddProduct, onRemoveProduct } = useContext<ShopContextInterface>(ShopContext)
  const appBarRef = useRef()

  const toggleCart = (event: MouseEventElement) => {
    setAnchorEl(anchorEl ? undefined : event.currentTarget)
  }

  const handleAddProduct = (product: Product) => {
    // addToCart(product)
    onAddProduct(product)
  }

  // const handleRemoveProduct = (productId: number) => {
  const handleRemoveProduct = (product: Product) => {
    // removeFromCart(productId)
    onRemoveProduct(product)
  }

  const renderEmpty = () => (
    <Box p={2}>
      <Grid container justify="center">
        Nenhum produto no carrinho
      </Grid>
    </Box>
  )

  const renderListContent = () => (<>
    {cart.map((cartProduct: CartProduct) => (
      <ListItem key={`product-cart-${cartProduct.productId}`}>
        <ProductCartItem
          cartProduct={cartProduct}
          onAdd={handleAddProduct}
          onRemove={handleRemoveProduct}
        />
      </ListItem>
    ))}
  </>)

  return (<>
    <AppBar ref={appBarRef}>
      <Toolbar>

        <Grid container alignItems="center" justify="space-between">
          <Grid item xs>
            <Typography variant="subtitle1">
              Shopping
            </Typography>
          </Grid>

          <Grid item>
            <Styled.WrapperButtonCart>
              <IconButton
                onClick={toggleCart}>
                <Badge badgeContent={cart.length} color="secondary">
                  <ShoppingCartIcon color="inherit" />
                </Badge>
              </IconButton>
            </Styled.WrapperButtonCart>
          </Grid>
        </Grid>

      </Toolbar>
    </AppBar>

    <Popper
      anchorEl={anchorEl}
      container={appBarRef.current}
      transition
      open={Boolean(anchorEl)}>
      <Paper>
        <List
          subheader={<ListSubheader>Carrinho</ListSubheader>}>
          {cart.length
            ? renderListContent()
            : renderEmpty()}

          <Divider />
          <ListItem>
            <Grid container justify="flex-end">
              <Typography><b>Total</b>&nbsp;${totalCart.toFixed(2)}</Typography>
            </Grid>
          </ListItem>
        </List>
      </Paper>
    </Popper>
  </>);
};

export default Header;
