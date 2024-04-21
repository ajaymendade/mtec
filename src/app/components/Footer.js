import React from 'react';
import { Box, Grid, Link, Typography, useTheme, useMediaQuery } from '@mui/material';
import Image from 'next/image';

function Footer() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));
    const footerLinks = [
        { name: "Home", href: "/" },
        { name: "Events", href: "/events" },
        { name: "About Us", href: "/about" },
        { name: "Contact Us", href: "/contact" }
    ];

    return (
        <Box sx={{
            backgroundColor: theme.palette.background.default,
            padding: theme.spacing(matches ? 2 : 4), 
            color: theme.palette.text.primary,
            borderTop: `3px solid ${theme.palette.divider}`,
            fontSize: matches ? '0.8rem' : '1rem', 
            paddingLeft: 10,
            paddingRight: 10,
        }}>
            <Grid container spacing={3}>
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
                    flexDirection: 'column', 
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                }}>
                    <Image src="/images/mtec_logo.png" alt="Company Logo" width={matches ? 100 : 200} height={matches ? 100 : 200} />
                    <Box sx={{ ml: matches ? 1 : 2 }}>
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
};


export default Footer;
