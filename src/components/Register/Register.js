import { Icon } from '@iconify/react';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Register.module.css'

const Register = () => {
    return (
        <div >
        <div className={styles.container}>
            <h1>Sign Up</h1>
            <form action="">
                <span>Email</span> <br />
                <input type="text" /> <br />
                <span>Password</span> <br />
                    <input type="password" /> <br />
                    <span>Confirm password</span> <br />
                <input type="password" /> <br />
                <input style={{marginTop:'20px',backgroundColor:'bisque',border:'1px solid gray'}} type="submit" /> <br />
            </form>
            <p>Already have an account? <Link to='/login'>Log in</Link></p>
            <div className={styles.or}>
                <div></div>
                <span>OR</span>
                <div></div>
            </div>
            <button> <Icon style={{fontSize:'30px', marginRight:'10px'}} icon="logos:google-icon" /> Continue with Google</button>
        </div>
    </div>
    );
};

export default Register;