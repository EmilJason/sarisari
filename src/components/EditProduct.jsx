import { useState } from "react";
import { TextField,Container,Button, Typography } from "@material-ui/core";
import axios from 'axios'


const style={
    modalBg:{
        position:"fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "rgba(255,255,255,0.5)",
        backdropFilter: "blur(3px)",
        zIndex: 1
    },
    modalContent:{
        marginTop: "2rem",
        padding: "1rem",
        borderRadius: "1rem",
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        boxShadow: "2px 0 12px rgba(0,0,0,0.5)"
    },
    '@media (max-width: 1200px)':{
        modalContent:{
            marginTop: 0
        }
    }
}
export default function EditProduct({close,value}) {
    let {_id,description,price} = value
    const [editDescription, setEditDescription] = useState(description);
    const [editPrice, setEditPrice] = useState(price)
    // api
    let api = "https://aqueous-everglades-23747.herokuapp.com/api" 

    let save=()=>{
        axios.put(`${api}/product/${_id}/edit`,{
            description: editDescription,
            price: editPrice
        }).then(()=>console.log("Successfully Edited")).catch(err=>console.log(err.message))
    }
 
    return (
        <div style={style.modalBg}>
            <Container maxWidth="xs" style={style.modalContent}>
               
               <Typography variant="h4" component="h1">Edit Form</Typography>

                    <TextField
                        variant="outlined"
                        type="text"
                        label="Description"
                        name="description"
                        value={editDescription}
                        onChange={(e)=>setEditDescription(e.target.value)} />

                    <TextField
                        variant="outlined"
                        type="number"
                        label="Price"
                        name="price"
                        value={editPrice}
                        onChange={(e)=>setEditPrice(e.target.value)} />

                    <Button variant="contained" color="primary" onClick={save}>Save</Button>
                    <Button variant="outlined" color="secondary" onClick={close}>Cancel</Button>
               
            </Container>
        </div>
    )
}
