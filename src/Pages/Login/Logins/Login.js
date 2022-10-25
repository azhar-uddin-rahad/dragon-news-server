import { Toast } from 'bootstrap';
import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast';
import './Login.css'
const Login = () => {
    const {user,SignIn,setLoading}=useContext(AuthContext)
    const navigate = useNavigate();


    const location = useLocation();
    const from =location.state?.from?.pathname || '/';
    const handleSubmit=(event)=>{
        event.preventDefault();
        const form=event.target;
        const email = form.email.value;
        const password = form.password.value;
        SignIn(email,password)
        .then(result=> {
            const user=result.user;
            console.log(user);
            form.reset();
           if(user.emailVerified ){
            navigate(from, {replace:true})
           }
           else{
            toast.error('Your email not verfied.please verified');
           }
        })
        .catch(error=>{
            console.log(error);
        })
        .finally(()=>{
            
            setLoading(false);
        })
        
    }
    return (
       
            <div className='form-container'>
            <h2 className='form-title'>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" required />
                </div>
                <input className='btn-submit' type="submit" value="Login" />
            </form>
            <p>New to ema john <Link to='/signup'>Create a New Account</Link></p>
        </div>
       
    );
};

export default Login;