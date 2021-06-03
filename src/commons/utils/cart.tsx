import CartProduct from 'models/cartProduct'
import Product from 'models/product'

export const addProductToCart = (cart: CartProduct[], product: Product): CartProduct[] => {
  const alreadyInCart = cart.findIndex((it: CartProduct) => it.productId === product.id)

  if (alreadyInCart > -1) {
    const { quantity } = cart[alreadyInCart]
    cart[alreadyInCart] = { ...cart[alreadyInCart], quantity: quantity + 1 }
  } else {
    const { id } = product
    cart.push({ productId: id, product, quantity: 1 })
  }

  return cart
}

export const removeProductFromCart = (cart: CartProduct[], productId: number): CartProduct[] => {
  const inCart = cart.findIndex((it: CartProduct) => it.productId === productId)

  if (inCart === -1) return cart

  if (cart[inCart].quantity === 1) {
    return cart.filter((_, i) => i !== inCart)
  }

  cart[inCart].quantity--
  return cart
}

export const getTotalCart = (cart: CartProduct[]): number =>
  cart.reduce((sum, prd) => sum + (prd.quantity * prd.product.price), 0)
