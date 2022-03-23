import { faEarthOceania } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect, useMemo  } from 'react';
import Select from 'react-select'
import countryList from 'react-select-country-list'
const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    first_name: '',
    last_name:'',
    email: '',
    password: '',
    re_password: '',
    phone:'',
    birth:'',
    country:'',
    username:''
  });
  const[first_name ,setFirst_name]=useState('')
  const [phone2,setPhone2] = useState({

    phone:''
  }); 
  const [country, setCountry] = useState('')
  

  const changeHandler = country => {
    setCountry(country)
  }
  const [agree, setAgree] = useState(false);

  const checkboxHandler = () => {
    // if agree === true, it will be set to false
    // if agree === false, it will be set to true
    setAgree(!agree);
    // Don't miss the exclamation mark
  }

  // When the button is clicked
  const btnHandler = () => {
    alert('The buttion is clickable!');
  };
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = e => {
    const { name, value ,first_name} = e.target;
    setValues({
      ...values,
      [name]: value
    });
    setFirst_name({
      ...first_name,
      [name]: value
    })
  };
  const handleChange2 = e => {

    setPhone2({
       
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    setErrors(validate(values));
    setIsSubmitting(true);
    const app_user={ first_name: '',
    last_name:'',
    email: '',
    password: '',
    re_password: '',
    phone:'',
    birth:'',
    country:'',
    username:''}
    console.log(app_user)
    fetch("http://localhost:8080/api/v1/registration",
    {
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(app_user)
      
    }).then(response=>response.json())
      console.log("New data is added")
    
   
  }
  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        callback();
      }
    },
    [errors]
  );

  return { handleChange, handleSubmit, values, errors,handleChange2,phone2,checkboxHandler,btnHandler ,changeHandler,country,first_name};
};

export default useForm;