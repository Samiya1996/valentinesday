import React from "react";
import { Button, Grid, Typography } from "@mui/material";
import kill from "./images/kill.gif"
import { Box } from "@mui/system";
import {FaSadTear} from 'react-icons/fa'
import { useNavigate } from "react-router-dom";

const ReplyOnNegetiveResponse = () =>{

    const navigate = useNavigate()

    const backToProp = () =>{
        navigate("/prop")
    }
    return(
        <React.Fragment>
            <Grid style={{display:"flex",alignItems:"center",flexDirection:"column",marginTop:"60px"}}> 
                <Grid>
                    <Box style={{backgroundImage: `url(${kill})`,color:"white",height:"19rem",width:"26rem",backgroundRepeat:"no-repeat"}}></Box>
                </Grid>
                <Grid>
                    <Button onClick={backToProp} style={{background:"#b91919de"}} variant="contained">Please take me back<FaSadTear style={{marginLeft:"6px"}}/></Button>
                </Grid>

            </Grid>
        </React.Fragment>
    )
}

export default ReplyOnNegetiveResponse