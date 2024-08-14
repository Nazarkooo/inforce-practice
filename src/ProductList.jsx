import React from "react";

import { removeProduct } from "./store/actions";

import { MdDelete } from "react-icons/md";

import { useDispatch, useSelector } from "react-redux";

export default function ProductList() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  const deleteProductHandler = (id) => {
    if (window.confirm("Are you sure to delete this product?")) {
      dispatch(removeProduct(id));
    }
  };

  return (
    <div>
      <div>
        {products.length === 0 ? (
          <div>No products in list</div>
        ) : (
          <div>
            {products.map((product) => (
              <div className="product-list-wrapper" key={product.id}>
                <div>
                  {product.productName} - {product.productQuantity}
                </div>
                <button
                  className="delete-product-btn"
                  onClick={() => deleteProductHandler(product.id)}
                >
                  <MdDelete />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
