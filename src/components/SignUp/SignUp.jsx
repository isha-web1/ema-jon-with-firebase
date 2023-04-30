import React, { useContext, useState } from 'react';
import './SignUp.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const SignUp = () => {
  const [error, setError] = useState('')
  const { createUser} = useContext(AuthContext)

  const handleSignUp = event => {
    event.preventDefault()
    const form = event.target
    const name = form.name.value
    const email = form.email.value
    const password = form.password.value
    const confirm = form.confirm.value
    console.log(email, password, confirm, name)
     setError('')
    if(password !== confirm){
      setError('your password did not match')
      return
    }
    else if(password.length < 6){
      setError('your password must be six charecters')
      return
    }
    createUser(email, password)
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
    <div className="text-center ">
      <h1 className="text-5xl font-bold">Please SignUp!!</h1>
     
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSignUp} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">name</span>
          </label>
          <input type="text" placeholder="name" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" name='password' placeholder="password" className="input input-bordered" required />
          <label className="label">
            <span className="label-text">confirm password</span>
          </label>
          <input type="text" name='confirm' placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Sign Up</button>
        </div>
        <p>all ready have an account? <Link to="/login">login</Link></p>
        <p className='text-red-600'>{error}</p>
      </form>
    </div>
  </div>
</div>
    );
};

export default SignUp;