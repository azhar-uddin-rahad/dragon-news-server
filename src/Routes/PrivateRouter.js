import React, { useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider/AuthProvider';

const PrivateRouter = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    if(!loading){
        <Spinner  animation="grow" variant="primary" />
    }
    const location =useLocation()
    if(!user){
        return <Navigate to='/login' state={{from: location}} replace></Navigate>
    }
    return children;
};



export default PrivateRouter;