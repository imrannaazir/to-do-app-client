import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import React from 'react';
import { auth } from '../../firebase.init';
import userIMG from '../../images/user.jpg'
import FormSec from './FormSec';

const Home = () => {
    const [user] = useAuthState(auth)
    return (
        <div className='w-full flex justify-center items-center min-h-screen bg-base-300'>
            <div class="card lg:w-[700px]   bg-base-100 shadow-xl">
                {/* header */}
                <div className='w-[80%] mt-4 mx-auto flex justify-between items-center'>
                    <p className='card-title'>Task Trucker</p>
                    <div class="dropdown dropdown-hover">
                        <label tabindex="0" > <div class="avatar online">
                            <div class="w-12 rounded-full">
                                <img src={user.photoURL || userIMG} alt='' />
                            </div>
                        </div></label>
                        <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box ">
                            <button className='btn btn-secondary btn-xs' onClick={() => signOut(auth)}>Logout</button>
                        </ul>
                    </div>
                </div>



                <div class="card-body items-center text-center">

                    <FormSec />
                    <div class="divider"></div>
                </div>
            </div>
        </div>
    );
};

export default Home; <p>Home</p>