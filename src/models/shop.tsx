import { Action } from "easy-peasy";
import CartProduct from './cartProduct'
import Product from './product'

interface ShopModel {
  cart: CartProduct[],
  total: number,
  addToCart?: Action<ShopModel, Product>,
  removeFromCart?: Action<ShopModel, number>
};

export default ShopModel;
