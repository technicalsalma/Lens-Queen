import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../../components/Loading/Loading';
import auth from '../../firebase.init';

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    console.log('inside require auth', user)
    const location = useLocation();
    
    if(loading){
      toast.loading("Waiting...");
      return <Loading/>
    }
  
    if (!user) {
      return <Navigate to="/login" state={{ from: location }} replace />;
    }


  return children;
};

export default RequireAuth;