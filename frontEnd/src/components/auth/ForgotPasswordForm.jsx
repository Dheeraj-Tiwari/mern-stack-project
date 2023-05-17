
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import classes from './ForgotPasswordForm.module.scss'
import { RiLockPasswordLine } from 'react-icons/ri'

function ForgotPasswordForm(){
    // const [user, setUser] = useState({
    //     password: '',
    //   })
    
    //   const getUser = async () => {
    //     try {
    //       const { data } = await axios.get(`/api/users/me`);
    //       setUser(data);
    //     } catch (err) {
    //       console.log(err);
    //     }
    //   };
    
    //   useEffect(() => {
    //     getUser();
    //   }, []);
    
    //   const updateUserInfo = (e) => {
    //     setUser({
    //       ...user,
    //       [e.target.name]: e.target.value,
    //     });
    //   };
    
    //   const forgotPassword = async (e) => {
    //     e.preventDefault();
    //     try {
    //       const res = await axios.put(`/api/users/me`, user);
    //       toast.success('Password updated successfully');
    //       setUser(res.data);
    //     } catch (err) {
    //       console.log(err);
    //     }
    //   };

return(
    
    
    <div>
    <form className={classes.ForgotPasswordForm}>
    <h1 className={classes.title}>Forgot Password?</h1>
    <div class="card">
        <h1 class="lock-icon"> <RiLockPasswordLine /> </h1>
        {/* <h2>Forgot Password?</h2> */}
        <p>You can reset your Password here:</p>
        <input type="text" class="passInput" placeholder="Email address" />
        <button>Send My Password</button>
    </div>
    </form>
    </div>
    
);
}

export default ForgotPasswordForm;
