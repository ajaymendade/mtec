'use client';
import { createTheme } from '@mui/material/styles';


const theme = createTheme({
  palette: {
    primary: {
      main: '#00BFA5',  // A lighter teal for good visibility on dark backgrounds
      contrastText: '#ffffff',  // White text for the best readability
    },
    secondary: {
      main: '#FFD54F',  // A lighter amber, vibrant against dark
      contrastText: '#000000',  // Black text, though might often be white for better visibility
    },
    tertiary: {
      main: '#EC407A',  // Light pink for a warm, inviting accent
      contrastText: '#ffffff',  // White text for optimal readability
    },
    error: {
      main: '#D32F2F',  // Deep red for alerts and warnings
      contrastText: '#ffffff',  // White text to stand out
    },
    success: {
      main: '#66BB6A',  // A refreshing green for success states
      contrastText: '#ffffff',  // White text to ensure visibility
    },
    info: {
      main: '#29B6F6',  // Bright blue for informational messages
      contrastText: '#ffffff',  // White text for clarity
    },
    background: {
      default: 'white', 
      extra: 'black', // Smooth, dark black background
      paper: '#2e2e2e',  // A medium-dark gray, providing subtle contrast
    },    
  },
  typography: {
    fontFamily: "Roboto",  // Keeping the same font style
    h1: {
      fontWeight: 400,  // Suitable weight for headers
      fontSize: '2.5rem',  // Large size for primary headers
    },
    body1: {
      fontWeight: 400,
      fontSize: '1rem',  // Standard size for body text
    },
  },
});


export default theme;


