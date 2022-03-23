export default function validateInfo(values) {
  let errors = {};

  if (!values.last_name.trim()) {
    errors.last_name = 'last name required';
  }
  // else if (!/^[A-Za-z]+/.test(values.name.trim())) {
  //   errors.name = 'Enter a valid name';
  // }

  if (!values.first_name.trim()) {
    errors.first_name = 'first name required';
  }
  if (!values.email) {
    errors.email = 'Email required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email address is invalid';
  }
  if (!values.password) {
    errors.password = 'Password is required';
  } else if (values.password.length < 6) {
    errors.password = 'Password needs to be 6 characters or more';
  }

  if (!values.re_password) {
    errors.re_password = 'Password is required';
  } else if (values.re_password !== values.password) {
    errors.re_password = 'Passwords do not match';
  }
  return errors;
}
