import { CircularProgress } from '@mui/material'
import React from 'react'

function LoadingBox({color}) {
    return (
        <div>
            <CircularProgress color={color? color : "secondary"} />
        </div>
    )
}

export default LoadingBox