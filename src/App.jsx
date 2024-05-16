import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";
import AddItem from "./AddItem";
import UpdateItem from "./UpdateItem"; 

function App() {
  const [items, setItems] = useState([]);
  const [update, setUpdate] = useState(-1);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      setItems(response.data);
    });
  }, []);

  const addItem = (newItem) => {
    setItems([...items, newItem]);
  };

  function handleSubmit(e) {
    e.preventDefault();
    const title = e.target.elements.title.value;
    const price = e.target.elements.price.value;
    const newList = items.map((item) =>
      item.id === update ? { ...item, title: title, price: price } : item
    );
    setItems(newList);
    setUpdate(-1);
  }

  function handleEdit(id) {
    setUpdate(id);
  }

  return (
    <div className="App">
      <h1>React Dashboard</h1>
      <AddItem onAdd={addItem} />
      <form onSubmit={handleSubmit}>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Image</th>
              <th>Title</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) =>
              update === item.id ? (
                <UpdateItem
                  key={item.id}
                  item={item}
                  list={items}
                  setlist={setItems}
                />
              ) : (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>
                    <img
                      src={item.image}
                      alt={item.title}
                      height={100}
                      width={100}
                    />
                  </td>
                  <td>{item.title}</td>
                  <td>{item.price}$</td>
                  <td>
                    <button className="delete" type="button" onClick={()=>handleDelete(item.id)}>Delete</button>
                    <button
                      className="update"
                      onClick={() => handleEdit(item.id)}
                    >
                      Update
                    </button>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </form>
    </div>
  );
  function handleDelete(id){
    const newList=items.filter((item)=>item.id !== id)
    setItems(newList)
  }
}

export default App;
