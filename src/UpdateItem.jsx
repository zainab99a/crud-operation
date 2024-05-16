import React from "react";

function UpdateItem({ item, list, setlist }) {
  function handleInput(e) {
    const name = e.target.name;
    const value = e.target.value;
    const newList = list.map((li) =>
      li.id === item.id ? { ...li, [name]: value } : li
    );
    setlist(newList);
  }

  return (
    <tr>
      <td>{item.id}</td>
      <td>
        <img src={item.image} alt="" height={100} width={100} />
      </td>
      <td>
        <input
          type="text"
          name="title"
          value={item.title}
          onChange={handleInput}
        />
      </td>
      <td>
        <input type="text"
         name="price"
          value={item.price}
           onChange={handleInput} />
      </td>
      <td>
        <button className="update" type="submit">
          Update
        </button>
      </td>
    </tr>
  );
}

export default UpdateItem;
