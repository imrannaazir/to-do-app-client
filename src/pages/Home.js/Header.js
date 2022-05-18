import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase.init';
import userIMG from '../../images/user.jpg'
const Header = () => {
    const [user] = useAuthState(auth)
    return (
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
    );
};

export default Header;