import React from "react";
import { Link } from 'react-router-dom';
import avatar from '../assets/kevinRushProfile.png';
import styles from '../styles/Username.module.css';
import { Toaster } from 'react-hot-toast';
import { useFormik } from 'formik';
import { passwordValidation } from "../helper/Validate";


const Recovery = () => {
  
  return (
    <div className="container mx-auto">
        <Toaster position="top-right-corner" reverseOrder={false}></Toaster>
      <div className="flex justify-center items-center h-full">
        <div className={styles.glass}>
          <div className="title flex flex-col items-center">
            <h1 className="text-5xl font-bold">Recovery</h1>
            <span className="py-4 text-xl w-2/3 text-center text-gray-500">
              Enter OTP to recover password
            </span>
          </div>

          <form className="pt-20">
            <div className="textbox flex flex-col items-center gap-6">
              <div className="input text-center">
                <span className="py-4 text-sm text-left text-gray-500">
                  Enter 6 digit OTP sent to your E-mail address
                </span>
                <input
                  className={styles.textbox} 
                  type="text" 
                  placeholder="OTP" 
                />
              </div>
              
              <button className={styles.btn} type="submit">Sign Up</button>
            </div>
            <div className="text-center py-4">
              <span className="text-gray-500">
                Can't get OTP?{" "} - {" "}
                <button className="text-red-500">
                  Resend
                </button>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Recovery
