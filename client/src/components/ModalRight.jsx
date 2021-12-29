import { Avatar, Drawer, IconButton } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const ModalRight = ({handleOpenModal,openModal, form,}) => {
    return (
        <Drawer
            anchor="right"
            onClose={handleOpenModal}
            open={openModal}
            variant="temporary"
            sx={{
                '& .MuiDrawer-paper': {
                    width: '400px',
                    boxSizing: 'border-box',
                    p: 1,
                    overflow: 'auto',
                }        
            }}
        >
            <Box>
            <Avatar>
                <IconButton onClick={handleOpenModal}>
                    <ArrowBackIcon />
                </IconButton>
            </Avatar>
            </Box>
            {form}
        </Drawer>
    )
}

export default ModalRight
