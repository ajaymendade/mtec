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
            image: "/assets/event2.jpg",
            name: "PBL Competition",
            date: "2024-04-15", // Assumed date
            duration: "Full day", // Assumed duration
            time: "09:00",
            location: "Auditorium",
            mode: "In-person"
        },
        {
            id: 3,
            image: "/assets/event3.jpg",
            name: "Pre - Practical Competition",
            date: "2024-05-01", // Assumed date
            duration: "Full day", // Assumed duration
            time: "09:00",
            location: "Laboratory",
            mode: "In-person"
        },
        {
            id: 4,
            image: "/assets/event4.jpg",
            name: "Online Weekend Quiz",
            date: "2024-05-15", // Assumed date
            duration: "2 hours",
            time: "20:00",
            location: "Online",
            mode: "Remote"
        },
        {
            id: 5,
            image: "/assets/event5.jpg",
            name: "Hackathon (M.Hacks)",
            date: "2024-06-10", // Assumed date
            duration: "48 hours",
            time: "10:00",
            location: "Tech Park",
            mode: "In-person"
        },
        {
            id: 6,
            image: "/assets/event6.jpg",
            name: "IOT Competition",
            date: "2024-07-01", // Assumed date
            duration: "Full day",
            time: "09:00",
            location: "Auditorium",
            mode: "In-person"
        },
        {
            id: 7,
            image: "/assets/event7.jpg",
            name: "Workshop (Career Oriented)",
            date: "2024-08-20", // Assumed date
            duration: "5 hours",
            time: "10:00",
            location: "Conference Room",
            mode: "In-person"
        },
        {
            id: 8,
            image: "/assets/event8.jpg",
            name: "Gaming Competition",
            date: "2024-09-05", // Assumed date
            duration: "Full day",
            time: "09:00",
            location: "Recreation Hall",
            mode: "In-person"
        },
        {
            id: 9,
            image: "/assets/event9.jpg",
            name: "Robothon",
            date: "2024-10-10", // Assumed date
            duration: "3 days",
            time: "09:00",
            location: "Tech Park",
            mode: "In-person"
        },
        {
            id: 10,
            image: "/assets/event10.jpg",
            name: "Industrial/Historical Visit",
            date: "2024-11-01", // Assumed date
            duration: "Full day",
            time: "08:00",
            location: "Off Campus",
            mode: "In-person"
        }
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
                                boxShadow: '0px 4px 60px rgba(0, 0, 0, 0.5)', // Pronounced shadow for depth
                                borderRadius: '12px', // Rounded corners
                                overflow: 'hidden', // Ensures the image and card edges align
                                mb: 4,
                            }}>
                                <CardMedia
                                    component="img"
                                    height="250"
                                    image="/images/cards.jpg"
                                    alt={event.name}
                                    sx={{
                                        objectFit: 'cover' // Ensures the image covers the area properly without stretching
                                    }}
                                />
                                <CardContent sx={{
                                    color: theme.palette.primary.contrastText,
                                    p: 2, // Padding around the content
                                    bgcolor: 'rgba(0, 0, 0, 0.04)', // Slight background tint for better readability
                                    textAlign: 'center', // Centers the text
                                }}>
                                    <Typography gutterBottom variant="h5" component="div" sx={{ mb: 2 }}>
                                        {event.name}
                                    </Typography>
                                    <Typography variant="body2" sx={{ lineHeight: 1.5 }}>
                                        <strong>18 April, 2024</strong> || <strong>1.30 pm</strong><br />
                                        <strong>2 days</strong><br />
                                        <strong>{event.location}</strong><br />
                                        <strong>{event.mode}</strong>
                                    </Typography>
                                </CardContent>
                                <CardActions sx={{
                                    justifyContent: 'center', // Center aligns the buttons
                                    p: 1.5 // Padding for the action area
                                }}>
                                    <Button variant="contained" color="success" size="small">Apply</Button>
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
