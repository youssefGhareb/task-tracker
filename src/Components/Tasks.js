import Task from "./Task"

const Tasks = ({ tasks , onDelete, onDbClick }) => {

    return (
        <>
            {tasks.map((task) => (
                <Task key={task.id} task={task} onDelete={onDelete} onDbClick={onDbClick} />
            ))}
        </>
    )
}

export default Tasks