import React  from "react";
import DeleteIcon from '@mui/icons-material/Delete';
//import EditNoteIcon from '@mui/icons-material/EditNote';
import EditIcon from '@mui/icons-material/Edit';
import Checkbox from '@mui/material/Checkbox';
import './App.css';
import { useState } from "react";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

const Todo=(props)=>{
    const [isBox,setBox] = useState(false);
    const onBox=()=>{
        setBox(!isBox)
    }

    return (
        <>
            <div className="sameLine">
                <span onClick={onBox}><Checkbox /></span>
                    
                <li className="list_items" style={ {textDecoration: isBox ? "line-through" : "none"}}>{props.text}</li>
                {/*<div>
                    <button className="btn1 btn2" onClick={()=>{props.onSelect(props.id)}}> <DeleteIcon /> </button>
                    <button className="btn1 " onClick={()=>{props.onEdit(props.idd)}}> <EditIcon disabled /> </button> 
                </div>*/}
                <ButtonGroup variant="contained"  aria-label="outlined primary button group">
                    <Button className="space" onClick={()=>{props.onSelect(props.id)}}><DeleteIcon /></Button>
                    <Button className="space" onClick={()=>{props.onEdit(props.idd)}}><EditIcon disabled /></Button>    
                </ButtonGroup>    
            </div>
        </>
        
    ) ;
}
export default Todo;  