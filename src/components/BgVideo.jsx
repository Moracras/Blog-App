import React from 'react'
import video from "../assets/video/videoBg.mp4"
import { Box } from '@mui/material'

function BgVideo () {
    

    return(
        <Box sx={{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)"}} >
            <Box sx={{zIndex:"-1"}} className='"overlay'>
                <video  autoPlay loop muted>
                    <source src={video}/>
                </video>
            </Box>
        </Box>
    )
}


export default BgVideo