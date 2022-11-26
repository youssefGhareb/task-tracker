import React from 'react'
import { useState } from 'react'

const AddTask = ({addTask}) => {
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [reminder, setReminder] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();
        console.log('On Submit')

        addTask({ title, date, reminder })

        setTitle('')
        setDate('')
        setReminder(false)
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Task Title</label>
                <input type="text" placeholder="Doctor's Appointment" value={title} onChange={(e) => setTitle(e.currentTarget.value)} />
            </div>
            <div className='form-control'>
                <label>Task Day</label>
                <input type="text" placeholder="13th february at 7:30" value={date} onChange={(e) => setDate(e.currentTarget.value)} />
            </div>
            <div className='form-control form-control-check'>
                <label>Reminder</label>
                <input type="checkbox" placeholder="Doctor's Appointment" value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} />
            </div>
            <input type="submit" value="Add Task" className='btn-block' />
        </form>
    )
}

export default AddTask