import React from "react";
import { Link } from 'react-router-dom';
import avatar from '../assets/kevinRushProfile.png';
import styles from '../styles/Username.module.css';
import { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { passwordValidation } from "../helper/Validate";


const Password = () => {
  const formik = useFormik({
    initialValues: {
        password: ''
    },
    validate: passwordValidation,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async values => {
      console.log(values);
      // values = ''
    }
  });
  return (
    <div className="container mx-auto">
        <Toaster position="top-right-corner" reverseOrder={false}></Toaster>
      <div className="flex justify-center items-center h-full">
        <div className={styles.glass}>
          <div className="title flex flex-col items-center">
            <h1 className="text-5xl font-bold">Hello Again!</h1>
            <span className="py-4 text-xl w-2/3 text-center text-gray-500">
              Explore more by connecting with us
            </span>
          </div>

          <form className="py-1" onSubmit={formik.handleSubmit}>
            <div className="profile flex justify-center py-4">
              <img className={styles.profile_img} src={avatar} alt="" />
            </div>
            <div className="textbox flex flex-col items-center gap-6">
              <input 
                {...formik.getFieldProps('password')} 
                className={styles.textbox} 
                type="password" 
                placeholder="Password" 
              />
              <button className={styles.btn} type="submit">Sign Up</button>
            </div>
            <div className="text-center py-4">
              <span className="text-gray-500">
                Forgot Password?{" "} - {" "}
                <Link className="text-red-500 underline" to="/recovery">
                  Recover Now
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Password
