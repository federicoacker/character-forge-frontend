import { useState } from 'react';
import useUser from '../../hooks/useUser';
import styles from './Register.module.css';

function Register() {
    const { registrationErrors, register } = useUser();
    const [submitting, setSubmitting] = useState(false);
    const [submitData, setSubmitData] = useState({
        name: "",
        email: "",
        password: "",
        password_confirmation: ""
    });

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setSubmitData({
            ...submitData,
            [name]: value
        });
    }
    if(Object.entries(registrationErrors)?.some(error => error != "") && submitting){
            setSubmitting(false);
        }
    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmitting(true);
        register(submitData);
    }

    return (
        <div className="container">
            <form className={`form-control ${styles.card}`} method="POST" onSubmit={handleSubmit} data-bs-theme="dark">
                <label className="form-label" htmlFor="name">Name</label>
                <input onChange={handleChange} required className="form-control" type="text" name="name" id="name" placeholder="Username" value={submitData.name}></input>
                {registrationErrors.name &&
                    <div className={styles.error}>{registrationErrors.name}</div>
                }
                <label className="form-label" htmlFor="email">Email</label>
                <input onChange={handleChange} required className="form-control" type="text" name="email" id="email" placeholder="email@gmail.com" value={submitData.email}></input>
                {registrationErrors.email &&
                    <div className={styles.error}>{registrationErrors.email}</div>
                }
                <label className="form-label" htmlFor="password">Password</label>
                <input onChange={handleChange} required className="form-control" type="password" name="password" id="password" placeholder="password" value={submitData.password}></input>
                {registrationErrors.password &&
                    <div className={styles.error}>{registrationErrors.password}</div>
                }
                <label className="form-label" htmlFor="password_confirmation">Confirm Password</label>
                <input onChange={handleChange} required className="form-control" type="password" name="password_confirmation" id="password_confirmation" placeholder="Confirm Password" value={submitData.password_confirmation}></input>
                {registrationErrors.password_confirmation &&
                    <div className={styles.error}>{registrationErrors.password_confirmation}</div>
                }
                <button disabled={submitting} type="submit" className={`btn ${styles.submit}`}>{submitting ? "Registering..." : "Register"}</button>
            </form>
        </div>
    )
}

export default Register