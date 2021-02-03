import { useState } from "react";
import { Container, Card, CardContent,CardActions, CardHeader, Button, Typography } from "@material-ui/core";
import EditProduct from "./EditProduct";

const style={
    card:{
        margin: "1rem"
    }
}

export default function StockLists({value}) {
    const [openEditForm, setOpenEditForm] = useState(false)
    const {description,price} = value

    const renderEditForm=()=>{
        return openEditForm===true ? <EditProduct close={()=>setOpenEditForm(false)} /> : null;
    }

    return (
        <div>
            <Container>
                <Card style={style.card} variant="outlined">
                    <CardHeader title={description} />
                    <CardContent>
                            <Typography variant="body2">{price} pesos</Typography>
                        </CardContent>
                        <CardActions>
                            <Button variant="contained" color="primary">Add Stock</Button>
                            <Button variant="contained" color="secondary" onClick={()=>setOpenEditForm(true)}>Edit</Button>
                        </CardActions>
                </Card>
                {renderEditForm()}
            </Container>
        </div>
    )
}
