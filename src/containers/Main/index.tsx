import React, { useCallback, useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import ProductItem from 'components/ProductItem';
import ProductItemSkeleton from 'components/ProductItem/Skeleton';

interface Product {
  id: number,
  name: string,
  image: string | any,
  price: number,
  description: string
};

const Main = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);

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

  const handleClickProduct = (product: Product) => {
    console.log('prod', product) 
  }

  const renderProduct = (product: Product) => (
    <Grid item md={4} sm={6} xs={1} key={`product-${product.id}`}>
      <ProductItem product={product} onClick={handleClickProduct} />
    </Grid>
  )

  const renderProductSkeleton = (index: number) => (
    <Grid item md={4} sm={6} xs={1} key={index}>
      <ProductItemSkeleton />
    </Grid>
  )

  return (
    <Grid container spacing={2}>
      {loading
        ? Array.from(Array(2)).map((_, i) => renderProductSkeleton(i))
        : (
          products.length
            ? products.map(renderProduct)
            : 'Nenhum produto encontrado'
        )}
    </Grid>
  );
};

export default Main;
