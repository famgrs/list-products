import React from "react";
import Grid from "@material-ui/core/Grid";
import CardContent from "@material-ui/core/CardContent";
import Skeleton from "@material-ui/lab/Skeleton";
import * as Styled from './style';

const ProductItemSkeleton = () => (
  <Styled.Card>
    <Styled.WrapperImage />
    <Styled.CardContent>
      <Skeleton animation="wave" height={60} />
    </Styled.CardContent>
    <CardContent>
      <Skeleton animation="wave" height={20} />
      <Skeleton animation="wave" height={20} />
      <Skeleton animation="wave" height={20} />
      <Skeleton animation="wave" height={20} />
    </CardContent>
    <Styled.CardActions>
      <Grid container alignItems="center" justify="space-between">
        <Skeleton animation="wave" height={50} width={120} />
      </Grid>
      <Skeleton animation="wave" height={50} width={100} />
    </Styled.CardActions>
  </Styled.Card>
);

export default ProductItemSkeleton;
