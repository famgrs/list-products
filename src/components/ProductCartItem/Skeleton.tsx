import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Skeleton from "@material-ui/lab/Skeleton";

const ProductItemSkeleton = () => (
  <Card>
    <CardContent>
      <Skeleton animation="wave" variant="rect" />
    </CardContent>
    <CardContent>
      <Skeleton animation="wave" />
      <Skeleton animation="wave" />
      <Skeleton animation="wave" />
    </CardContent>
    <CardActions>
      <Skeleton animation="wave" height={50} width={100} />
    </CardActions>
  </Card>
);

export default ProductItemSkeleton;
