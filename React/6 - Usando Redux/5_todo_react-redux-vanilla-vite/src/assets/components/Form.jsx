import { TaskItem } from "./TaskItem"
import css from '../components_css/Form.css'
import { updateTasks } from '../redux/actions/tasksActions'
import { useDispatch, useSelector } from "react-redux";

export default function Form() {
  const tasks = useSelector(state=>state.tasksReducer)
  const dispatch = useDispatch()

  function addTask(e) {
      e.preventDefault()
      const inputTask = document.querySelector('.input').value
      dispatch(updateTasks([...tasks, new TaskItem(inputTask)]))
      document.querySelector('.input').value = '' 
      console.log(tasks)
    }

  return (
    <form>
      <h1 className='title'>To do</h1>     
      <div className='input-div'>
          <input className='input' type='text' ></input>
          <button onClick={addTask}>Add</button>
      </div>
    </form>
  )
}