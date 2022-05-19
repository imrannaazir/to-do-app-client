import axios from 'axios';
import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase.init';
import Task from './Task';

const Tasks = ({ tasks, setTasks }) => {
    const [user] = useAuthState(auth);

    const email = user?.email;
    useEffect(() => {
        (async function () {
            const { data } = await axios.get(`https://gentle-shore-14514.herokuapp.com/tasks?email=${email}`)
            setTasks(data);
        })()
    }, [email, setTasks])


    const handleDelete = async (id) => {
        const { data } = await axios.delete(`https://gentle-shore-14514.herokuapp.com/tasks/${id}`)
        console.log(data);
        const restTask = tasks.filter(task => task._id !== id)
        setTasks(restTask)
    }
    return (
        <div class="overflow-x-auto w-full">
            {tasks.length === 0 ? <p className='text-secondary text-lg'>You have no remaining Task!</p>
                :
                <table class="table table-zebra w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Task</th>
                            <th>Description</th>
                            <th >Complete</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            tasks.map((task, index) => <Task task={task} index={index} handleDelete={handleDelete} />

                            )
                        }

                    </tbody>
                </table>}
        </div>
    );
};

export default Tasks;