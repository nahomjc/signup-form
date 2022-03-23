import React ,{useMemo}from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import './Form.css';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import Select from 'react-select'
import countryList from 'react-select-country-list'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors ,handleChange2,phone2,checkboxHandler,btnHandler,changeHandler,country,first_name} = useForm(
    submitForm,
    validate
  );
  const 

  options = useMemo(() => countryList().getData(), [])
  return (
    <div className='form-content-right'>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <h1>
          Get started with us today! Create your account by filling out the
          information below.
        </h1>
        
        <div className='form-inputs'>
          <label className='form-label'>Phone Numer</label>
          <PhoneInput

            international
            countryCallingCodeEditable={false}
            defaultCountry="ET"
            value={phone2.phone}
            onChange={handleChange2}/>
          
        </div>
        <div className='form-inputs'>
        {/* country */}
         <FontAwesomeIcon icon="globe" />
        <label className='form-label'>Country List</label>
       
        <Select options={options} name='country'
         value={country} onChange={changeHandler} defaultCountry="ET" />
        
        </div>
        <div className='form-inputs'>
        <FontAwesomeIcon icon="user"/>     
          <label className='form-label'>First Name</label>
         
          <input
            className='form-input'
            type='text'
            name='first_name'
            placeholder='Enter your first_name'
            value={first_name.first_name}
            onChange={handleChange}
          />
                   {errors.first_name && <p>{errors.first_name}</p>}
        </div>
        <div className='form-inputs'>
        <FontAwesomeIcon icon="user"/>     
          <label className='form-label'>Last Name</label>
         
          <input
            className='form-input'
            type='text'
            name='last_name'
            placeholder='Enter your last_name'
            value={values.last_name}
            onChange={handleChange}
          />
                   {errors.last_name && <p>{errors.last_name}</p>}
        </div>
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
          <span className='form-input-icon'><FontAwesomeIcon icon="calendar" className='form-input-icon' /></span>
        
        <label className='form-label'>Birthdate</label>
        <input type='date'
        className='form-input'
         placeholder='Enter BirthDate'
         value={values.birthdate} onChange={handleChange}
          name='birthdate'
    />
         
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
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div className='form-inputs'>
        <FontAwesomeIcon icon="lock"/> 
          <label className='form-label'>Confirm Password</label>
          <input
            className='form-input'
            type='password'
            name='re_password'
            placeholder='Confirm your password'
            value={values.re_password}
            onChange={handleChange}
          />
          {errors.re_password && <p>{errors.re_password}</p>}
        </div>
        
        <div className='form-inputs'>
         {/* agrree */}
         <input type="checkbox" id="agree" onChange={checkboxHandler} />
          <label htmlFor="agree"> I agree to <b>terms and conditions</b></label>
        
        </div>
        <button className='form-input-btn' type='submit'>
          Sign up
        </button>
        <span className='form-input-login'>
          Already have an account? Login <a href='#'>here</a>
        </span>
      </form>
    </div>
  );
};

export default FormSignup;
