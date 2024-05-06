import {createSlice} from "@reduxjs/toolkit";

const todoSlice=createSlice({
    name:"todos",
    initialState:[{id:1,name:"ram"}],
    reducers:({
        addTodo:(state,action)=>{
            return [...state,action.payload]
        },
        removeTodo:(state,action)=>{
            return state.filter(item=>item.id !==action.payload.id)
        }
    })
})

export const {addTodo,removeTodo}= todoSlice.actions;
export default todoSlice.reducer