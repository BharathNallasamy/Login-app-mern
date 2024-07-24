import React, { useState } from "react";
import { Link } from 'react-router-dom';
import avatar from '../assets/kevinRushProfile.png';
import styles from '../styles/Username.module.css';
import { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { passwordValidation } from "../helper/Validate";


const Register = () => {
  const [file, setFile] = useState()
  const formik = useFormik({
    initialValues: {
      email: '',
      username: '',
      password: ''
    },
    validate: passwordValidation,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async values => {
        console.log(values);
        values = ''
    }
  });

  /** formik doesan't support file upload so we need to create this handler */
  const onUpload = async e => {
    const base64 = ''
    setFile(base64)
  }
  return (
    <div className="container mx-auto">
        <Toaster position="top-right-corner" reverseOrder={false}></Toaster>
      <div className="flex justify-center items-center h-full">
        <div className={styles.glass} style={{width: '45%'}}>
          <div className="title flex flex-col items-center">
            <h1 className="text-5xl font-bold">Register</h1>
            <span className="py-4 text-xl w-2/3 text-center text-gray-500">
              Happy to join you!
            </span>
          </div>

          <form className="py-1" onSubmit={formik.handleSubmit}>
            <div className="profile flex justify-center py-4">
              <label htmlFor="profile" className="profile">
                <img className={styles.profile_img} src={avatar} alt="" />
              </label>
              <input type="file" id="profile" />
            </div>
            <div className="textbox flex flex-col items-center gap-6">
              <input 
                {...formik.getFieldProps('email')} 
                className={styles.textbox} 
                type="email" 
                placeholder="Email*" 
              />
              <input 
                {...formik.getFieldProps('username')} 
                className={styles.textbox} 
                type="text"
                placeholder="Username*" 
              />
              <input 
                {...formik.getFieldProps('password')} 
                className={styles.textbox} 
                type="password" 
                placeholder="Password*" 
              />
              <button className={styles.btn} type="submit">Register</button>
            </div>
            <div className="text-center py-4">
              <span className="text-gray-500">
                Already Register?{" "} - {" "}
                <Link className="text-red-500 underline" to="/login">
                  Login Now
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register
