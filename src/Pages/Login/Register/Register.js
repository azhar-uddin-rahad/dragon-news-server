import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { toast } from 'react-hot-toast';

const Register = () => {
  const [error, setError] = useState(null);
  const [check,setCheck]=useState(false);

  const { user, createUser,verifyEmail } = useContext(AuthContext);
  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirm.value;
    console.log(email, password);
    if (password.length < 6) {
      setError("password more then 6 character");
      return;
    }
    if (password !== confirmPassword) {
      setError("Your password are not match try again");
      return;
    }
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        setError('');
        form.reset();
        handleEmailVerification();
       toast.success("check your email address");
        console.log(user);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const handleCheck=event=>{
   setCheck(event.target.checked)
  }
  
  const handleEmailVerification=() => {
    verifyEmail()
    .then(() => {
      
      });
  }
  return (
    <div className="form-container">
      <h2 className="form-title">Login</h2>
      <form onSubmit={handleSignUp}>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" required />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" required />
        </div>
        <div className="form-control">
          <label htmlFor="confirmpassword">Confirm Password</label>
          <input type="password" name="confirm" required />
         
        </div>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" 
          onClick={handleCheck}
          label={<>Accept <Link to='/terms'>Our Terms and condition</Link></>} />
        </Form.Group>
        <input className="btn-submit" id="disabledInput" type="submit"  value="Sign Up" disabled={!check}></input>
        <br />
        <small className="error">{error}</small>
        
        
      </form>
      <p>
        You already have a account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default Register;
