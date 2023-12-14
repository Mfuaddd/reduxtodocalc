import { configureStore } from '@reduxjs/toolkit'
import todoReducer from "./redux/todoSlider"
import calculatorReducer from './redux/calculatorSlider'

export default configureStore({
  reducer: {
    todo: todoReducer,
    calculator:calculatorReducer
  },
})