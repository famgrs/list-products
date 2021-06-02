import React from "react";
import PropTypes, { InferProps } from 'prop-types';
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import * as Styled from './style';

const propTypes = {
  cartProduct: PropTypes.shape({
    productId: PropTypes.number,
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
    quantity: PropTypes.number
  }).isRequired,
  onAdd: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired
}

type ProductCartItemProps = InferProps<typeof propTypes>;

const ProductCartItem = ({ cartProduct, onAdd, onRemove }: ProductCartItemProps) => (
  <Styled.Card>
    <CardMedia
      image={cartProduct.product.image}
    />
    <CardContent>
      <Typography variant="h3">
        {cartProduct.product.title}
      </Typography>
      <Typography variant="body2" component="p">
        {cartProduct.product.description}
      </Typography>
    </CardContent>
    <CardActions>
      <IconButton
        size="small"
        onClick={() => onAdd(cartProduct.product)}>
        <AddIcon />
      </IconButton>
      <Typography>{}</Typography>
      <IconButton
        size="small"
        onClick={() => onRemove(cartProduct.productId)}>
        <RemoveIcon />
      </IconButton>
    </CardActions>
  </Styled.Card>
);

ProductCartItem.propTypes = propTypes;

export default ProductCartItem;
