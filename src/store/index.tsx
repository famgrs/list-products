import { createStore } from "easy-peasy";
import shop, { ShopModel } from './shop';

export interface Store {
  shop: ShopModel
}

const store: Store = {
  shop
}

export default createStore(store)
