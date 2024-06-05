'use client';

import React, { useState } from 'react';
import { Typography, Box, CssBaseline, Card, CardMedia, CardContent, CardActions, Grid, Drawer, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import CustomCursor from '../components/cursor';
import { useRouter } from 'next/navigation';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

export default function Events() {
    const theme = useTheme();
    const router = useRouter();
    const [mobileOpen, setMobileOpen] = useState(false);


    const events = [
        {
            id: 2,
            category: "competition",
            image: "/assets/event2.jpg",
            name: "PBL Competition",
            date: "15", // Assumed date
            month: "MAy", // Assumed month
            year: "2024", // Assumed year
            duration: "Full day", // Assumed duration
            time: "09:00",
            location: "Auditorium",
            mode: "In-person",
            description: "This is event Description containing summary of event. UPTO 3 lines. This is event Description containing summary of event"
        },
        {
            id: 3,
            category: "competition",
            image: "/assets/event3.jpg",
            name: "Pre - Practical Competition",
            date: "25", // Assumed date
            month: "MaY", // Assumed month
            year: "2024", // Assumed year
            duration: "Full day", // Assumed duration
            time: "09:00",
            location: "Laboratory",
            mode: "In-person",
            description: "This is event Description containing summary of event. UPTO 3 lines. This is event Description containing summary of event"
        },
        {
            id: 4,
            category: "quiz",
            image: "/assets/event4.jpg",
            name: "Online Weekend Quiz",
            date: "15", // Assumed date
            month: "May", // Assumed month
            year: "2024", // Assumed year
            duration: "2 hours",
            time: "20:00",
            location: "Online",
            mode: "Remote",
            description: "This is event Description containing summary of event. UPTO 3 lines. This is event Description containing summary of event"
        },
        {
            id: 5,
            category: "competition",
            image: "/assets/event5.jpg",
            name: "Hackathon (M.Hacks)",
            date: "10", // Assumed date
            month: "June", // Assumed month
            year: "2024", // Assumed year
            duration: "48 hours",
            time: "10:00",
            location: "Tech Park",
            mode: "In-person",
            description: "This is event Description containing summary of event. UPTO 3 lines. This is event Description containing summary of event"
        },
        {
            id: 6,
            category: "competition",
            image: "/assets/event6.jpg",
            name: "IOT Competition",
            date: "7", // Assumed date
            month: "Jul", // Assumed month
            year: "2024", // Assumed year
            duration: "Full day",
            time: "09:00",
            location: "Auditorium",
            mode: "In-person",
            description: "This is event Description containing summary of event. UPTO 3 lines. This is event Description containing summary of event"
        },
        {
            id: 7,
            category: "workshop",
            image: "/assets/event7.jpg",
            name: "Workshop (Career Oriented)",
            date: "20", // Assumed date
            month: "Aug", // Assumed month
            year: "2024", // Assumed year
            duration: "5 hours",
            time: "10:00",
            location: "Conference Room",
            mode: "In-person",
            description: "This is event Description containing summary of event"
        },
        {
            id: 8,
            category: "competition",
            image: "/assets/event8.jpg",
            name: "Gaming Competition",
            date: "9", // Assumed date
            month: "Sep", // Assumed month
            year: "2024", // Assumed year
            duration: "Full day",
            time: "09:00",
            location: "Recreation Hall",
            mode: "In-person",
            description: "This is event Description containing summary of event"
        },
        {
            id: 9,
            category: "exhibition",
            image: "/assets/event9.jpg",
            name: "Robothon",
            date: "30", // Assumed date
            month: "Oct", // Assumed month
            year: "2024", // Assumed year
            duration: "3 days",
            time: "09:00",
            location: "Tech Park",
            mode: "In-person",
            description: "This is event Description containing summary of event"
        },

    ];
    


    return (
        <>
            <CustomCursor />
            <CssBaseline />
            <NavBar />
            <Box sx={{ flexGrow: 1, p: 3, maxWidth: 1280, mx: 'auto' }}>
                <Typography variant="h3" component="h1" gutterBottom sx={{ color: 'black', fontWeight: 'bold', mb: 8, textAlign: 'center' }}>
                    Events
                </Typography>
                
                <Grid container spacing={2} justifyContent="center">
                    
                    {events.map((event) => (
                        
                        <Grid item xs={12} sm={6} md={4} key={event.id}>
                            <Card sx={{
                                maxWidth: 345,
                                m: 'auto',
                                border: '1px solid #454545', // Dark grey border
                                boxShadow: '0px 7px 20px rgba(0, 0, 0, 0.1)', // Pronounced shadow for depth
                                borderRadius: '10px', // Rounded corners
                                overflow: 'hidden', // Ensures the image and card edges align
                                mb: 4,
                                transform: 'scale(1)', // Initial scale
                                transition: 'transform 0.3s ease-in-out', // Smooth transition
                                '&:hover': {
                                    transform: 'scale(1.02)', // Scale up on hover
                                    boxShadow: '0px 0px 50px rgba(0, 0, 0, 0.15)' // Darker shadow on hover
                                }
                            }}>


                                {/* Headerimage of the event */}
                                <CardMedia
                                    component="img"
                                    height="250"
                                    image="/images/cards.jpg"
                                    alt={event.name}
                                    sx={{
                                        objectFit: 'cover' // Ensures the image covers the area properly without stretching
                                    }}
                                />


                                {/* Information about the event */}
                                {/* very faint background for text */}
                                <CardContent sx={{
                                    color: theme.palette.primary.contrastText,
                                    p: 2.5, // Padding around the content
                                    bgcolor: 'rgba(0, 0, 0, 0.2)', // Slight background tint for better readability
                                    textAlign: 'left', // Center aligns the text
                                    borderRadius: '0px 0px 15px 15px' // Rounded corners for the bottom of the card
                                }}>
                                    


                                {/* Catogory for the event */}
                                <Typography 
                                    gutterBottom variant='tag' 
                                    position={'absolute'}  
                                    top='3%' 
                                    left='3%' 
                                    component="div" 
                                    sx={{ mb: 2 }}
                                >
                                    {event.category}
                                </Typography>
                                    

                                {/* Event Name */}
                                <Typography 
                                    gutterBottom 
                                    variant='h5' 
                                    component='div' 
                                    sx={{ mv: 2}} 
                                    padding='20px 0px 60px' 
                                >
                                    {event.name}
                                </Typography>
                                
                                
                                {/* Event description */}
                                <Typography 
                                    variant="body2" 
                                    sx={{ lineHeight: 1.5 }} 
                                    textAlign={'justify'}
                                >
                                    {event.description}
                                </Typography>


                                {/* Event properties */}
                                <Typography 
                                    variant='body2' 
                                    textAlign={'justify'} 
                                    color='rgba(200,200,200,0.9 )' 
                                    margin='30px 0px 10px'
                                    fontSize='0.8rem'
                                >
                                    {/* Event date and time */}
                                    {event.date} {event.month.charAt(0).toUpperCase() + event.month.slice(1).toLowerCase()}, {event.year} {event.time} ({event.duration}){/*converted month to title case*/}
                                    <br />
                                    
                                    {event.location} ({event.mode})
                                </Typography>


                                {/* Action Buttons */}
                                </CardContent>
                                <CardActions 
                                    sx={{
                                        justifyContent: 'flex-end', // Right aligns the buttons
                                        p: 2 // Padding for the action area
                                }}>
                                    <Button position={'absolute'} bottom='50%' variant="contained" color="success" size="small" >Apply</Button>
                                    <Button variant="outlined" color="success" size="small">Details</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>

                <Footer/>
            </Box>

        </>
    );
}
