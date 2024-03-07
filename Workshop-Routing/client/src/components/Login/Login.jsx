import { Link } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import { useContext } from 'react';
import AuthContext from '../../contexts/authContext';

// To be more easy to assing value to input Fields and minimize mistakes made ratio
const LoginFormKeys= {
  EMAIL: 'email',
  PASSWORD: 'password'
}

export default function Login () {
  const {loginSubmitHandler} = useContext(AuthContext).values
  const { values, onChange, onSubmit } = useForm(loginSubmitHandler, {
    [LoginFormKeys.EMAIL]: '',
    [LoginFormKeys.PASSWORD]: '',
  });


  

  return (
  <section id="login-page" className="auth">
    <form id="login" onSubmit={onSubmit}>

      <div className="container">
        <div className="brand-logo" />
          <h1>Login</h1>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name={LoginFormKeys.EMAIL}
            placeholder="Sokka@gmail.com"
            onChange={onChange}
            value={values[LoginFormKeys.EMAIL]}
          />
          <label htmlFor="login-pass">Password:</label>
          <input type="password" id="login-password" name={LoginFormKeys.PASSWORD} value={values[LoginFormKeys.PASSWORD]} onChange={onChange} />
          <input type="submit" className="btn submit" value="Login" />
          <p className="field">
            <span>
              If you don't have profile click <Link to="/register">here</Link>
            </span>
          </p>

      </div>
    </form>
  </section>
  );
}