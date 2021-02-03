import { TextField,Container,Button, Typography } from "@material-ui/core";


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
export default function EditProduct({close}) {
    return (
        <div style={style.modalBg}>
            <Container maxWidth="xs" style={style.modalContent}>
               
               <Typography variant="h4" component="h1">Edit Form</Typography>

                    <TextField
                        variant="outlined"
                        type="text"
                        label="Description"
                        name="description" />

                    <TextField
                        variant="outlined"
                        type="number"
                        label="Price"
                        name="price" />

                    <Button variant="contained" color="primary">Save</Button>
                    <Button variant="outlined" color="secondary" onClick={close}>Cancel</Button>
               
            </Container>
        </div>
    )
}
