import React, { useContext, useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Badge from '@material-ui/core/Badge';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useStoreActions, useStoreState, Action } from 'easy-peasy';
import { Store } from 'store';
import CartProduct from 'models/cartProduct';
import Product from 'models/product';
import ProductCartItem from '../ProductCartItem';
import ShopContext from 'containers/Main/Context';

interface MouseEventElement {
  currentTarget: HTMLElement
}

const Header = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement>()
  // const cart = useStoreState(({ shop }: Store) => shop.cart)
  // const addToCart: Action<ShopModel, Product> = useStoreActions(({ shop }: Store) => shop.addToCart)
  // const removeFromCart: Action<ShopModel, number> = useStoreActions(({ shop }: Store) => shop.removeFromCart)
  const contextData = useContext(ShopContext)
  console.log('context data', contextData)
  
  const openCart = (event: MouseEventElement) => {
    setAnchorEl(event.currentTarget)
  }
  
  const closeCart = () => {
    setAnchorEl(undefined)
  }

  const handleAddProduct = (product: Product) => {
    // addToCart(product)
    console.log('handleAddProduct', product)
  }

  const handleRemoveProduct = (productId: number) => {
    // removeFromCart(productId)
    console.log('handleRemoveProduct', productId)
  }

  return (
    <>
      <AppBar>
        <Toolbar>
          <Grid container alignItems="center" justify="space-between">
            <Grid item xs>
              <Typography variant="subtitle1">
                Shopping
              </Typography>
            </Grid>

            <Grid item>
              <IconButton
                onClick={openCart}>
                {/* <Badge badgeContent={cart.length} color="secondary">
                  <ShoppingCartIcon color="inherit" />
                </Badge> */}
              </IconButton>
            </Grid>
          </Grid>

        </Toolbar>
      </AppBar>

      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={closeCart}>
        <Typography variant="h2"><b>Carrinho</b></Typography>

        <Grid container direction="column">
          {/* {cart.map(cartProduct => (
            <Grid item key={`product-cart-${cartProduct.productId}`}>
              <ProductCartItem
                cartProduct={cartProduct}
                onAdd={handleAddProduct}
                onRemove={handleRemoveProduct}
              />
              <hr />
            </Grid>
          ))} */}
        </Grid>
      </Menu>
    </>
  );
};

export default Header;
