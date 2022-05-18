

import React from 'react';


import FormSec from './FormSec';
import Header from './Header';

const Home = () => {

    return (
        <div className='w-full flex justify-center items-center min-h-screen bg-base-300'>
            <div class="card lg:w-[700px]   bg-base-100 shadow-xl">
                {/* header */}
                <Header />



                <div class="card-body items-center text-center">

                    <FormSec />
                    <div class="divider"></div>
                </div>
            </div>
        </div>
    );
};

export default Home; <p>Home</p>