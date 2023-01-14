import { useState } from 'react';
import './App.css';
import FormInput from './components/FormInput';

function App() {
  const [values, setValues] = useState({
    username: '',
    email: '',
    dob: '',
    password: '',
    confirmPassword: '',
  });

  const inputs = [
    {
      id: 1,
      name: 'username',
      type: 'text',
      label: 'Username',
      placeholder: 'Enter your username',
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      required: true,
      pattern: '^[A-Za-z0-9]{3,16}$',
    },
    {
      id: 2,
      name: 'email',
      type: 'email',
      label: 'Email',
      placeholder: 'Enter your Email',
      errorMessage: 'It should be a valid email address!',
      required: true,
    },
    {
      id: 3,
      name: 'dob',
      type: 'date',
      label: 'Date of Birth',
      placeholder: 'Enter your DOB',
      errorMessage: '',
    },
    {
      id: 4,
      name: 'password',
      type: 'password',
      label: 'Password',
      placeholder: 'Enter your Password',
      errorMessage:
        'Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special characters!',
      required: true,
      pattern:
        '^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$',
    },
    {
      id: 5,
      name: 'confirmPassword',
      type: 'password',
      label: 'Confirm Password',
      placeholder: 'Confirm Password',
      errorMessage: "Password don't match!",
      required: true,
      pattern: values.password,
    },
  ];
  
  const handleSubmit = e => {
    e.preventDefault();
  };

  const onChange = e => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  // console.log(values);
  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Register an Account</h1>
        {inputs.map(input => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
