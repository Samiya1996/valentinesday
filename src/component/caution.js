import React, {useState,useEffect} from "react";
import { Grid,Button, Typography,Box, Paper, Alert,FormGroup,FormControlLabel,Checkbox,Snackbar, Dialog,DialogActions,
DialogContent} from "@mui/material";
import { ImHeart } from 'react-icons/im';
import {ImMusic} from 'react-icons/im'
import { useNavigate } from "react-router-dom"

import {makeStyles} from "@mui/material";
import simpson from "./images/simpson.gif"
import stare from  "./images/stare.gif"

const Caution = () =>{
  
const [checked,setChceked] = useState(false)  
const [dialogOpen,setDialogOpen] = useState(false)
const [openSnackbar,setOpenSnackbar] = useState(false)  
const [text, setText] = useState("")
const [fullText, setFullText] = useState(
    "You are about to see a whole new level of cringe fest. Strong hearted people stay away, there is a high chance that you are gonna wish for permanent blindness after viewing such content. You might also get highly motivated to leave this planet forever. For any such case creator is not responsible. Still wanna take risk?"
  )
const [index, setIndex] = useState(0)
const navigate = useNavigate()
useEffect(() => {
    
    if (index < fullText.length) {
      setTimeout(() => {
        setText(text + fullText[index])
        setIndex(index + 1)
      }, 50)
    }
  }, [index])

  
    const handleButtonClick = () =>{
        console.log("checked ", checked)
        
        if(checked ===false){
            setOpenSnackbar(true)
            return
        }
        setDialogOpen(true)
        
      }
  
  
  const handleCheckClick = () =>{
    setChceked(!checked)
  }
  const handleClose = () =>{
    setOpenSnackbar(false)
  }
  const handleDialogClose = () =>{
    setDialogOpen(false)
  }
  const goToPropSection = () =>{
    navigate('./prop')
  }
  

    return(
        <>
        <Paper style={{height:"100vh",width:"100%",backgroundColor:"black"}}>
            <Box style={{ margin:"auto",width:"50%",height:"28%"}}>
                <br/>
                <Box style={{backgroundImage: `url(${simpson})`,margin:"auto",height:"165px",width:"220px"}}></Box> 
            </Box>
            <Box style={{margin:"auto",width:"85%",height:"30%"}}>
        <Grid style={{display: "flex",
    alignItems: "center",
    flexDirection:"column"}}>
        <Typography style={{color:"cornsilk",letterSpacing:"1.5px"}}>{text}</Typography>
    </Grid>  
    </Box>
    <Grid style={{display: "flex",
    alignItems: "center",flexDirection:"column",marginLeft:"7px"}}>
    <FormGroup>
  <FormControlLabel control={<Checkbox onClick={()=>handleCheckClick()}  sx={{
    color: "cornsilk",
    '&.Mui-checked': {
      color: "red"
    },
    '&.MuiFormControlLabel-label' :{
        color:"cornsilk"
    },
  }}/>} label={<Typography style={{color:"cornsilk"}}>By clicking this you are accepting that you are Un poco loco</Typography>} />
  
</FormGroup>
    </Grid>     
    <br/>
    <Grid style={{display: "flex",
    alignItems: "center",
    flexDirection:"column"}}>
        <Button onClick={()=>handleButtonClick()} variant="contained" style={{backgroundColor:"green"}}>I'm nodding and I'm yessing <ImMusic style={{marginLeft:"5px"}}/></Button>
    </Grid>
    
        </Paper>
        <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={openSnackbar}
        autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
            Bang your head against wall to find out what's wrong
        </Alert>
             </Snackbar>

            <Dialog
            open={dialogOpen}
            onClose={handleDialogClose}
            fullWidth
            >
                
                <DialogContent>
                    <Box style={{backgroundImage: `url(${stare})`,margin:"auto",height:"139px",width:"220px"}}></Box>
                </DialogContent>
                <br/>
                <br/>
                <DialogActions style={{justifyContent:"center"}}>
                    <Button onClick={goToPropSection} style={{background:"#841515"}} variant="contained" >Yes, Take me to cringe country <ImHeart style={{color:"whitesmoke",fontSize:"10px",marginLeft:"7px"
                }}/></Button>
                    
                </DialogActions>
                <br/>
                
            </Dialog> 



        </>
    )
}

export default Caution