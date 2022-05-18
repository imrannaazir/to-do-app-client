import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";


const Login = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
    }
    return (
        <div class="hero min-h-screen bg-base-200">

            <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    class="card-body">

                    {/* email field */}
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Email</span>
                        </label>
                        <input
                            {...register("email", {
                                required: {
                                    value: true,
                                    message: 'email is required'
                                },
                                pattern: {
                                    value: /^[^@]+@[^@]+\.[^@]+$/,
                                    message: 'invalid email'
                                }
                            })}
                            type="text"
                            placeholder="email"
                            class="input input-bordered" />
                        <label class="label">

                            {errors.email?.type === 'required' && <span class="label-text-alt text-error">{errors.email.message}</span>}
                            {errors.email?.type === 'pattern' && <span class="label-text-alt text-error">{errors.email.message}</span>}
                        </label>
                    </div>

                    {/* password field */}
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Password</span>
                        </label>
                        <input
                            {...register("password", {
                                required: {
                                    value: true,
                                    message: 'password is required'
                                },
                                minLength: {
                                    value: 6,
                                    message: 'password must have at least 6 characters!'
                                }
                            })
                            }
                            type="password"
                            placeholder="password"
                            class="input input-bordered" />
                        <label class="label">
                            {errors.password?.type === 'required' && <span class="label-text-alt text-error">{errors.password.message}</span>}
                            {errors.password?.type === 'minLength' && <span class="label-text-alt text-error">{errors.password.message}</span>}

                        </label>
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