import React from 'react'
import Button from './Button'

const Task = ({ task }) => {
  return (
      <div className="task">
          <h3>{task.title}
          <Button bg="red" text="Delete" pd="5px 10px"/>
          </h3>
          <p>{task.date}</p>
      </div>
  )
}

export default Task