import { createStore } from "easy-peasy";
import shop from './shop';
import ShopModel from "models/shop";

export interface Store {
  shop: ShopModel
}

const store: Store = {
  shop
}

export default createStore(store)
