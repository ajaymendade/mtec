import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Link, List, ListItem, ListItemText, IconButton, Drawer } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import '../styles/css/globals.css';
import Image from 'next/image';
import { useTheme } from '@mui/material/styles';
import { useRouter } from 'next/navigation';

export default function NavBar() {
    const theme = useTheme();
    const router = useRouter()
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const handleNavigation = (page) => {
        router.push(page);
        setMobileOpen(false);
    };

    const drawer = (
        <Box sx={{ textAlign: 'center', bgcolor: theme.palette.background.paper, mt: 5 }}>
          <List>
            {['/', '/events', '/about', '/contact'].map((text, index) => {
              const pageNames = ['Home', 'Events', 'About Us', 'Contact Us'];
              return (
                <ListItem button key={text} onClick={() => handleNavigation(text) }
                  sx={{
                    color: theme.palette.primary.contrastText
                  }}>
                  <ListItemText primary={pageNames[index]} />
                </ListItem>
              );
            })}
          </List>
          <Box sx ={{display:'flex'}}>
          <Button variant="contained" color="secondary" sx={{ marginLeft: 1 }}>Register</Button>
          <Button variant="contained" color="primary" sx={{ marginLeft: 1 }}>Login</Button>
          </Box>
        </Box>
      );

      return(
        <>
        <AppBar position="static" sx={{
            backgroundColor: theme.palette.background.paper,
            color: theme.palette.primary.contrastText,
            transition: 'all 0.3s ease-in-out',
            transform: 'translateY(-100px)',
            animation: 'slideInDown 0.5s forwards'
          }}>
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: 'none' } }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" noWrap sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
                <Image src="/images/mtec_logo.png" width={70} height={70} />
                Matoshri Technical Event Cell
              </Typography>
              <Box sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center' }}>
                <Link color="inherit" sx={{ margin: 1, textDecoration: 'none', '&:hover': { textDecoration: 'none', color: 'primary.main' } }} onClick={() => handleNavigation('/')}>Home</Link>
                <Link color="inherit" sx={{ margin: 1, textDecoration: 'none', '&:hover': { textDecoration: 'none', color: 'primary.main' } }} onClick={() => handleNavigation('/events')}>Events</Link>
                <Link color="inherit" sx={{ margin: 1, textDecoration: 'none', '&:hover': { textDecoration: 'none', color: 'primary.main' } }} onClick={() => handleNavigation('/about')}>About Us</Link>
                <Link color="inherit" sx={{ margin: 1, textDecoration: 'none', '&:hover': { textDecoration: 'none', color: 'primary.main' } }} onClick={() => handleNavigation('/contact')}>Contact Us</Link>
                <Button variant="contained" color="secondary" sx={{ marginLeft: 1 }}>Register</Button>
                <Button variant="contained" color="primary" sx={{ marginLeft: 1 }}>Login</Button>
              </Box>
            </Toolbar>
          </AppBar>

          <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
          }}
        >
          {drawer}
        </Drawer>
        </>
      )
};