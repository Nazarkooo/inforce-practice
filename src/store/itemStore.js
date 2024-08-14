import { legacy_createStore as createStore } from "redux";

import { ADD_PRODUCT, REMOVE_PRODUCT, EDIT_PRODUCT } from "./actions";

const defaultState = {
  products: [{ id: 0, name: "xuy", quantity: 50 }],
};

const productsListReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return { ...state, products: [...state.products, action.payload] };

    case REMOVE_PRODUCT:
      return {
        ...state,
        products: state.products.filter((el) => el.id !== action.payload),
      };

    case EDIT_PRODUCT:
      return {
        ...state,
        products: state.products.map((el) => {
          if (el.id === action.payload.id) {
            el.name = action.payload.productName;
            el.quantity = action.payload.productQuantity;
          }
          return el;
        }),
      };

    default:
      return state;
  }
};

const store = createStore(productsListReducer);

export default store;
