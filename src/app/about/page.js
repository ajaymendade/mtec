'use client';

import React, { useState } from 'react';
import { Typography, Box, CssBaseline } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import CustomCursor from '../components/cursor';
import { useRouter } from 'next/navigation';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

export default function About() {
    const theme = useTheme();
    const router = useRouter();
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <>
            <CustomCursor />
            <CssBaseline />
            <NavBar />

            <Box sx={{
                p: 6,
                minHeight: '100vh',
                color: 'black',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold', mb: 6 }}>
                    About Us
                </Typography>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
                    Overview
                </Typography>
                <Typography paragraph sx={{ maxWidth: '800px' , textAlign: 'justify', mb:4}}>
                    The Matoshri Technical Event Cell (TEC) is a student-driven organization committed to enhancing the educational experience by integrating practical applications of theoretical knowledge in technology fields. Our mission centers around fostering innovation and hands-on learning through diverse activities including hackathons, coding competitions, and robotics workshops. These initiatives encourage students to creatively apply their technical skills, solving real-world challenges and pushing the boundaries of traditional learning.
                </Typography>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
                    Mission and Vision
                </Typography>
                <Typography paragraph sx={{ maxWidth: '800px' , textAlign: 'justify', mb:4}}>
                    We envision a robust technical community where students are empowered to collaborate and innovate, developing skills that prepare them for successful careers. The TEC aims to provide a dynamic learning environment that attracts ambitious students and enhances the college's reputation in the academic and professional spheres. By hosting events that align with the latest industry trends, we offer students a platform to gain critical exposure to new technologies and networking opportunities.
                </Typography>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
                    Benefits and Strategic Goals
                </Typography>
                <Typography paragraph sx={{ maxWidth: '800px' , textAlign: 'justify', mb:4}}>
                    -Participation in TEC activities offers multiple benefits including enhanced problem-solving abilities, access to new technologies, and significant networking prospects that open doors to potential career opportunities. Our strategic goals focus on organizing targeted and inclusive events that cater to various skill levels, ensuring comprehensive engagement. Through meticulous planning and execution, we aim to maintain a sustainable model that continuously adapts to evolving educational and industry requirements.
                </Typography>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
                    Conclusion
                </Typography>
                <Typography paragraph sx={{ maxWidth: '800px' , textAlign: 'justify', mb:4}}>
                    The Matoshri Technical Event Cell acts as a catalyst for bridging the gap between classroom learning and practical industry applications, creating a vibrant community that nurtures future technology leaders. We are dedicated to enriching the college experience by providing a platform where theoretical knowledge meets real-world application, fostering an environment of growth and innovation.
                </Typography>
            </Box>
            <Footer/>
        </>
    );
}
