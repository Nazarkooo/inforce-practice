import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../store/actions";

import { v4 as uuidv4 } from "uuid";

import "../App.scss";

export default function AddItemModal() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const [productName, setProductName] = useState("");
  const [productQuantity, setProductQuantity] = useState("");

  const dispatch = useDispatch();

  const confirmHanlder = () => {
    if (productName && productQuantity) {
      dispatch(
        addProduct({
          id: uuidv4(),
          productName,
          productQuantity: parseInt(productQuantity, 10),
        })
      );
      setProductName("");
      setProductQuantity("");
      setIsAddModalOpen(false);
    } else {
      alert("Please enter all product details.");
    }
  };

  return (
    <div>
      <button
        className="add-item-list-btn"
        onClick={() => setIsAddModalOpen(true)}
      >
        Add item to list
      </button>

      {isAddModalOpen && (
        <div className="add-item-modal">
          <div className="modal-content-wrapper">
            <input
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              placeholder="Product name"
              type="text"
            />

            <input
              value={productQuantity}
              onChange={(e) => setProductQuantity(e.target.value)}
              placeholder="Quantity"
              type="number"
            />
          </div>

          <div className="button-wrapper">
            <button onClick={confirmHanlder}>Confirm</button>
            <button onClick={() => setIsAddModalOpen(false)}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
}
