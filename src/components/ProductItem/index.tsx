import React from "react";
import PropTypes, { InferProps } from 'prop-types';
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
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
  onAdd: PropTypes.func.isRequired
}

type ProductItemProps = InferProps<typeof propTypes>;

const ProductItem = ({ product, onAdd }: ProductItemProps) => (
  <Styled.Card>
    <Styled.CardMedia
      image={product.image}
    />
    <Divider />
    <CardContent>
      <Typography variant="subtitle1">
        {product.title}
      </Typography>
    </CardContent>
    <Styled.CardContent>
      <Typography variant="caption">
        {product.description}
      </Typography>
    </Styled.CardContent>
    <Styled.CardActions>
      <Typography variant="h5" color="secondary">
        <b>${product.price}</b>
      </Typography>

      <Button color="primary" variant="contained" onClick={() => onAdd(product)}>Add to Cart</Button>
    </Styled.CardActions>
  </Styled.Card>
);

ProductItem.propTypes = propTypes;

export default ProductItem;
