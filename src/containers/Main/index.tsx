import React, { useCallback, useEffect, useState } from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Header from 'components/Header';
import ProductItem from 'components/ProductItem';
import ProductItemSkeleton from 'components/ProductItem/Skeleton';
import ShopContext from './Context';
import { addProductToCart, removeProductFromCart } from "commons/utils/cart";
import CartProduct from 'models/cartProduct';
import Product from 'models/product';
import Styled from './style';

const Main = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<CartProduct[]>([])

  const getProducts = useCallback(() => {
    setLoading(true)
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .finally(() => setLoading(false))
  }, [])

  useEffect(() => {
    getProducts()
  }, [])


  const handleAddProduct = (product: Product) => {
    setCart(addProductToCart(cart, product))
  }

  const handleRemoveProduct = (product: Product) => {
    setCart(removeProductFromCart(cart, product.id))
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

  return (
    <ShopContext.Provider
      value={{
        cart,
        onAddProduct: handleAddProduct,
        onRemoveProduct: handleRemoveProduct
      }}>
      <div className="fullWidth">
        <Header />

        <Styled.Wrapper className="fullHeight fullWidth">
          <Grid container spacing={2}>
            {loading
              ? Array.from(Array(6)).map((_, i) => renderProductSkeleton(i))
              : (
                products.length
                ? products.map(renderProduct)
                : 'Nenhum produto encontrado'
              )}
          </Grid>
        </Styled.Wrapper>
      </div>
    </ShopContext.Provider>
  );
};

export default Main;
