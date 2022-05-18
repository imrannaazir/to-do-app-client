import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase.init';

const SignUp = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.form?.pathname || '/'
    const [
        createUserWithEmailAndPassword,
        eUser,
        eLoading,
        eError,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

    const { register, watch, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
        createUserWithEmailAndPassword(data?.email, data?.password)
    }
    const password = watch('password')


    if (eLoading || gLoading) return <p>Loading...</p>
    if (eError || gError) {
        console.log(eError || gError);
    }
    if (eUser || gUser) {
        navigate(from)
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

                    {/* handle confirm password */}

                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Confirm Password</span>
                        </label>
                        <input
                            {...register("confirm_password", {
                                required: {
                                    value: true,
                                    message: 'confirm password is required'
                                },
                                validate: value => value === password || 'passwords do not match!'

                            })
                            }
                            type="password"
                            placeholder="Enter password"
                            class="input input-bordered w-full max-w-xs" />
                        <label class="label">
                            {errors.confirm_password?.type === 'required' && <span class="label-text-alt text-error">{errors.confirm_password.message}</span>}
                            {errors.confirm_password?.type === 'validate' && <span class="label-text-alt text-error">{errors.confirm_password.message}</span>}

                        </label>
                    </div>

                    {/* form submit button */}
                    <div class="form-control mt-6">
                        <button class="btn btn-primary">Login</button>
                    </div>
                    <span className='text-sm text-secondary'>Already have an account? <Link className='text-info' to='/login'>Login</Link></span>
                    <div class="divider w-[80%] mx-auto">OR</div>
                    <div class="">
                        <p
                            onClick={() => signInWithGoogle()}
                            class="btn btn-block btn-primary btn-outline ">Continue With Google</p>
                    </div>
                </form>

            </div>
        </div>

    );
};

export default SignUp;