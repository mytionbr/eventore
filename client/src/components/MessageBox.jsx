import { Alert } from "@mui/material"

function MessageBox(props) {
    return (
        <div style={{width:'100%'}}>
         <Alert variant="filled" severity={props.type}>
            {props.children}     
        </Alert>   
        </div>
    )
}

export default MessageBox