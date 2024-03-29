import React, { ReactText, useCallback, useEffect, useRef, useState } from 'react';
import ReactPixel, { AdvancedMatching, Options } from 'react-facebook-pixel';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import RefreshIcon from '@material-ui/icons/Refresh';
import { toast } from 'react-toastify';
import Header from 'components/Header';
import ProductItem from 'components/ProductItem';
import ProductItemSkeleton from 'components/ProductItem/Skeleton';
import ShopContext from './Context';
import { addProductToCart, removeProductFromCart, getTotalCart } from "commons/utils/cart";
import CartProduct from 'models/cartProduct';
import Product from 'models/product';
import Styled from './style';

const Main = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<CartProduct[]>([])
  const [totalCart, setTotalCart] = useState<number>(0)
  const toastId = useRef<ReactText>('')

  const getProducts = useCallback(() => {
    setLoading(true)
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .finally(() => setLoading(false))
  }, [])

  useEffect(() => {
    const advancedMatching: AdvancedMatching = {
      em: 'test-felipe@email.com',
      fn: 'Felipe',
      ln: 'Teste',
      country: 'br',
      ct: 'Udia',
      db: '19990101',
      ge: 'male',
      ph: '+553499999999',
      st: 'mg',
      zp: '38400000'
    };
    const options: Options = {
      autoConfig: true,
      debug: true
    };
    ReactPixel.init(process.env.FACEBOOK_PIXEL_ID || '', advancedMatching, options);

  }, [])

  useEffect(() => {
    getProducts()
  }, [])


  const showToast = (message: string) => {
    if (toastId.current) {
      toast.dismiss(toastId.current)
    }
    toastId.current = toast.success(message)
  }

  const addToCartPixel = (product: Product) => {
    ReactPixel.track('AddToCart', {
      content_ids: [product.id],
      content_name: product.title,
      value: product.price,
      currency: 'BRL'
    })
  }

  const addToCheckoutPixel = () => {
    ReactPixel.track('InitiateCheckout', {
      content_ids: cart.map(it => it.productId),
      num_items: cart.reduce((sum, it) => sum + it.quantity, 0),
      contents: cart,
      value: getTotalCart(cart),
      currency: 'BRL'
    })
  }

  const handleCheckout = () => {
    addToCheckoutPixel()
    setCart([])
    showToast('Checkout efetuado com sucesso!')
  }

  const handleAddProduct = (product: Product) => {
    const newCart = addProductToCart(cart, product)
    setCart(newCart)
    setTotalCart(getTotalCart(newCart))
    addToCartPixel(product)
    showToast('Produto adicionado com sucesso!')
  }

  const handleRemoveProduct = (product: Product) => {
    const newCart = removeProductFromCart(cart, product.id)
    setCart(newCart)
    setTotalCart(getTotalCart(newCart))
    showToast('Produto removido com sucesso!')
  }

  const renderProduct = (product: Product) => (
    <Grid item md={3} sm={4} xs={6} key={`product-${product.id}`}>
      <ProductItem
        product={product}
        onAdd={handleAddProduct}
      />
    </Grid>
  )

  const renderProductSkeleton = (index: number) => (
    <Grid item md={3} sm={4} xs={6} key={index}>
      <ProductItemSkeleton />
    </Grid>
  )

  const renderEmpty = () => (
    <Box p={6} className="mh-auto">
      <Grid container direction="column" justify="center">
        <Box mb={1}>Nenhum produto encontrado</Box>
        <span className="mh-auto">
          <IconButton onClick={() => getProducts()}>
            <RefreshIcon fontSize="large" />
          </IconButton>
        </span>
      </Grid>
    </Box>
  )

  return (
    <ShopContext.Provider
      value={{
        cart,
        totalCart,
        onAddProduct: handleAddProduct,
        onRemoveProduct: handleRemoveProduct
      }}>
      <div className="fullWidth">
        <Header onCheckout={handleCheckout} />

        <Styled.Wrapper className="fullHeight fullWidth">
          <Grid container spacing={2}>
            {loading
              ? Array.from(Array(4)).map((_, i) => renderProductSkeleton(i))
              : (
                products.length
                  ? products.map(renderProduct)
                  : renderEmpty()
              )}
          </Grid>
        </Styled.Wrapper>
      </div>
    </ShopContext.Provider>
  );
};

export default Main;
