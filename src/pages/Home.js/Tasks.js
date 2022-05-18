import { async } from '@firebase/util';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase.init';

const Tasks = () => {
    const [user] = useAuthState(auth);
    const email = user?.email;
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        (async function () {
            const { data } = await axios.get(`http://localhost:5000/tasks?email=${email}`)
            setTasks(data);
        })()
    }, [email])


    const handleDelete = async (id) => {
        const { data } = await axios.delete(`http://localhost:5000/tasks/${id}`)
        console.log(data);
        const restTask = tasks.filter(task => task._id !== id)
        setTasks(restTask)
    }
    return (
        <div class="overflow-x-auto w-full">
            <table class="table table-zebra w-full">
                {/* <!-- head --> */}
                <thead>
                    <tr>
                        <th>SL</th>
                        <th>Task</th>
                        <th>Description</th>
                        <th>Complete</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        tasks.map((task, index) =>
                            <tr>
                                <th>{index + 1}</th>
                                <td>{task.name}</td>
                                <td>{task.description}</td>
                                <td>✅</td>
                                <td
                                    className='cursor-pointer'
                                    onClick={() => handleDelete(task._id)}>❌</td>
                            </tr>
                        )
                    }

                </tbody>
            </table>
        </div>
    );
};

export default Tasks;