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
        minHeight: '70vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        py: 4,
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            textAlign: 'center',
            maxWidth: '700px',
            mx: 'auto',
            px: 2,
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
                mb: 2,
                background: 'linear-gradient(135deg, #8A4FFF 0%, #F5B851 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: 700,
                fontSize: '3.5rem',
                '@media (max-width: 768px)': {
                  fontSize: '2.25rem',
                },
              }}
            >
              Find Your Pod. Safely.
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
                mb: 4,
                color: 'text.secondary',
                fontWeight: 400,
                lineHeight: 1.5,
                fontSize: '1.35rem',
                '@media (max-width: 768px)': {
                  fontSize: '1.1rem',
                },
              }}
            >
              AI-powered roommate matching platform that makes coliving safe and stress-free.
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
                Learn More
              </Button>
              

            </Box>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default HomePage;
