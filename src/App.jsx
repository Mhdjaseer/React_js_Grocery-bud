import { useState } from "react";
import Form from "./Form";
import { nanoid } from "nanoid";
import Items from "./Items";



const setLocalStorage=(items)=>{
  localStorage.setItem('list',JSON.stringify(items))
};
const defaultList=JSON.parse(localStorage.getItem('list') ||'[]');

const App = () => {
  const [items,setItems]=useState(defaultList)

  const addItem=(itemName)=>{
    const newItem={
      name:itemName,
      completed:false,
      id:nanoid(),

    }
    const newItems=[...items,newItem]
    setItems(newItems)
    setLocalStorage(newItems)
  }
  const removeItem=(itemId)=>{
    const newItem=items.filter((item)=>item.id !==itemId)
    setItems(newItem)
    setLocalStorage(newItem)
  }

  const editItem=(itemId)=>{
    const newItem=items.map((item)=>{
      if(item.id==itemId){
        const newItem={...item,completed:!item.completed }
      }
      return item
    })
    setItems(newItem)
    setLocalStorage(newItem)
  }
  return (
  <section className="section-center">
    <Form addItem={addItem} />
    <Items items={items} removeItem={removeItem} />
    
  </section>
  )
};

export default App;
