import { Box, List,Paper, ListItem, ListItemIcon, ListItemText, styled } from '@mui/material'
import React from 'react'
import { NavLink, useLocation,matchPath } from 'react-router-dom'

const ITEMS = [
    {
        title: 'Meus eventos',
        path: '/app/myevents'
    },
    {
        title: 'Comunidade',
        path: '/app/community'
    },
    {
        title: 'Agenda',
        path: '/app/scheduled'
    }
]

const RootStyle = styled(Paper)({
    width: 250,
    minHeight: '100%'
})

const NavItem  = ({item, active})=>{
    const { title, path } = item;
    const isActiveRoot = active(item.path);

    return (
        <ListItem
            key={title}
            component={NavLink}
            to={path}
            sx={{
                color: isActiveRoot ? 'text.primary' : 'black',
                fontWeight: isActiveRoot ? '700' : '500'
        }}
        >
            <ListItemText disableTypography primary={item.title} />
        </ListItem>
    )
}

const Sidebar = () => {
    const { pathname } = useLocation();
    const active = (path) => (path ? !!matchPath({ path, end: false }, pathname) : false);
  
    return (
        <RootStyle elevation={11}>
            <Box sx={{px: 2.5, py: 3}}>
                {
                    ITEMS.map(item=>(
                        <NavItem item={item} active={active} />
                    ))
                }
            </Box>
        </RootStyle>
    )
}

export default Sidebar
