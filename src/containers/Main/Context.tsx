import { createContext } from 'react'
import CartProduct from 'models/cartProduct';
import Product from 'models/product';

export interface ShopContextInterface {
  cart: CartProduct[],
  totalCart: number,
  onAddProduct: (product: Product) => void,
  onRemoveProduct: (product: Product) => void
}

const ShopContext = createContext<ShopContextInterface>({
  cart: [],
  totalCart: 0,
  onAddProduct: (p: Product) => {},
  onRemoveProduct: (p: Product) => {}
})

export default ShopContext
