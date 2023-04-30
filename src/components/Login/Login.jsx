import React, { useContext, useState } from 'react';
import './Login.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {
  const [error, setError] = useState('')
  const {signIn} = useContext(AuthContext)

  const handleSignIn = event => {
    event.preventDefault()
    const form = event.target
    const email = form.email.value
    const password = form.password.value
    console.log(email, password)
    setError('')

    if(password.length < 6){
      setError('your password must be six charecters')
      return
    }

    signIn(email, password)
    .then(result => {
      const logUser = result.user
      console.log(logUser)
    })
    .catch(error =>{
      console.log(error)
      setError(error.message)
    })
  }
    
  
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center">
            <h1 className="text-5xl font-bold">Login please!!</h1>
            
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={ handleSignIn } className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" name='email' placeholder="email" className="input input-bordered" required/>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <p>new to ema jon? <Link to="/signup">create new account</Link></p>
            </form>
          </div>
        </div>
      </div>
    );
};


export default Login;