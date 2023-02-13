import { Button, Grid, Typography} from "@mui/material";
import React, {useState}from "react";
import flyingHearts from "./images/flyingHearts.gif"
import dance from "./images/dance.gif"
import { Box } from "@mui/system";
import {TbHandFinger} from 'react-icons/tb'
import {TfiGift} from 'react-icons/tfi'
import { useNavigate } from "react-router-dom";


const PositiveResponse = () =>{

    const hidden = "////////////////////////////////"
    const show = "YOU HAVE TO PLAN THE DATE"
    const [hiddenText,setHiddenText] = useState(hidden)
    const navigate = useNavigate()

    const showOrHideText = () =>{
        if(hiddenText === hidden){
            setHiddenText(show) 
        }
        else{
            setHiddenText(hidden)
        }

    }
    const showGiftPage = () =>{
        navigate('/gift')
    }

    return(
        <>
       <Grid style={{display:"flex",alignItems:"center",flexDirection:"column",height:"100vh",width:"100%",background:"black"}}>
            <Grid>
            <Box style={{backgroundImage: `url(${flyingHearts})`,color:"white",height:"20rem",width:"26rem",backgroundRepeat:"no-repeat"}}>
                <Grid style={{display:"flex",alignItems:"center",flexDirection:"column"}}>
                 <Button onClick={showOrHideText}><Typography style={{color:"white",marginTop:"2rem"}}>{hiddenText}</Typography></Button>
                 <Typography hidden={hiddenText===show}>{"click & reveal"}<TbHandFinger/></Typography>   
                </Grid>
            </Box>
            </Grid>
            <Grid style={{color:"white"}}>
                <Typography>I've got you a gift</Typography>
                <Button onClick={showGiftPage} style={{width:"8rem"}}><Typography style={{color:"red",fontSize:"3rem"}}><TfiGift/></Typography></Button>
            </Grid>
            <Grid>
            <Box style={{backgroundImage: `url(${dance})`,color:"white",height:"7rem",width:"6rem",backgroundRepeat:"no-repeat"}}></Box> 
            </Grid>
        </Grid>
        </>
    )
}

export default PositiveResponse