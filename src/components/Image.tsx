import React from 'react'
import Box from '@mui/material/Box'

const Image = (props: any) => {
    return (
        <Box component='img' src={props.src} alt={props.alt} {...props}></Box>
    )
}

export default Image
