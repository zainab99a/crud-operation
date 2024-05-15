
import React, { useState } from "react";

function AddItem({ onAdd }) {
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (id !== "" && title !== "" && price !== "") {
      // Construct the new item object
      const newItem = {
        id: id,
        title: title,
        price: price
      };
      // Call the onAdd function passed from the parent component
      onAdd(newItem);
      // Reset the form fields
      setId("");
      setTitle("");
      setPrice("");
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddItem;
