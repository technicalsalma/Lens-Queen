import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from "react-firebase-hooks/auth";
import auth from '../../firebase.init';

import './Register.css'
import SocialLogin from '../../SocialLogin/SocialLogin';
import Loading from '../../components/Loading/Loading';

const Register = () => {
     const navigate = useNavigate();
      const [createUserWithEmailAndPassword, user, loading, error] =
         useCreateUserWithEmailAndPassword(auth, {
           sendEmailVerification: true
         });
        const [updateProfile, updating, updateError] = useUpdateProfile(auth);

      const navigateLogin = () => {
        navigate("/login");
      };
      if (loading || updating){
        return<Loading/>
      }
        if (user) {
          navigate("/home");
        }

      const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });

        navigate("/home");
      };
    return (
      <div className="register-form">
        <h3 className="text-primary mt-2">Please Register </h3>
       <form onSubmit={handleRegister}>
          <input type="text" name="name" placeholder="Your Name" />
          <input
            type="email"
            name="email"
            id=""
            placeholder="Email Address"
            required
          />
          <input
            type="password"
            name="password"
            id=""
            placeholder="Password"
            required
          />

          <input
            className="W-50 mx-auto btn btn-primary mt-2"
            type="submit"
            value="Register"
          />
        </form>
        <p>
          Already have an account?
          <Link
            to="/login"
            className="text-danger pe-auto text-decoration-none"
            onClick={navigateLogin}
          >
            Please Login
          </Link>
        </p>
        <SocialLogin></SocialLogin>
      </div>
    );
};

export default Register;