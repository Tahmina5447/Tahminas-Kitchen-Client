import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import googleLogo from '../../../images/google-logo (1).png'
import Toast from '../Toast/Toast';

const Signup = () => {
    const { loginWithProvider, userCreate,loading } = useContext(AuthContext);
    const [error, setError] = useState('');
    const location=useLocation();
    const navigate=useNavigate();
    const from=location.state?.from?.pathname || '/'
    const googleProvider = new GoogleAuthProvider();
    if(loading){
        return <div className="mx-auto my-8 w-20 h-20 border-4 border-dashed rounded-full animate-spin dark:border-teal-400"></div>
    }

    const handlegoogleSignup = () => {
        loginWithProvider(googleProvider)
            .then(result=>{
                const user=result.user;
                console.log(user)
                if(user?.email){
                    tst()
                }
    
                const currentUser={
                    email:user.email
                }
                // For jst token
                fetch('https://tahminas-kitchen.vercel.app/jwt',{
                    method:'POST',
                    headers:{
                        'content-type':'application/json'
                    },
                    body:JSON.stringify(currentUser)
                    
                })
                .then(res=>res.json())
                .then(data=>{
                    console.log(data)
                    localStorage.setItem('token',data.token)
                    navigate(from,{replace:true})
    
                })
            })
            .catch(error => console.error(error));
            
    }

    const handleSignup = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        userCreate(email, password)
        .then(result=>{
            const user=result.user;
            console.log(user)
            if(user){
                tst();
            }

            const currentUser={
                email:user.email
            }
            // For jst token
            fetch('https://tahminas-kitchen.vercel.app/jwt',{
                method:'POST',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(currentUser)
                
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
                localStorage.setItem('token',data.token)
                navigate(from,{replace:true})

            })
        })
        .catch(error=>{
            console.error(error)
            setError(error.message)
        });
        form.reset();
        
    }
    const tst=()=>toast.success('Successfully Sign Up',{autoClose:2000})
    return (
        <div>
            <title>Signup-Tahmina's Kitchen</title>
        <div className="hero min-h-screen bg-base-200">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <h1 className="text-5xl font-bold text-center mt-4">Sign Up  now!</h1>
                <p className='text-center text-teal-400'>{error}</p>
                <form onSubmit={handleSignup} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="Name" className="input input-bordered" required/>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" name='email' placeholder="Email" className="input input-bordered" required/>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="Password" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <button type='submit'><p className='text-white py-4 rounded-xl px-6 bg-teal-400 font-bold'>Sign Up</p></button>
                    </div>
                    
                    <div className='flex mx-auto'>
                        <h3 className='font-bold mr-1'>Sign Up With</h3>
                        <button onClick={handlegoogleSignup}><img className='w-5 h-5' src={googleLogo} alt="" /></button>
                    </div>
                    
                    <p>Already have an account?<Link className='btn btn-link' to='/login'>Login</Link></p>
                </form>
            </div>
            <Toast></Toast>
        </div>
        </div>

    );
};

export default Signup;