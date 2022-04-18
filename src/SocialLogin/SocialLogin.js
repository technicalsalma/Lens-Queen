import React from 'react';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../firebase.init';
import google from '../images/social-icon/google.png';
import github from '../images/social-icon/GitHub.png';
import Loading from '../components/Loading/Loading';

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
  const navigate = useNavigate()


let errorElement;
 if (error || error1) {
      errorElement = <p className="text-danger">
            Error: {error?.message} {error1?.message}
          </p>
}

if(loading || loading1){
  return <Loading/>
}

    if(user || user1){
      navigate("/home");
    }



    return (
      <div>
        <div className="d-flex align-items-center">
          <div style={{ height: "1px" }} className="bg-primary w-50"></div>
          <p className="mt-2 px-2">OR</p>
          <div style={{ height: "1px" }} className="bg-primary w-50"></div>
        </div>
        {errorElement}
       <div>
          <button
          onClick={() => signInWithGoogle()}
          className="btn btn-info d-block mx-auto w-50 my-2"
        >
          <img style={{ width: "30px" }} src={google} alt="" />
          <span className="px-2">Google Sign In</span>
        </button>
        
        <button onClick={() => signInWithGithub()}
         className="btn btn-info d-block mx-auto w-50">
          <img style={{ width: "30px" }} src={github} alt="" />
          <span className="px-2">Google Sign In</span>
        </button>
       </div>
      </div>
    );
};

export default SocialLogin;