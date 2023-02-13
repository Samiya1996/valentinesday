import React, {useState,useEffect} from "react";
import { Grid,Button, Typography,Box, Paper, Card, Dialog } from "@mui/material";
import {makeStyles} from "@mui/material";
import propose from "./images/propose.gif"
import {ImWarning} from 'react-icons/im'
import {BsEmojiHeartEyesFill} from 'react-icons/bs'
import { useNavigate } from "react-router-dom"

const ProposalPage = () =>{

    //const classes = useStyles();
  const [text, setText] = useState("")
const [fullText, setFullText] = useState(
    
    "Will you be my valentine?"
  )
const [index, setIndex] = useState(0)
const navigate = useNavigate()


const handleClickNegetive = ()=>{
  navigate('/killed')
}

const handleClickPositive = () =>{
  navigate('/endofstory')
}

useEffect(() => {
    if (index < fullText.length) {
      setTimeout(() => {
        setText(text + fullText[index])
        setIndex(index + 1)
      }, 50)
    }
  }, [index])
    return(
        <React.Fragment>
            <Paper style={{height:"100vh",width:"100%",backgroundColor:"white"}}>
                <Box style={{minWidth: "100%",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center"}}>
        <Card style={{maxWidth: "100%",
    display: "flex",
    alignItems: "center",
    flexDirection:"column",
    boxShadow:"none"}}>
          <Box style={{backgroundImage: `url(${propose})`,color:"white",height:"12rem",width:"14rem"}}></Box>
        </Card>
        <Card style={{maxWidth: "100%",
    minHeight: "15vh",
    display: "flex",
    alignItems: "center",
    flexDirection:"column",
    color:"red",
    boxShadow:"none"}}>
        <Typography>Sulk Kumar</Typography>
        
            <Grid style={{padding:"20px",paddingTop:"0px"}}>
                <Typography style={{fontSize:"1.6rem",fontWeight:"600"}}>{text}</Typography>
                </Grid>
            <Grid>
            <Button onClick={handleClickPositive} style={{margin:"10px",background: "red"}} variant="contained">100 times yes<BsEmojiHeartEyesFill style={{marginLeft:"5px"}}/></Button>
            <Button onClick={handleClickNegetive} style={{margin:"10px",background: "red"}} variant="contained">Try with a no<ImWarning style={{marginLeft:"5px"}}/></Button>
            </Grid>
          </Card> 
            </Box>
          </Paper>
        </React.Fragment>
        
    )
}

export default ProposalPage