import { combineReducers } from "redux";

import cartReducer from "./cart";

const RootReducer = combineReducers({
  cart: cartReducer,
});

export default RootReducer;
export type RootState = ReturnType<typeof RootReducer>
