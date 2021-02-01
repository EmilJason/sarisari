import { useState } from "react";
import { Container, TextField, Button, Typography } from "@material-ui/core";
import firebase from "firebase/app";
import '../config';
import 'firebase/auth';

const style={
    bg:{
        position: "fixed",
        width: "100vw",
        height: "100vh",
        left: 0,
        top: 0,
        background: "rgba(255,255,255,.8)",
        zIndex: 1
    },
    registerForm:{
        background: "#fff",
        marginTop: "3rem",
        padding: "1.5rem",
        borderRadius: ".5rem",
        boxShadow: "2px 0 10px 0 rgba(0,0,0,0.5)"
    },
    txt:{
        margin: ".5rem"
    },
    btn:{
        background: "#00efff",
        color: "#220022",
        margin: ".5rem"
    },
    btnCancel:{margin: ".5rem"}
}

export default function Register({cancel}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [retypePassword, setRetypePassword] = useState("");
    const [error, setError] = useState("")

    let register = () => {
        if (email === "" || password === "" || retypePassword === ""){
            setError("Please fill all the necessary fields")
            console.log(error)
        }else{
            firebase.auth().createUserWithEmailAndPassword(email,password)
                .then(user=>console.log(user.user));

            setEmail("");
            setPassword("");
            setRetypePassword("");
            cancel()
        }
    }

    return (
        <>
            <div style={style.bg}>

            
            <Container maxWidth="xs" style={style.registerForm}>
                <Typography variant="h6">
                    Register
                </Typography>

                <TextField
                    variant="outlined"
                    label="Email"
                    type="email"
                    placeholder="Enter your Email Address"
                    style={style.txt}
                    onChange={(e)=>setEmail(e.target.value)}
                    value={email}
                    fullWidth/>

                <TextField
                    variant="outlined"
                    label="Password"
                    type="password"
                    placeholder="Your password"
                    style={style.txt}
                    onChange={e=>setPassword(e.target.value)}
                    value={password}
                    fullWidth/>

                <TextField
                    variant="outlined"
                    label="Re-type Password"
                    type="password"
                    placeholder="Retype password"
                    style={style.txt}
                    onChange={e=>setRetypePassword(e.target.value)}
                    value={retypePassword}
                    fullWidth/>

                    <Button 
                        variant="contained" 
                        fullWidth
                        onClick={register}
                        style={style.btn}>
                            Register
                    </Button>

                    <Button 
                        variant="text" 
                        fullWidth
                        onClick={cancel}
                        style={style.btnCancel}>
                            Cancel
                    </Button>
            </Container>

            </div>
        </>
    )
}
