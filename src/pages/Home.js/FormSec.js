import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase.init';

const FormSec = () => {
    const [user] = useAuthState(auth)
    const handleSubmit = async e => {
        e.preventDefault();
        const newTask = {
            name: e.target.name?.value,
            description: e.target.description?.value,
            email: user?.email
        }
        const { data } = await axios.post('http://localhost:5000/tasks', newTask)
        console.log(data);

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
            <button type='submit' class="btn btn-block btn-primary">Buy Now</button>
        </form>
    );
};

export default FormSec;