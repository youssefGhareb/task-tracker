import React from 'react'
import { AiOutlineDelete } from 'react-icons/ai'

const Task = ({ task, onDelete, onDbClick }) => {
  var reminderClass
  task.reminder ? reminderClass = "reminder" : reminderClass = ""
  return (
    <div className={`task ${reminderClass}`} onDoubleClick={() => onDbClick(task.id)}>
      <h3>
        {task.title}
        <AiOutlineDelete className='delete-icon' onClick={() => onDelete(task.id)} />
      </h3>
      <p>{task.date}</p>
    </div>
  )
}

export default Task