import { Container, Card, CardContent,CardActions, CardHeader, Button, Typography } from "@material-ui/core";

const style={
    card:{
        margin: "1rem"
    }
}

export default function StockLists({value}) {
    const {description,price} = value
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
                            <Button variant="contained" color="secondary">Edit</Button>
                        </CardActions>
                </Card>
            </Container>
        </div>
    )
}
