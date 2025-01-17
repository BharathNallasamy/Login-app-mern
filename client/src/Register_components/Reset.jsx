import React from "react";
import { Link } from 'react-router-dom';
import avatar from '../assets/kevinRushProfile.png';
import styles from '../styles/Username.module.css';
import { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { resetPasswordValidation } from "../helper/Validate";

const Reset = () => {
  const formik = useFormik({
    initialValues: {
        password: '',
        confirm_pwd: ''
    },
    validate: resetPasswordValidation,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async values => {
        console.log(values);
        values = ''
    }
  });
  return (
    <div className="container mx-auto">
        <Toaster position="top-right-corner" reverseOrder={false}></Toaster>
      <div className="flex justify-center items-center h-full">
        <div className={styles.glass}>
          <div className="title flex flex-col items-center">
            <h1 className="text-5xl font-bold">Reset</h1>
            <span className="py-4 text-xl w-2/3 text-center text-gray-500">
              Enter new password
            </span>
          </div>

          <form className="pt-20" onSubmit={formik.handleSubmit}>
            <div className="textbox flex flex-col items-center gap-6">
              <input 
                {...formik.getFieldProps('password')} 
                className={styles.textbox} 
                type="text" 
                placeholder="New Password" 
              />
              <input 
                {...formik.getFieldProps('confirm_pwd')} 
                className={styles.textbox} 
                type="text"
                placeholder="Repeat Password" 
              />
              <button className={styles.btn} type="submit">Reset</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Reset
