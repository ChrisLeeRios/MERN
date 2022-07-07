import React, { useState } from "react";
// import classes from './UserCard.module.css'

const UserForm = (props) => {
    const [firstname, setFirstname] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const [lastname, setLastname] = useState("");
    const [lastNameError, setLastNameError] = useState("")
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("")
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("")
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);


    const validateFirstName = (e) => {
        setFirstname(e.target.value);
        if (e.target.value.length < 1) {
            setFirstNameError("Must Enter A First Name.")
        } else if (e.target.value.length > 0 && e.target.value.length < 2) {
            setFirstNameError("First Name Must Be At Least 2 Characters.")
        }else{
            setFirstNameError("")
        }
    }

    const validateLastName = (e) => {
        setLastname(e.target.value);
        if (e.target.value.length < 1) {
            setLastNameError("Must Enter A Last Name.")
        } else if (e.target.value.length > 0 && e.target.value.length < 2) {
            setLastNameError("Last Name Must Be At Least 2 Characters.")
        }else{
            setLastNameError("")
        }
    }

    const validateEmail = (e) => {
        setEmail(e.target.value);
        if (e.target.value.length < 1) {
            setEmailError("Must Enter An Email Address.")
        } else if (e.target.value.length > 0 && e.target.value.length < 5) {
            setEmailError("Email Address Must Be At Least 5 Characters.")
        }else{
            setEmailError("")
        }
    }

    const validatePassword = (e) => {
        setPassword(e.target.value)
        if (e.target.value.length < 1) {
            setPasswordError("Must Enter A Password.")
        } else if (e.target.value.length > 0 && e.target.value.length < 8) {
            setPasswordError("Password Must Be At Least 8 Characters.")
        }else{
            setPasswordError("")
        }
    }

    const validateConfirmPassword = (e) => {
        setConfirmPassword(e.target.value)
        if (e.target.value.length < 1) {
            setConfirmPasswordError("Must Confirm Password.")
        } else if (e.target.value !== password) {
            setConfirmPasswordError("Passwords Do Not Match.")
        }else{
            setConfirmPasswordError("")
        }
    }

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstname, lastname, email, password, confirmPassword }
        console.log("Welcome", newUser);
        setHasBeenSubmitted(true);
    };

    // const formMessage = () => {
    //     if (hasBeenSubmitted) {
    //         return "Thank you for submitting the form!";
    //     } else {
    //         return "Welcome, please submit the form";
    //     }
    // };

    return (
        <>
            <form onSubmit={createUser}>
                {/* <h3>{ formMessage() }</h3> */}
                {
                    hasBeenSubmitted ?
                        <h3>Thank you for submitting the form!</h3> :
                        <h3>Welcome, please submit the form.</h3>
                }
                <div>
                    <label>First Name: </label>
                    {/* <input type="text" onChange={(e) => setFirstname(e.target.value)} value={firstname} /> */}
                    <input type="text" onChange={validateFirstName} value={firstname} />
                    {
                        firstNameError ?
                            <p style={{ color: 'grey' }}>{firstNameError}</p> :
                            ''
                    }
                </div>
                <div>
                    <label>Last Name: </label>
                    {/* <input type="text" onChange={(e) => setLastname(e.target.value)} value={lastname} /> */}
                    <input type="text" onChange={validateLastName} value={lastname} />
                    {
                        lastNameError ?
                            <p style={{ color: 'grey' }}>{lastNameError}</p> :
                            ''
                    }
                </div>
                <div>
                    <label>Email Address: </label>
                    {/* <input type="text" onChange={(e) => setEmail(e.target.value)} value={email} /> */}
                    <input type="text" onChange={validateEmail} value={email} />
                    {
                        emailError ?
                            <p style={{ color: 'grey' }}>{emailError}</p> :
                            ''
                    }
                </div>
                <div>
                    <label>Password: </label>
                    {/* <input type="text" onChange={(e) => setPassword(e.target.value)} value={password} /> */}
                    <input type="password" onChange={validatePassword} value={password} />
                    {
                        passwordError ?
                        <p style={{ color: 'grey' }}>{passwordError}</p> :
                        ''
                    }
                </div>
                <div>
                    <label>Confirm Password: </label>
                    {/* <input type="password" onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword} /> */}
                    <input type="password" onChange={validateConfirmPassword} value={confirmPassword} />
                    {
                        confirmPasswordError ?
                        <p style={{ color: 'grey' }}>{confirmPasswordError}</p> :
                        ''
                    }
                </div>
                <input type="submit" value="Create User" />
            </form>
            <div>
                <p>First Name: {firstname} </p>
                <p>Last Name: {lastname} </p>
                <p>Email Address: {email} </p>
                <p>Password: {password} </p>
                <p>Confirm Password: {confirmPassword} </p>
            </div>
        </>
    );

};


export default UserForm