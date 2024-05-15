import axios from 'axios';
import { useEffect,useState } from 'react';
import './App.css';
import AddItem from './AddItem';

function App() {
  const [items, setItems] = useState([])
  useEffect(()=>{ axios.get('https://fakestoreapi.com/products')
  .then(response => {
    setItems(response.data);
  })},


[]
);
const addItem = (newItem) => {
  setItems([...items, newItem]);
};
  return (
    <div className="App">
      <h1>React Dashboard</h1>
      <AddItem onAdd={addItem}/>
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
          {items.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td><img src={item.image} alt={item.title} height={100} width={100} /></td>
              <td>{item.title}</td>
              <td>${item.price}</td>
              <td><button className='delete'>Delete</button>
              <button className='update'>Update</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
   
    </div>
  );
}

export default App;


