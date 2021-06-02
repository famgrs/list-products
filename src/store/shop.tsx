import { action, Action } from "easy-peasy";
import { addProductToCart, removeProductToCart, getTotalCart } from "./helper";

export interface Product {
  id: number,
  title: String,
  image: String,
  price: number,
  description: String
};

export interface CartProduct {
  productId: number,
  product: Product,
  quantity: number
};

export interface ShopModel {
  cart: CartProduct[],
  total: number,
  addToCart: Action<ShopModel, Product>,
  removeFromCart: Action<ShopModel, number>
};

const initialState = {
  cart: [],
  total: 0
};

const shopModel: ShopModel = {
  ...initialState,
  addToCart: action((state, product) => {
    const newCart = addProductToCart(state.cart, product)
    const total = getTotalCart(newCart)

    state.cart = newCart
    state.total = total
  }),
  removeFromCart: action((state, productId) => {
    const newCart = removeProductToCart(state.cart, productId)
    const total = getTotalCart(newCart)

    state.cart = newCart
    state.total = total
  })
};

export default shopModel;
