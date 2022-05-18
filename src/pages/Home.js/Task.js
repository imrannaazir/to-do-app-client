import React, { useState } from 'react';

const Task = ({ task, handleDelete, index }) => {
    const [done, setDone] = useState(false);
    return (
        <tr>
            <th>{index + 1}</th>
            <td className={done && 'line-through'}>{task.name}</td>
            <td className={done && 'line-through'}>{task.description}</td>
            <td
                className='cursor-pointer'
                onClick={() => setDone(!done)}>✅</td>
            <td
                className='cursor-pointer'
                onClick={() => handleDelete(task._id)}>❌</td>
        </tr>
    );
};

export default Task;