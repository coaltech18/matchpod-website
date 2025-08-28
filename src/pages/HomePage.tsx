import React, { useEffect, useRef } from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { motion } from 'framer-motion';

const HomePage: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = containerRef.current?.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <Box
      ref={containerRef}
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            textAlign: 'center',
            maxWidth: '800px',
            mx: 'auto',
            px: 3,
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Typography
              variant="h1"
              className="fade-in"
              sx={{
                mb: 3,
                background: 'linear-gradient(135deg, #8A4FFF 0%, #F5B851 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: 700,
                '@media (max-width: 768px)': {
                  fontSize: '2.5rem',
                },
              }}
            >
              Beyond Just Sharing Space
              <br />
              Building Life Connections
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Typography
              variant="h4"
              className="fade-in stagger-1"
              sx={{
                mb: 6,
                color: 'text.secondary',
                fontWeight: 400,
                lineHeight: 1.6,
                '@media (max-width: 768px)': {
                  fontSize: '1.25rem',
                },
              }}
            >
              Matchpod is a social movement reimagining urban living in Bangalore. 
              We're transforming the stressful, unsafe roommate search into an 
              empowering, community-driven experience.
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Box
              sx={{
                display: 'flex',
                gap: 3,
                justifyContent: 'center',
                flexWrap: 'wrap',
                '@media (max-width: 768px)': {
                  flexDirection: 'column',
                  alignItems: 'center',
                },
              }}
            >
              <Button
                variant="contained"
                size="large"
                className="fade-in stagger-2"
                sx={{
                  backgroundColor: 'primary.main',
                  color: 'white',
                  px: 4,
                  py: 2,
                  fontSize: '1.125rem',
                  fontWeight: 600,
                  borderRadius: '12px',
                  boxShadow: '0 8px 32px rgba(138, 79, 255, 0.3)',
                  '&:hover': {
                    backgroundColor: 'primary.dark',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 12px 40px rgba(138, 79, 255, 0.4)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                Download The App
              </Button>
              
              <Button
                variant="outlined"
                size="large"
                className="fade-in stagger-3"
                sx={{
                  borderColor: 'secondary.main',
                  color: 'secondary.main',
                  px: 4,
                  py: 2,
                  fontSize: '1.125rem',
                  fontWeight: 600,
                  borderRadius: '12px',
                  borderWidth: '2px',
                  '&:hover': {
                    borderColor: 'secondary.dark',
                    backgroundColor: 'rgba(245, 184, 81, 0.1)',
                    transform: 'translateY(-2px)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                Discover Our Ideology
              </Button>
            </Box>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default HomePage;
