export const addItem= (data)=>{
    return{
        type: "ADD-ITEM",
        payload:{
            id: new Date().getTime().toString(),
            data:data
        }
    }
}

export const deleteItem= (id)=>{
    return{
        type: "DELETE-ITEM",
        id
    }
}
export const removeItem= ()=>{
    return{
        type: "REMOVE-ALL"
    }
}