import { useState } from "react";
import { Container, TextField, Button, Typography } from "@material-ui/core";

import firebase from "firebase/app";
import 'firebase/auth';
import '../config';


//styles
const style={
    txt:{
        margin: "1rem"
    },
    btn:{
        margin: "1rem",
        background: "#646f58",
        color: "#fff"
    },
    btnRegister:{margin:"1rem"}
}


export default function Login({register}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("")

    let login=()=>{
        if(email==="" || password===""){
            setError("Please fill up all the fields");
            console.log(error);
        }else{
            firebase.auth().signInWithEmailAndPassword(email,password)
                .then(user=>console.log(user.user.email));
        }
    }

    return (
        <>
            <Container maxWidth="xs">
                <Typography variant="h6" style={{textAlign:"center"}}>
                    Login
                </Typography>

                <TextField
                    variant="outlined"
                    label="Email"
                    type="email"
                    placeholder="Enter your Email Address"
                    style={style.txt}
                    value={email}
                    onChange={e=>setEmail(e.target.value)}
                    fullWidth/>

                <TextField
                    variant="outlined"
                    label="Password"
                    type="password"
                    placeholder="Your password"
                    style={style.txt}
                    value={password}
                    onChange={e=>setPassword(e.target.value)}
                    fullWidth/>

                    <Button variant="contained" fullWidth style={style.btn} onClick={login}>Login</Button>
                    <Button variant="text" fullWidth style={style.btnRegister} onClick={register}>Register</Button>

            </Container>
        </>
    )
}
