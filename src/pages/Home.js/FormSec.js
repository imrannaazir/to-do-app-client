import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase.init';

const FormSec = ({ setTasks }) => {
    const [user] = useAuthState(auth)
    const handleSubmit = async e => {
        e.preventDefault();
        const email = user?.email
        const newTask = {
            name: e.target.name?.value,
            description: e.target.description?.value,
            email: email,
            complete: false
        }
        await axios.post('https://gentle-shore-14514.herokuapp.com/tasks', newTask)
            .then(async res => {

                const { data } = await axios.get(`https://gentle-shore-14514.herokuapp.com/tasks?email=${user?.email}`)
                setTasks(data);
            })

        e.target.reset();

    }
    return (
        <form
            onSubmit={handleSubmit}
            className='w-full flex flex-col gap-5'>
            <input
                name='name'
                required
                type="text"
                placeholder="Task name"
                class="input input-bordered input-primary w-full h-12"
            />
            <textarea
                name='description'
                type="text"
                required
                placeholder="Description"
                class="input input-bordered input-primary w-full h-24"
            />
            <button type='submit' class="btn btn-block btn-primary">Add Task</button>
        </form>
    );
};

export default FormSec;