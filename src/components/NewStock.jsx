import { useState } from "react";
import { Container, Typography, TextField, Button } from "@material-ui/core";
import axios from 'axios';

// api
let api = "https://aqueous-everglades-23747.herokuapp.com/api"

const style={
    bg:{
        position: "fixed",
        width: "100vw",
        height: "100vh",
        top: 0,
        left: 0,
        background: "rgba(255,255,255,0.8)",
        zIndex: 1
    },
    content:{
        padding: "1.5rem",
        marginTop: "1.5rem",
        borderRadius: ".5rem",
        background: "#fff"
    },
    txt:{margin: ".5rem"},
    btn:{margin: ".5rem"}
}



export default function NewStock({close}) {
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(0);
    const [quantity, setQuantity] = useState(0);

    let saveStock=()=>{
        axios.post(`${api}/product/add`,{
            description: description,
            price:price
        }).then(()=>console.log("Product saved"))
        close()
    }


    return (
        <>
            <div style={style.bg}>
                <Container maxWidth="xs" style={style.content}>
                    <Typography variant="h6">New Stock</Typography>

                    <TextField
                        variant="outlined"
                        type="text"
                        name="description"
                        label="Description"
                        placeholder="Enter the Product name"
                        style={style.txt}
                        value={description}
                        onChange={(e)=>setDescription(e.target.value)}
                        fullWidth />

                    <TextField
                        variant="outlined"
                        type="number"
                        name="price"
                        label="Price"
                        placeholder="Enter the Product price"
                        style={style.txt}
                        value={price}
                        onChange={e=>setPrice(e.target.value)}
                        fullWidth />

                    <TextField
                        variant="outlined"
                        type="text"
                        name="quantity"
                        label="Quantity"
                        placeholder="Enter the quantity"
                        style={style.txt}
                        value={quantity}
                        onChange={e=>setQuantity(e.target.value)}
                        fullWidth />

                    <Button variant="contained" style={style.btn} onClick={saveStock}>Save</Button>

                </Container>
            </div>
        </>
    )
}
