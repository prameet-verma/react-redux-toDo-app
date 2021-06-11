import React,{useState, useEffect} from 'react'
import "./Todo.css"
import {addItem, deleteItem, removeItem} from "../actions/index"
import {useSelector,useDispatch} from "react-redux"
import "./Todo.css"

function Todo() {
    const [inputData, setInputData]= useState("");
    const dispatch = useDispatch();
    const list= useSelector((state)=> state.toDoReducer.list);
    return (
        <>
        <div className="main-div">
            <div className="child-div">
              <figure>
                <figcaption> Add Your LIST Here✌️ </figcaption>
              </figure>
              <div className="addItems">
                  <input type="text" placeholder="Add items..✍🏻" 
                    value={inputData}
                    onChange={(event)=> setInputData(event.target.value)}
                  />
                  <i className="fa fa-plus add-btn"  
                    onClick={()=> dispatch(addItem(inputData), setInputData(''))}                  
                  ></i>
              </div>
              <div className="showItems">
                  {
                      list.map((ele)=>{
                          return(
                            <div className="eachItem" key={ele.id}>
                            <h3>{ele.data}</h3>
                            <i className="far fa-trash-alt add-btn"   title="Delete Item"
                        onClick={()=> dispatch(deleteItem(ele.id))}                  
                      ></i>
                        </div>
                          )
                        
                      })
                  }
                    
              </div>
            </div>
        </div>
      </>
    )
}

export default Todo
