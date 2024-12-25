import React from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import {  doApiMethod } from '../services/apiService';
import { saveTokenLocal } from '../services/localService';

const Login = () => {
  let nav = useNavigate();
  let { register, handleSubmit, formState: { errors } } = useForm();

  const onSubForm = (data) => {
    doApi(data);
  }

  const doApi = async (_dataBody) => {
    console.log(_dataBody);
    let url = "/users/login";
    try {
      let resp = await doApiMethod(url, "POST", _dataBody);
      console.log(resp.data);
      if (resp.data.token) {
        saveTokenLocal(resp.data.token);
        nav("/home");
      }
    }
    catch (err) {
      console.log(err.response.data.err);
    }
  }

  
  let emailRef = register("email", {
    required: true,
    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
  });
  let passwordRef = register("password", { required: true, minLength: 4 });

  return (
    <div className='text-center m-2'>
    <div className=" container mt-5 shadow-lg p-4 d-flex flex-column text-center" style={{ width: '80%', maxWidth: '500px', backgroundColor: 'white' }}>
      <div className="row justify-content-center">
        <h3 className='m-2'>Sign in</h3>
        <form onSubmit={handleSubmit(onSubForm)} className="text-center">
          <div className="m-2 flex-grow-1 text-start">
            <input {...emailRef} type="email" className="form-control" placeholder="Enter email" style={{ fontSize: '1rem' }} />
            {errors.email ? <small className='text-danger '>* The email is invalid</small> : ""}
          </div>

          <div className="m-2 flex-grow-1 text-start">
            <input {...passwordRef} type="Password" className="form-control" placeholder="Password" style={{ fontSize: '1rem' }} />
            {errors.password ? <small className='text-danger'>* Enter valid password, min 3 chars</small> : ""}
          </div>

          <div className='m-3 text-center'>
            <button className="btn btn-primary btn-lg w-75">Sign In</button>
          </div>
        </form>
        
      </div>
     
    </div>
     <p>email : test@gmail.com</p>
     <p>password : 1234</p>
     </div>
  );
};

export default Login;