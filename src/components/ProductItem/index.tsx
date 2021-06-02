import React from "react";
import PropTypes, { InferProps } from 'prop-types';
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import * as Styled from './style';

const propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    image: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.any
    ]),
    price: PropTypes.number,
    description: PropTypes.string
  }).isRequired,
  onClick: PropTypes.func.isRequired
}

type ProductItemProps = InferProps<typeof propTypes>;

const ProductItem = ({ product, onClick }: ProductItemProps) => (
  <Styled.Card>
    <CardMedia
      image={product.image}
    />
    <CardContent>
      <Typography variant="h3">
        {product.title}
      </Typography>
      <Typography variant="body2" component="p">
        {product.description}
      </Typography>
    </CardContent>
    <CardActions>
      <Button onClick={() => onClick(product)}>compprar</Button>
    </CardActions>
  </Styled.Card>
);

ProductItem.propTypes = propTypes;

export default ProductItem;
