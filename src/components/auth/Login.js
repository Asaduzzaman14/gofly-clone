import React, { useEffect } from 'react';
import logo from '../assets/gofly-logo1.png'


import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from '../shared/Loading';




const Login = () => {

    const [sendPasswordResetEmail] = useSendPasswordResetEmail(
        auth
    );

    const [signInWithGoogle, googleUser, Googleloading, GoogleError] = useSignInWithGoogle(auth);
    const [signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth);

    const { register, formState: { errors }, handleSubmit, getValues } = useForm();
    const emailvalue = getValues("email");

    // const [token] = useToken(user || googleUser)

    let signInError;
    const navigate = useNavigate()
    const location = useLocation()

    let from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (user || googleUser) {

            navigate(from, { replace: true });
        }

    }, [from, navigate])


    if (loading || Googleloading) {
        return <Loading></Loading>
    }

    if (error || GoogleError) {
        signInError = <small className='text-red-500'>{error?.message || GoogleError?.message}</small>
    }


    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password)

    };




    return (
        <div className='shadow my-5 grid grid-cols-1 lg:grid-cols-2 lg:w-[800px] w-96 mx-auto p-2 lg:p-5 gap-5'>
            <div>
                <img className='w-40 mx-auto mt-10 mb-20' src={logo} alt="" />
                <p className=' my-5'>Login Using social media</p>
                <button className='btn bg-secondary text-white w-full mb-3'>Login with facebook</button>
                <button className='btn bg-red-500 text-white w-full mb-3'>Login with google</button>
            </div>

            <div className='grid content-around'>

                <div>
                    <h2 className='mb-3 text-2xl '>Login to your account</h2>
                    {/* <p>Don't have any account? </p> */}
                    <Link to='/register'><p>Don't have any account? <span className='text-primary font-medium'>Create An Account</span></p></Link>
                </div>

                {/* <form >
                    <input className='border-2 m-2 w-full p-1 rounded-lg border-black' type="email" placeholder='Email' />
                    <input className='border-2 m-2 w-full p-1 rounded-lg border-black' type="password" name="" id="" placeholder='Password' />
                    <input className='border-2 rounded-md p-2 m-2 w-full text-white cursor-pointer hover:bg-secondary/[.9] bg-secondary' type="submit" value="Login" />

                </form> */}

                {/* ***************** */}


                <form onSubmit={handleSubmit(onSubmit)}>





                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Your Email</span>
                        </label>

                        {/* email input */}

                        <input
                            {...register("email", {
                                required: {
                                    value: true,
                                    message: 'email is required'
                                },

                                pattern: {
                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                    message: "Please provide a valid Email"
                                }
                            })}

                            type="email"
                            placeholder="Email"
                            className="input input-bordered w-full max-w-xs"
                        />
                        <label className="label">
                            {errors.email?.type === 'required' && <span className='label-text-alt text-red-500'>{errors.email.message}</span>}
                            {errors.email?.type === 'pattern' && <span className='label-text-alt text-red-500'>{errors.email.message}</span>}
                        </label>

                    </div>

                    {/* pasword  input*/}

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>

                        </label>

                        <input
                            {...register("password", {
                                required: {
                                    value: true,
                                    message: 'password is required'
                                },

                                minLength: {
                                    value: 6,
                                    message: "Must be 6 characters or longer"
                                }
                            })}

                            type="password"
                            placeholder="password"
                            className="input input-bordered w-full max-w-xs"
                        />
                        <label className="label">
                            {errors.password?.type === 'required' && <span className='label-text-alt text-red-500'>{errors.password.message}</span>}
                            {errors.password?.type === 'minLength' && <span className='label-text-alt text-red-500'>{errors.password.message}</span>}
                        </label>

                    </div>



                    {signInError}
                    <input type="submit" value={'LOGIN'} className='btn w-full btn-secondary text-white' />
                    <Link to='/register'><small>New To Friends Factory ? <span className='text-primary font-mono hover:underline'>Create an account</span></small></Link>
                    <br />


                    <small>Forgate password ? <button onClick={async () => {
                        await sendPasswordResetEmail(emailvalue);
                        alert('Sent email');
                    }} className='text-primary font-mono hover:underline'>Resate password</button></small>


                </form>


                {/* ***************** */}


            </div>
        </div>
    );
};

export default Login;