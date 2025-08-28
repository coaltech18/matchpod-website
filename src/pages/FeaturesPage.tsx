import React, { useEffect, useRef } from 'react';
import { Box, Typography, Container, Button, Grid, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { Apple, Android } from '@mui/icons-material';

const FeaturesPage: React.FC = () => {
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

  const features = [
    "Multi-Layer Verification",
    "AI-Powered Compatibility Scoring",
    "The 'Verified' Badge",
    "Secure In-App Chat",
    "Super Likes & Profile Boosts"
  ];

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
        <Box sx={{ textAlign: 'center', mb: 8 }}>
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
              Designed for Your Peace of Mind.
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
                color: 'text.secondary',
                fontWeight: 400,
                lineHeight: 1.6,
                maxWidth: '800px',
                mx: 'auto',
                mb: 6,
                '@media (max-width: 768px)': {
                  fontSize: '1.25rem',
                },
              }}
            >
              Every feature is thoughtfully designed to enhance your safety and simplify your search.
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
                flexWrap: 'wrap',
                gap: 2,
                justifyContent: 'center',
                mb: 8,
              }}
            >
              {features.map((feature, index) => (
                <Chip
                  key={index}
                  label={feature}
                  className="fade-in"
                  sx={{
                    backgroundColor: 'rgba(138, 79, 255, 0.1)',
                    color: 'primary.main',
                    border: '1px solid rgba(138, 79, 255, 0.3)',
                    fontSize: '1rem',
                    fontWeight: 500,
                    padding: '12px 16px',
                    '&:hover': {
                      backgroundColor: 'rgba(138, 79, 255, 0.2)',
                      transform: 'translateY(-2px)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                />
              ))}
            </Box>
          </motion.div>
        </Box>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Box
            sx={{
              textAlign: 'center',
              backgroundColor: 'rgba(30, 41, 59, 0.8)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '24px',
              padding: 6,
              maxWidth: '800px',
              mx: 'auto',
            }}
          >
            <Typography
              variant="h2"
              className="fade-in"
              sx={{
                mb: 4,
                color: 'text.primary',
                fontWeight: 700,
                '@media (max-width: 768px)': {
                  fontSize: '2rem',
                },
              }}
            >
              Ready to Find Your Pod?
            </Typography>

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
                startIcon={<Apple />}
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
                Download on the App Store
              </Button>
              
              <Button
                variant="contained"
                size="large"
                startIcon={<Android />}
                className="fade-in stagger-3"
                sx={{
                  backgroundColor: 'secondary.main',
                  color: 'white',
                  px: 4,
                  py: 2,
                  fontSize: '1.125rem',
                  fontWeight: 600,
                  borderRadius: '12px',
                  boxShadow: '0 8px 32px rgba(245, 184, 81, 0.3)',
                  '&:hover': {
                    backgroundColor: 'secondary.dark',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 12px 40px rgba(245, 184, 81, 0.4)',
                  },
                  transition: 'all 0.3s ease',
                }}
              >
                Get it on Google Play
              </Button>
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default FeaturesPage;
