import { useState } from "react";
import { Container, TextField, Button, Typography } from "@material-ui/core";
import axios from 'axios'

// api
let api = "https://aqueous-everglades-23747.herokuapp.com/api"

const style={
    modalBG:{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "rgba(255,255,255,0.5)",
        backdropFilter: "blur(3px)",
        zIndex: 1
    },
    modal:{
        padding: "2rem",
        marginTop: "2rem",
        borderRadius: "1rem",
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem",
        background: "#fff",
        boxShadow: "1px 0 12px 0 rgba(0,0,0,0.5)"
    }
}

export default function AddStock({close,value}) {
    const {_id,description,price} = value
    const [quantity, setQuantity] = useState(0)

    function saveStock() {
        axios.put(`${api}/stock/new/${_id}`,{quantity:quantity}).then(()=>console.log("data added")).catch(err=>console.log(err.message))
    }

    return (
        <div style={style.modalBG}>
            <Container maxWidth="xs" style={style.modal}>
                <Typography variant="h4" component="h4">Add Stock</Typography>

                <Typography variant="body1">{description}</Typography>
                <Typography variant="body2">{price} pesos</Typography>

                <TextField
                    variant="outlined"
                    name="quantity"
                    label="Quantity"
                    type="number"
                    placeholder="Enter the number of stock" 
                    value={quantity}
                    onChange={(e)=>setQuantity(e.target.value)}/>

                <Button variant="contained" color="primary" onClick={saveStock}>Save</Button>
                <Button variant="outlined" color="secondary" onClick={close}>Cancel</Button>
            </Container>
        </div>
    )
}
