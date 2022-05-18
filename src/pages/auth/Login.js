import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div class="hero min-h-screen bg-base-200">

            <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form class="card-body">

                    {/* email field */}
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Email</span>
                        </label>
                        <input type="text" placeholder="email" class="input input-bordered" />
                    </div>

                    {/* password field */}
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Password</span>
                        </label>
                        <input type="text" placeholder="password" class="input input-bordered" />
                    </div>

                    {/* form submit button */}
                    <div class="form-control mt-6">
                        <button class="btn btn-primary">Login</button>
                    </div>
                    <span className='text-sm text-secondary'>Haven't an account? <Link className='text-info' to='/signup'>Sign up</Link></span>
                    <div class="divider w-[80%] mx-auto">OR</div>
                    <div class="form-control">
                        <button class="btn btn-primary btn-outline ">Continue With Google</button>
                    </div>
                </form>

            </div>
        </div>

    );
};

export default Login;