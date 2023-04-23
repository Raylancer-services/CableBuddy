import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, Stack } from '@mui/material';
import { Icon } from '@iconify/react';
import { ClientData } from './OurClientsData';
import { v4 as uuidv4 } from 'uuid';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const CustomButtonGroup = ({ next, previous, carouselState }) => {       
    const { currentSlide, slidesToShow, totalItems } = carouselState;
    const firstVisibleIndex = currentSlide;
    const lastVisibleIndex = currentSlide + slidesToShow - 1;
    const showLeftArrow = firstVisibleIndex > 0;
    const showRightArrow = lastVisibleIndex < totalItems - 1;

    return (
        <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', position: 'absolute', zIndex: 5 }}>
            {showLeftArrow && (
                <Button disableTouchRipple onClick={previous} sx={{ position: 'absolute', left: '10px', '&:hover': { backgroundColor: 'transparent' } }}>
                    <Icon icon="bi:arrow-left-circle-fill" color='#FF1818' width='45px' />
                </Button>
            )}
            {showRightArrow && (
                <Button disableTouchRipple onClick={next} sx={{ position: 'absolute', right: '10px', '&:hover': { backgroundColor: 'transparent' } }}>
                    <Icon icon="bi:arrow-right-circle-fill" color='#FF1818' width='45px' />
                </Button>
            )}
        </Box>
    )
}
const DocumentsCard = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 1536 },
            items: 3
        },
        desktop: {
            breakpoint: { max: 1536, min: 1100 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1100, min: 800 },
            items: 3
        },
        bigmobile: {
            breakpoint: { max: 800, min: 400 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 400, min: 0 },
            items: 1
        }
    };
    return (
        <Carousel responsive={responsive} customButtonGroup={<CustomButtonGroup />} arrows={false}>
            {
                ClientData.map((card) => (
                    <Card elevation={4} key={uuidv4()} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px', width: '350px', height: '500px', padding: '15px', borderRadius: '8px' }}>
                        <CardMedia
                            component="img"
                            image={card.image}
                            sx={{ height: '60%', objectFit: 'cover', objectPosition: 'center', borderRadius: '8px' }}
                        />
                        <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: '5px', flexGrow: 1 }}>
                            <Typography sx={{ fontWeight: '600', fontSize: '16px' }}>{card.name}</Typography>
                            <Typography sx={{ fontWeight: '400', fontSize: '14px', color: '#A5A4A4' }}>{card.place}</Typography>
                            <Typography sx={{ fontWeight: '400', fontSize: '14px', color: '#A5A4A4', mt: '5px' }}>{card.about}</Typography>
                        </CardContent>
                    </Card>
                ))
            }
        </Carousel>
    )
}

export default DocumentsCard
