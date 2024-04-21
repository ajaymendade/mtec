import React from 'react';
import { Box, Grid, Link, Typography, useTheme } from '@mui/material';
import Image from 'next/image';

function Footer() {
    const theme = useTheme();

    const footerLinks = [
        { name: "Home", href: "/" },
        { name: "Events", href: "/events" },
        { name: "About Us", href: "/about" },
        { name: "Contact Us", href: "/contact" }
    ];

    return (
        <Box sx={{
            backgroundColor: theme.palette.background.default,
            padding: theme.spacing(4),  // Increased padding for better spacing
            color: theme.palette.text.primary,  // Ensure text color matches theme for consistency
            borderTop: `3px solid ${theme.palette.divider}`,
            fontSize: '1rem',  // Adjust base font size if necessary
            paddingLeft: 20,
            paddingRight: 10,
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
    );
}

export default Footer;
