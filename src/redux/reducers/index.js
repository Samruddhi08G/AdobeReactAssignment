import { combineReducers } from "redux";
import { productsReducer, selectedProductsReducer, addProductReducer  } from "./productsReducer";
const reducers = combineReducers({
  allProducts: productsReducer,
  product: selectedProductsReducer,
  addCart :addProductReducer,

});
export default reducers;
