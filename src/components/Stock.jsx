import { useState, useEffect } from "react";
import axios from 'axios';
import {Container, Typography, Fab, TextField, Button} from '@material-ui/core';

import NewStock from "./NewStock";
import StockLists from './StockLists';

// api
let api = "https://aqueous-everglades-23747.herokuapp.com/api"

const style={
    btn:{
        position: "fixed",
        bottom: 3,
        right: 3
    },
    textSearch:{
        display: "flex",
        width: "100%",
        justifyContent: "center"
    }
}

export default function Stock() {
    const [stock, setStock] = useState([]);
    const [newStockForm, setNewStockForm] = useState(false);
    const [search, setSearch] = useState("")

    const renderNewForm=()=>{
        return newStockForm===true ? <NewStock close={()=>setNewStockForm(false)}/> : null;
    }

    const loadStock =()=>{
        if (search===""){
            try {
                axios.get(`${api}/product`).then(items=>setStock(items.data)).catch(err=>console.log(err.message))      
            } catch (error) {
                console.log(error.message)
            }
        }else{
            try{
                handleSearch()
            }catch(error){
                console.log(error.message)
            }
        }
    }
   
   
    useEffect(() => {
        loadStock()
    },[stock])

   

    const renderStockLists=()=>{
       return stock.map(item=>{
            return <StockLists key={item._id} value={item} />
        })
    }

    const handleSearch=()=>{
        axios.get(`${api}/product/${search}`).then(product=>setStock(product.data));
    }

    return (
        <>
            <Container maxWidth="xs">
                <Typography variant="h6">
                    Available Stocks
                </Typography>
                <div style={style.textSearch}>
                    <TextField
                        variant="outlined"
                        name="search"
                        type="text"
                        label="Search"
                        placeholder="Search Product Description"
                        value={search}
                        onChange={(e)=>setSearch(e.target.value)} />
                </div>
                <Fab variant="extended" color="primary" style={style.btn} onClick={()=>setNewStockForm(true)}>New</Fab>
                {renderNewForm()}
                {renderStockLists()}
            </Container>
        </>
    )
}
