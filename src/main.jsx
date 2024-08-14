import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import AddItemModal from "./modals/AddItemModal.jsx";
import store from "./store/itemStore.js";
import { Provider } from "react-redux";
import ProductList from "./ProductList.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <ProductList />
      <AddItemModal />
    </Provider>
  </StrictMode>
);
