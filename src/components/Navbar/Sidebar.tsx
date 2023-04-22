import React from 'react'
import { Icon } from '@iconify/react';
import { Box } from '@mui/material';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useNavigate } from 'react-router-dom';


const Listitem = [
    {
        icon: "carbon:home",
        text: 'Home',
        path: '/dashboard'
    },
    {
        icon: "fluent:people-community-28-regular",
        text: 'Customers',
        path: '/customers'
    },
    {
        icon: "la:product-hunt",
        text: 'Products',
        path: '/products'
    },
    {
        icon: "iconoir:headset-help",
        text: 'Agents / Supervisor',
        path: '/agents-supervisor'
    },
    {
        icon: "ep:office-building",
        text: 'Companies',
        path: '/companies'
    },
    {
        icon: "la:rupee-sign",
        text: 'Collection',
        path: '/collection'
    },
    {
        icon: "iconoir:reports",
        text: 'Reports',
        path: '/reports'
    },
    {
        icon: "ph:chat-circle-text",
        text: 'Complaints',
        path: '/complaints'
    },
    {
        icon: "ph:wallet",
        text: 'SMS / Wallet',
        path: '/sms-wallet'
    },
    {
        icon: "la:money-bill-alt",
        text: 'Expenses',
        path: '/expenses'
    },
    {
        icon: "fluent:location-live-20-regular",
        text: 'Live Tracking',
        path: '/livetracking'
    },
]

const Sidebar = () => {
    const navigate = useNavigate();

    const handleItemClick = (path: any) => {
        navigate(path);
    }

    return (
        <Box sx={{ bgcolor: '#0C3547', height: '100%', width: '20%' }}>
            <List sx={{ color: 'white' }}>
                <ListItem disablePadding>
                    <ListItemButton sx={{ display: 'flex', gap: '15px', pl: '20px' }}>
                        <ListItemIcon sx={{ color: 'white', minWidth: 0 }}>
                            <Icon icon="ic:outline-dashboard" width='24px' height='24px' />
                        </ListItemIcon>
                        <ListItemText primary={'Dashboard'} sx={{ '& .MuiListItemText-primary': { fontWeight: '500', fontSize: '20px' } }} />
                    </ListItemButton>                                     
                </ListItem>
            </List>
            <Divider sx={{ bgcolor: 'white' }} />
            <List sx={{ color: 'white' }}>
                {
                    Listitem.map((item, index) => (
                        <ListItem key={index} disablePadding>
                            <ListItemButton sx={{ display: 'flex', gap: '15px', pl: '20px' }} onClick={() => handleItemClick(item.path)}>
                                <ListItemIcon sx={{ color: 'white', minWidth: 0 }}>
                                    <Icon icon={item.icon} width='24px' height='25px' />
                                </ListItemIcon>
                                <ListItemText primary={item.text} sx={{ '& .MuiListItemText-primary': { fontWeight: '400', fontSize: '16px' } }} />
                            </ListItemButton>
                        </ListItem>
                    ))
                }
            </List>
        </Box>
    )
}

export default Sidebar
