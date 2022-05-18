import React from 'react';

const FormSec = () => {

    return (
        <form className='w-full flex flex-col gap-5'>
            <input
                name='name'
                type="text"
                placeholder="Task name"
                class="input input-bordered input-primary w-full h-12" />
            <textarea
                name='description'
                type="text"
                placeholder="Description"
                class="input input-bordered input-primary w-full h-24" />
            <button class="btn btn-block btn-primary">Buy Now</button>
        </form>
    );
};

export default FormSec;