import React from "react";

import { removeProduct, editProduct } from "./store/actions";

import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

import { useDispatch, useSelector } from "react-redux";

export default function ProductList() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  const deleteProductHandler = (id) => {
    if (window.confirm("Are you sure to delete this product?")) {
      dispatch(removeProduct(id));
    }
  };

  const editProductHandler = (id) => {
    const newProductName = window.prompt("Entert new name");
    const newProductQuantity = window.prompt("Enter new quantity");

    dispatch(
      editProduct({
        id: id,
        productName: newProductName,
        productQuantity: newProductQuantity,
      })
    );
  };

  return (
    <div>
      {products.length === 0 ? (
        <div>No products in list</div>
      ) : (
        <div>
          {products.map(({ id, name, quantity }) => (
            <div className="product-list-wrapper" key={id}>
              <div>
                {name} - {quantity}
              </div>
              <button
                className="delete-product-btn"
                onClick={() => deleteProductHandler(id)}
              >
                <MdDelete />
              </button>
              <button
                className="edit-product-btn"
                onClick={() => editProductHandler(id)}
              >
                <FaEdit />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
