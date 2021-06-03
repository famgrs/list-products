import { action } from "easy-peasy";
import { addProductToCart, removeProductFromCart, getTotalCart } from "commons/utils/cart";
import ShopModel from "models/shop";

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
    const newCart = removeProductFromCart(state.cart, productId)
    const total = getTotalCart(newCart)

    state.cart = newCart
    state.total = total
  })
};

export default shopModel;
