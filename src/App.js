
import React,{ useState } from "react";
import AddCircleSharpIcon from '@mui/icons-material/AddCircleSharp';
//import ChecklistSharpIcon from '@mui/icons-material/ChecklistSharp';
import EditNoteIcon from '@mui/icons-material/EditNote';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
/*import logo from './logo.svg';*/
import Button from '@mui/material/Button';
import './App.css';
import Todo from './Todo';
import ChackFirebase from "./firebaseSetup/ChackFirebase";
import Auth from "./firebaseSetup/Auth";
import ReadWritecloudFirestore from "./firebaseSetup/ReadWritecloudFirestore";
function App() {
  const [listItems,newlistItems]= useState("");
  const [items,newitems] =useState([]);
  const [toggles,newToggles]=useState(true);
  const [editItems,newEditItem] = useState(null);
  const itemName=(event)=>{
    newlistItems(event.target.value);
  };
  const itemAdd=()=>{
    if(!listItems){
      alert("data")
    }else if(!toggles && listItems){
      newitems(
        items.map((ele)=>{
            if(ele.id===editItems){
              return{...ele, name:listItems}
            }

            return ele
        })
      )
      newToggles(true)
      newlistItems("")
      newEditItem(null)

    }
    else{
      const allListItems={id: new Date().getTime().toString(), name:listItems }
      newitems((oldValue)=>{
        return [...oldValue,allListItems]
      });
    }
    
    newlistItems(" ");


  };
  const itemDelete=(index)=>{
    
    newitems((oldValue)=>{
      return oldValue.filter((items)=>{
        return index!==items.id;
      });
    })
    
  };
  const itemEdit=(idd)=>{
    console.log("event.target.value");
    let newEditItems= items.find((ele)=>{
      return ele.id === idd
    })
    console.log(newEditItems);
    newToggles(false)
    newlistItems(newEditItems.name)
    newEditItem(idd)



  }
  const clearAll=()=>{
    newitems([])
  }
  return (
    <>
      <div className="main">
        
          <br/>
            <div className="hadeing">
              <FormatListBulletedIcon/>
              <h1 className="h">TO DO LIST WEBSITE</h1>
            </div>
        <div className="todo_con">    
            <input type="text" value={listItems} placeholder="Add a item" onChange={itemName} />
            {
              toggles ? <button className="btn btn1" onClick={itemAdd}> <AddCircleSharpIcon/> </button>  : 
              <button className="btn1 btn" onClick={itemAdd}> <EditNoteIcon/> </button>
            }
            
            <ol className="list">
              {/*<li className="list_items">{listItems}</li>*/}
              
              {items.map((itemsValue ,index)=>{
                return <Todo
                  text={itemsValue.name}
                  id={itemsValue.id}
                  key={itemsValue.id}
                  onSelect={itemDelete}
                  onEdit={itemEdit}
                  
                  idd={itemsValue.id}
                />
              })}
            </ol>
          <br/>
        </div>
        <Button variant="contained" onClick={clearAll}>Clear All</Button>
        {<ChackFirebase/>}
        <Auth/>
        <ReadWritecloudFirestore/>
      </div>
    </>
  );
}


export default App;
