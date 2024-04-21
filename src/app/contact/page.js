'use client';

import React, { useState } from 'react';
import { Typography, TextField, Button, Box, CssBaseline} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import CustomCursor from '../components/cursor';
import { useRouter } from 'next/navigation';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

export default function Contact() {
    const theme = useTheme();
    const router = useRouter();
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <>
            <CustomCursor />
            <CssBaseline />
            <NavBar />
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '100vh',
                backgroundColor: theme.palette.background.default,
            }}>
                <Typography variant="h4" color="black" sx={{ marginBottom: theme.spacing(2) }}>
                    Contact Us
                </Typography>
                <form
                    noValidate
                    autoComplete="off"
                    style={{ width: '100%', maxWidth: 460 }}
                    sx={{
                        width: '100%',
                        maxWidth: '460px',
                        padding: { xs: '0 20px', sm: 0 } // Adds padding on the smallest breakpoint, no padding from the 'sm' breakpoint and up.
                    }}
                >
                    <TextField
                        fullWidth
                        label="Name"
                        variant="outlined"
                        margin="normal"
                        required
                        InputProps={{
                            style: { color: 'black' } // White text color for input
                        }}
                        InputLabelProps={{
                            style: { color: 'black' } // White text color for label
                        }}
                        sx={{ backgroundColor: theme.palette.background.default }}
                    />
                    <TextField
                        fullWidth
                        label="Email"
                        type="email"
                        variant="outlined"
                        margin="normal"
                        required
                        InputProps={{
                            style: { color: 'black' } // White text color for input
                        }}
                        InputLabelProps={{
                            style: { color: 'black' } // White text color for label
                        }}
                        sx={{ backgroundColor: theme.palette.background.default }}
                    />
                    <TextField
                        fullWidth
                        label="Subject"
                        variant="outlined"
                        margin="normal"
                        required
                        InputProps={{
                            style: { color: 'black' } // White text color for input
                        }}
                        InputLabelProps={{
                            style: { color: 'black' } // White text color for label
                        }}
                        sx={{ backgroundColor: theme.palette.background.default }}
                    />
                    <TextField
                        fullWidth
                        label="Message"
                        variant="outlined"
                        margin="normal"
                        required
                        multiline
                        rows={4}
                        InputProps={{
                            style: { color: 'black' } // White text color for input
                        }}
                        InputLabelProps={{
                            style: { color: 'black' } // White text color for label
                        }}
                        sx={{ backgroundColor: theme.palette.background.default }}
                    />
                    <Button variant="contained" color="primary" sx={{ marginTop: theme.spacing(2) }}>
                        Send Message
                    </Button>
                </form>
            </Box>
            <Footer />
        </>
    );
}
