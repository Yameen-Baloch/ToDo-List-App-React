import React, { useState } from "react";
import ToDoList from "./ToDoList";


const App = () =>{

const [listItem, setListItem] = useState("");
const [Item, setItem] = useState([]);

const ItemEvent = (e) =>{
   setListItem(e.target.value);
   e.preventDefault();

}

const addItem = () =>{
   setItem((oldItem) =>{
     return [...oldItem, listItem];
   })
   setListItem('')
}

const deleteItem = (id) =>{
 // console.log("Deleted")
  setItem((oldItem) =>{
    return oldItem.filter((arrEl, index) =>{
      return index !==id;
    })
  })

}

  return(
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>ToDO List</h1>
          <br />

          <input type= 'text' placeholder="Add an Item"
             value = {listItem} onChange={ItemEvent} />
          <button disabled = {!listItem} onClick={addItem}> + </button>

          <ol>
            {
              Item.map((item, index) =>{
                return <ToDoList
                 items = {item}
                 key = {index}
                 id = {index}
                 onSelect = {deleteItem} />
              })
            }
          </ol>
        </div>
      </div>
    </>
  )
}

export default App;