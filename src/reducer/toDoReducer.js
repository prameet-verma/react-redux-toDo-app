const initialData={
    list:[]
}
const toDoReducer=(state=initialData,action)=>{

    switch(action.type){
        case "ADD-ITEM":
            const {id, data}= action.payload;
            return{
                ...state,
                list:[
                    ...state.list,
                    {
                        id:id,
                        data:data

                    }
                ]
            }
            case "DELETE-ITEM":
                const newList= state.list.filter((ele)=> ele.id !== action.id)
                return{
                    ...state,
                    list: newList
                }
        default: return state;
    }
}
export default toDoReducer;