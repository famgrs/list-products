import { createContext } from 'react'
import CartProduct from 'models/cartProduct';
import Product from 'models/product';

export interface ShopContextInterface {
  cart: CartProduct[],
  onAddProduct: (product: Product) => void,
  onRemoveProduct: (product: Product) => void
}

const ShopContext = createContext<ShopContextInterface | null>(null)

export default ShopContext
