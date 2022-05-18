import { signOut } from 'firebase/auth';
import React from 'react';
import { auth } from '../../firebase.init';

const Home = () => {
    return (
        <div>
            <p>Home</p>
            <button
                onClick={() => signOut(auth)}
                className='btn btn-secondary'>Logout</button>
        </div>
    );
};

export default Home; <p>Home</p>