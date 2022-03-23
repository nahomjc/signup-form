import React from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import './Form.css';
import 'react-phone-number-input/style.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"


const Login = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors ,handleChange2,phone2,checkboxHandler,btnHandler} = useForm(
    submitForm,
    validate
  );

  return (
    <div className='form-content-right'>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <h2 className='head'>
          Sign In 
        </h2>
        
        <div className='form-inputs'>
        <FontAwesomeIcon icon="envelope"/>  
          <label className='form-label'>Email</label>
          <input
            className='form-input'
            type='email'
            name='email'
            placeholder='Enter your email'
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        
        <div className='form-inputs'>
        <FontAwesomeIcon icon="lock"/> 
          <label className='form-label'>Password</label>
          <input
            className='form-input'
            type='password'
            name='password'
            placeholder='Enter your password'
            value={values.password}
            onChange={handleChange}
            
          />
          <span className='form-input-login1'>
          <a href='#'>Forgot password?</a>
        </span>
          {errors.password && <p>{errors.password}</p>}
        </div>
       
        
        <button className='form-input-btn' type='submit'>
       Login
        </button>
        <span className='form-input-login'>
         Dont't Hava an account? Register <a href='#'>here</a>
        </span>
      </form>
    </div>
  );
};

export default Login;
