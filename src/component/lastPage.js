import React, {useState} from "react";
import {Box, Paper, Grid, Typography, Button, Dialog, DialogContent, DialogActions} from "@mui/material";
import cry2 from "./images/cry2.jpg"


const GiftPage = () =>{

    const [dialogOpen,setDialogOpen] = useState(false)

    const handleClick = () =>{
        setDialogOpen(true)
    }
    const dialogClose = () =>{
        setDialogOpen(false)
    }
    return (
        <React.Fragment>
            
                <Box style={{minWidth: "100%",}}>
                 <Grid style={{display: "flex",
    alignItems: "center",
    flexDirection:"column"}}>
        <Box style={{display: "flex",backgroundImage: `url(${cry2})`,
    alignItems: "center",
    flexDirection:"column",height: "28vh",
    width: "30vh",backgroundRepeat:"no-repeat", marginTop:"20px"}}>
                    </Box>    
        </Grid>   
                
        <Grid style={{display: "flex",
    alignItems: "center",
    flexDirection:"column"}}><Typography variant="h6">Oh no! Content not found</Typography></Grid>
    <Grid style={{display: "flex",
    alignItems: "center",
    flexDirection:"column"}}><Button onClick={handleClick} style={{color:"red",textTransform:"none"}} >Tell me why</Button></Grid>
        </Box>  
<Dialog
open={dialogOpen}
onClose={dialogClose}>
    <DialogContent>
        <Typography>{'Reason 1: Once a great woman said "18hrs of sleep is more important than such stupid things"'}</Typography>
        <Typography>{'Reason 2: Sulk Kumar sulks a lot after reciving gift'}</Typography>
        <Typography>{'Reason 3: My small sized brain ran out of ideas'}</Typography>
    </DialogContent>
    <DialogActions>
        <Button onClick={dialogClose}>Got it</Button>
    </DialogActions>
</Dialog>


        </React.Fragment>
    )
}

export default GiftPage