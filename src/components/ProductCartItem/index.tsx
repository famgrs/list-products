import React from "react";
import PropTypes, { InferProps } from 'prop-types';
import Divider from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Counter from '../Counter';
import * as Styled from './style';

const propTypes = {
  cartProduct: PropTypes.shape({
    productId: PropTypes.number.isRequired,
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
    quantity: PropTypes.number.isRequired
  }).isRequired,
  onAdd: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired
}

type ProductCartItemProps = InferProps<typeof propTypes>;

const ProductCartItem = ({ cartProduct, onAdd, onRemove }: ProductCartItemProps) => (
  <Styled.Card>
    <Styled.CardMedia
      image={cartProduct.product.image}
    />
    <Divider />
    <CardContent>
      <Typography variant="h5" noWrap>
        {cartProduct.product.title}
      </Typography>
      <Typography variant="body2" component="p">
        {cartProduct.product.description}
      </Typography>
    </CardContent>
    <CardActions>
      <Counter
        counter={cartProduct.quantity}
        onAdd={onAdd}
        onRemove={onRemove}
      />
    </CardActions>
  </Styled.Card>
);

ProductCartItem.propTypes = propTypes;

export default ProductCartItem;
