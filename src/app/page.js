'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Typography, Button, Box, CssBaseline, Grid, Card, CardContent, Link } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useRouter } from 'next/navigation';
import './styles/css/globals.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import CustomCursor from './components/cursor';
import Typed from 'typed.js';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import Image from 'next/image';

export default function Home() {
  const theme = useTheme();
  const router = useRouter();
  const el = useRef(null);
  const typed = useRef(null);
  // CSS for full-page sections and animation container
  const fullPageStyle = {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    scrollSnapAlign: 'start', // Ensures the section snaps into place
  };

  useEffect(() => {
    // Enable smooth scrolling
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'smooth';
    };
  }, []);


  
  useEffect(() => {
    const options = {
      strings: [
        "Powered by",
        "Matoshri College of Engineering And Research Center",
      ],
      typeSpeed: 70,
      backSpeed: 70,
      backDelay: 1000,
      startDelay: 500,
      loop: true,
      showCursor: true,
      cursorChar: '|',
    };

    typed.current = new Typed(el.current, options);
    return () => typed.current.destroy();
  }, []);

  const handleNavigation = (page) => {
    router.push(page);
    setMobileOpen(false);
  };

  const footerLinks = [
    { name: "Home", href: "/" },
    { name: "Events", href: "/events" },
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" }
];


  return (
    <>
      <CustomCursor />
      <CssBaseline />
      <NavBar />
      {/* Use a container to hold all sections for snapping */}
      <Box sx={{ overflow: 'auto', height: '100vh', scrollSnapType: 'y mandatory' }}>
        <Box sx={{
          ...fullPageStyle,
          position: 'relative',
          height: '100vh',
          backgroundImage: `url(/images/background.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          color: '#ffffff',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(0, 0, 5, 0.7)', /* Adjust the opacity (last value) to control the intensity of the black blur */
            zIndex: 1
          }
        }}>

          <Box sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,

            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: -1 // Ensure the overlay is behind the text and buttons
          }} />
          <Box sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
            zIndex: 2,
            p: 2,
            backdropFilter: 'blur(3px)', // Soften the background dots
            borderRadius: theme.shape.borderRadius,
            maxWidth: 1000,
          }}>

            <Typography component="h1" variant="h2" gutterBottom>
              Matoshri Technical Event Cell
            </Typography>
            <Typography component="h2" variant="h3" paragraph>
              Welcomes You
            </Typography>
            <Typography variant="h5" paragraph>
              <span ref={el} />
            </Typography>
            <Box sx={{ mt: 1 }}>
              <Button variant="contained" color="success" onClick={() => handleNavigation('/events')}>
                Events
              </Button>
              <Button variant="contained" color="tertiary" sx={{ m: 2 }} onClick={() => handleNavigation('/about')}>
                About Us
              </Button>
            </Box>
          </Box>
        </Box>




        <Box sx={{
    ...fullPageStyle,
    position: 'relative', // Required for absolute positioning of the title
    width: '80%',
    mx: 'auto', // Center the box horizontally
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: theme.palette.background.default, // Themed background for contrast
}}>
    {/* Absolute positioned "About Us" at the top left corner */}
    <Typography variant="h4" sx={{
        position: 'absolute',
        top: 0, // Position at the very top
        left: 0, // Position at the very left
        mt: 2, // Adjusted top margin for better visual separation
        ml: 2, // Adjusted left margin for aesthetic spacing from the edge
        fontWeight: 'bold',
        color: 'black',
        fontSize: '1.5rem', // Increased font size
    }}>
        About Us
    </Typography>

    <Grid container spacing={2} sx={{ pt: 8, px: 2 }}>
        {/* First Row: Logo on Left, Text on Right */}
        <Grid item xs={12} sm={6}>
            <Box component="img" 
                src="/images/mcoerc.png" 
                alt="Matoshri College of Engineering And Research Center Logo" 
                sx={{
                    height: 'auto',
                    width: '100%',
                    maxWidth: 150, // Increased maximum width for logo
                }}
            />
        </Grid>
        <Grid item xs={12} sm={6} sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="body1" sx={{ fontSize: '1.1rem' }}> 
                The Matoshri Technical Event Cell Powered by Matoshri College of Engineering and Research Centre acts as a catalyst for bridging the gap between classroom learning and practical industry applications.
            </Typography>
        </Grid>

        {/* Second Row: Text on Left, Logo on Right */}
        <Grid item xs={12} sm={6} sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="body1" sx={{ fontSize: '1.1rem' }}> 
                Creating a vibrant community that nurtures future technology leaders. We are dedicated to enriching the college experience by providing a platform where theoretical knowledge meets real-world application.
            </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
            <Box component="img" 
                src="/images/mtec_logo_or.png" 
                alt="Matoshri Technical Event Cell Logo" 
                sx={{
                    height: 'auto',
                    width: '100%',
                    maxWidth: 150, // Increased maximum width for logo
                }}
            />
        </Grid>
    </Grid>
</Box>


<Box sx={{
  ...fullPageStyle,
            backgroundColor: theme.palette.background.default,
            padding: theme.spacing(4),  // Increased padding for better spacing
            color: theme.palette.text.primary,  // Ensure text color matches theme for consistency
            borderTop: `3px solid ${theme.palette.divider}`,
            fontSize: '1rem',  // Adjust base font size if necessary
            height: '500px'
        }}>
            <Grid container spacing={3} > 
                <Grid item xs={12} md={6}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                        Important Links
                    </Typography>
                    {footerLinks.map((link, index) => (
                        <Typography key={index} sx={{ mt: 1 }}>
                            <Link href={link.href} color="inherit" sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                                {link.name}
                            </Link>
                        </Typography>
                    ))}
                </Grid>
                <Grid item xs={12} md={6} sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                }}>
                    <Image src="/images/mtec_logo.png" alt="Company Logo" width={200} height={200} />
                    <Box sx={{ ml: 2 }}>
                        <Typography variant="subtitle1">
                            Matoshri Technical Event Cell
                        </Typography>
                        <Typography variant="body2" sx={{ fontSize: '0.9rem' }}>
                            Matoshri College Of Engineering And Research Centre
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
            <Box sx={{ mt: 3, textAlign: 'center' }}>
                <Typography variant="body2">
                    © {new Date().getFullYear()} Matoshri Technical Event Cell. All rights reserved.
                </Typography>
                <Link href="/privacy" sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' }, fontSize: '0.9rem' }}>
                    Privacy & Policy
                </Link>
            </Box>
        </Box>

    </Box >
    </>
  );
}



