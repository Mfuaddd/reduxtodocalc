import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    value: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.value.push(action.payload);
    },
    removeTodo: (state, action) => {
      state.value = state.value.filter(x=>x.id !== action.payload);
    },
    editTodo: (state,action) =>{
      state.value = state.value.map(x=>{
        if(x.id === action.payload.id){
          return {text:action.payload.edit,id:x.id}
        }
        return x
      })
    },
  },
});

export const { addTodo, removeTodo, editTodo } = todoSlice.actions;

export default todoSlice.reducer;
