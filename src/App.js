import React, { useState, useEffect } from 'react'
import getItemTotalCount from './utilities/getItemTotalCount'
import ListFormComponent from './components/ListFormComponent'
import ListComponent from './components/ListComponent'
import TotalComponent from './components/TotalComponent'
import EmptyListComponent from './components/EmptyListComponent'
import "./styles.css"
export default function App() {

  const key = "items"
  const [items, setItems] = useState([]);
  const [showEmptyList, setShowEmptyList] = useState(true)

  useEffect(() => {
    const savedItems = JSON.parse(localStorage.getItem(key)) || [];
    setShowEmptyList(savedItems.length==0);
    setItems(savedItems);
  }, [])

  useEffect(() => {
    saveItems();
  }, [items])
  

  const total = getItemTotalCount(items);

  const createItem = (item) => {
    item.id = items.length + 1;
    setItems([...items, item]);
  }

  const updateItem = (newItem) => {
    let currentItems = [...items];
    let item = currentItems.find(item => item.id == newItem.id);
    Object.assign(item, newItem);
    setItems(currentItems);
  }

  const removeItem = (id) => {
    setItems(items.filter(item => item.id != id));

  }

  const saveItems = ()=>{
    localStorage.setItem(key, JSON.stringify(items));
  }

  const showEmptyListMessage = (show)=>{
    if(showEmptyList == show) return;

    setShowEmptyList(show);
  }

  return (
    <div className="list-container">
      <ListFormComponent createItem={createItem} />
      {showEmptyList && <EmptyListComponent />}
      <ListComponent listItems={items} updateItem={updateItem} removeItem={removeItem} showEmptyListMessage={showEmptyListMessage} />
      {!showEmptyList && <TotalComponent totalCount={total}/>}
    </div>
  )
}
