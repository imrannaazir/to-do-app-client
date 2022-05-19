import axios from 'axios';
import React, { useState } from 'react';

const Task = ({ task, handleDelete, index }) => {
    const [done, setDone] = useState(task.complete);
    const handleDone = async id => {
        setDone(!done)
        let { complete, ...rest } = task
        const newComplete = !complete
        const updateTask = {
            rest, complete: newComplete

        }
        console.log(updateTask);
        const { data } = await axios.put(`https://gentle-shore-14514.herokuapp.com/tasks/${id}`, updateTask)
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td className={done && 'line-through'}>{task.name}</td>
            <td className={done && 'line-through'}>{task.description}</td>
            <td
                className='cursor-pointer'
                onClick={() => handleDone(task._id)}>✅</td>
            <td
                className='cursor-pointer'
                onClick={() => handleDelete(task._id)}>❌</td>
        </tr>
    );
};

export default Task;