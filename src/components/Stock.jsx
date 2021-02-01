import { useState, useEffect } from "react";
import axios from 'axios';
import {Container, Typography, Fab} from '@material-ui/core';

import NewStock from "./NewStock";
import StockLists from './StockLists';

import firebase from 'firebase/app';
import '../config';
import 'firebase/firestore';

// api
let api = "https://aqueous-everglades-23747.herokuapp.com/api"

const style={
    btn:{
        position: "fixed",
        bottom: 3,
        right: 3
    }
}

export default function Stock() {
    const [stock, setStock] = useState([]);
    const [newStockForm, setNewStockForm] = useState(false)

    const renderNewForm=()=>{
        return newStockForm===true ? <NewStock close={()=>setNewStockForm(false)}/> : null;
    }

    const loadStock =()=>{
        axios.get(`${api}/product`).then(items=>setStock(items.data)).catch(err=>console.log(err.message))
    }
   
   
    useEffect(() => {
        loadStock()
    },[stock])

    const renderStockLists=()=>{
       return stock.map(item=>{
            return <StockLists key={item._id} value={item} />
        })
    }

    return (
        <>
            <Container maxWidth="xs">
                <Typography variant="h6">
                    Available Stocks
                </Typography>
                <Fab variant="extended" color="primary" style={style.btn} onClick={()=>setNewStockForm(true)}>New</Fab>
                {renderNewForm()}
                {renderStockLists()}
            </Container>
        </>
    )
}
