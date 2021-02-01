import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import firebase from "firebase/app";
import '../config';
import "firebase/auth";


export default function Navbar({user}) {

    const renderLabel=()=>{
        if (user==="") {
            return null;
        }else{
        return <Button variant="text" color="inherit" onClick={logout}>{user}</Button>
        }
    }

    let logout=()=>{
        firebase.auth().signOut().then(()=>console.log("you have been signout"))
    }

    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" style={{flexGrow: 1}}>
                        SariSari
                    </Typography>
                    {renderLabel()}
                </Toolbar>
            </AppBar>
        </>
    )
}
