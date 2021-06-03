import React from "react";
import PropTypes, { InferProps } from 'prop-types';
import Avatar from "@material-ui/core/Avatar";
import Grid from '@material-ui/core/Grid';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Counter from 'components/Counter';
import * as Styled from './style';
import { Typography } from "@material-ui/core";

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
  <Grid container spacing={2}>
    <Grid item xs>
      <Grid container wrap="nowrap">
        <ListItemAvatar>
          <Styled.Avatar
            src={cartProduct.product.image}
            variant="square"
            style={{ objectFit: 'contain' }}
          />
        </ListItemAvatar>
        <div>
          <ListItemText disableTypography>
            <Styled.WrapperProductTitle>
              <Typography noWrap>{cartProduct.product.title}</Typography>
              <Typography variant="caption" noWrap>${cartProduct.product.price}</Typography>
            </Styled.WrapperProductTitle>
          </ListItemText>
        </div>
      </Grid>
    </Grid>

    <Grid item>
      <Counter
        counter={cartProduct.quantity}
        onAdd={() => onAdd(cartProduct.product)}
        onRemove={() => onRemove(cartProduct.product)}
      />
    </Grid>
  </Grid>
);

ProductCartItem.propTypes = propTypes;

export default ProductCartItem;
