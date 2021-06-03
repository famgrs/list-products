import Product from './product'

interface CartProductModel {
  productId: number,
  product: Product,
  quantity: number
};

export default CartProductModel;