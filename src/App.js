import React, { useState } from "react";
import './styles.css'

const INITIAL_LIST = [
  { id: crypto.randomUUID(), name: "Domates", price: 55.0 },
  { id: crypto.randomUUID(), name: "Marul", price: 25.5 },
  { id: crypto.randomUUID(), name: "Ekmek", price: 10.99 },
];

function App() {
  return <ItemValueList />;
}

const ItemValueList = () => {
  // KODUNUZ BURAYA GELECEK
  const [list, setList] = useState(INITIAL_LIST);
  const [newProduct, setNewProduct] = useState("");
  const [price, setPrice] = useState("");

  const handleAddItem=()=>{
    if(newProduct.length>0 && price.length>0){
      const newitem={
        id:crypto.randomUUID(),
        name:newProduct,
        price:parseFloat(price).toFixed(2)
      }
      setList([...list,newitem])
      setNewProduct("")
      setPrice("")
    }
  }
  const handleRemoveItem = (id) => {
  const newItems=list.filter(item=>item.id !== id)
  setList(newItems)
};

  return (
    <div className="App">
      <h1>Ürün Listesi</h1>
      <form onSubmit={(e)=>e.preventDefault()}>
        <input
          value={newProduct}
          type="text"
          className="border border-black"
          placeholder="ürün giriniz"
          onChange={(e) => setNewProduct(e.target.value)}
        />
        <input
          value={price}
          type="number"
          className="border border-black"
          placeholder="Fiyat giriniz"
          onChange={(e) => setPrice(e.target.value)}
        />
        <button className="border border-black  w-40 bg-gray-200 " onClick={handleAddItem}>Gönder</button>
      </form>
      <div>

      <ul>
        {list.map(item=>(
        

          <li key={item.id}>
          {item.name}<span className="price">${item.price}</span>
           <button onClick={()=>handleRemoveItem(item.id)}> ❌</button>
       </li>
   
        ))}
      </ul>
        </div>
    </div>
  );
};

export default App;
