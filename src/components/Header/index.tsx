import React, { useState } from 'react';
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
import { Product, ShopModel } from 'store/shop';
import ProductCartItem from '../ProductCartItem'

interface MouseEventElement {
  currentTarget: HTMLElement
}

const Header = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement>()
  const cart = useStoreState(({ shop }: Store) => shop.cart)
  const addToCart: Action<ShopModel, Product> = useStoreActions(({ shop }: Store) => shop.addToCart) as 
  const removeFromCart: Action<ShopModel, number> = useStoreActions(({ shop }: Store) => shop.removeFromCart) as 
  
  const openCart = (event: MouseEventElement) => {
    setAnchorEl(event.currentTarget)
  }
  
  const closeCart = () => {
    setAnchorEl(undefined)
  }

  const handleAddProduct = (product: Product) => {
    addToCart(product)
  }

  const handleRemoveProduct = (productId: number) => {
    removeFromCart(productId)
  }

  return (<>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h2">
          Shopping
        </Typography>

        <IconButton
          onClick={openCart}>
          <Badge badgeContent={cart.length} color="secondary">
            <ShoppingCartIcon color="inherit" />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>

    <Menu
      anchorEl={anchorEl}
      keepMounted
      open={Boolean(anchorEl)}
      onClose={closeCart}>
      <Typography>Carrinho</Typography>

      <Grid container direction="column">
        {cart.map(cartProduct => (
          <ProductCartItem
            cartProduct={cartProduct}
            onAdd={}
          />
        ))}
      </Grid>
    </Menu>
  </>);
};

export default Header;
