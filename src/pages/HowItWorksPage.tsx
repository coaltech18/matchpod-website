import React, { useEffect, useRef } from 'react';
import { Box, Typography, Container, Card, CardContent, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { Verified, Search, Chat } from '@mui/icons-material';

const HowItWorksPage: React.FC = () => {
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

  const steps = [
    {
      icon: <Verified sx={{ fontSize: 48, color: 'secondary.main' }} />,
      title: "Become a Verified Member",
      description: "Complete a one-time, secure KYC verification. This is your entry ticket to our trusted community.",
      step: "01",
      color: 'secondary.main'
    },
    {
      icon: <Search sx={{ fontSize: 48, color: 'secondary.main' }} />,
      title: "Discover Your Matches",
      description: "Once verified, our AI gets to work. Swipe through a personalized, curated list of compatible profiles.",
      step: "02",
      color: 'secondary.main'
    },
    {
      icon: <Chat sx={{ fontSize: 48, color: 'secondary.main' }} />,
      title: "Connect with Confidence",
      description: "When you mutually match, chat securely within the app without sharing personal numbers.",
      step: "03",
      color: 'secondary.main'
    }
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
                color: 'text.primary',
                fontWeight: 700,
                '@media (max-width: 768px)': {
                  fontSize: '2.5rem',
                },
              }}
            >
              Your Journey to a Better Home.
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
                '@media (max-width: 768px)': {
                  fontSize: '1.25rem',
                },
              }}
            >
              We've designed a seamless and secure process to take the stress out of your search.
            </Typography>
          </motion.div>
        </Box>

        <Box sx={{ position: 'relative' }}>
          {/* Timeline line */}
          <Box
            sx={{
              position: 'absolute',
              left: '50%',
              top: 0,
              bottom: 0,
              width: '2px',
              backgroundColor: 'secondary.main',
              transform: 'translateX(-50%)',
              '@media (max-width: 768px)': {
                display: 'none',
              },
            }}
          />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 + index * 0.3 }}
            >
              <Grid
                container
                spacing={4}
                sx={{
                  mb: 6,
                  alignItems: 'center',
                  flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
                  '@media (max-width: 768px)': {
                    flexDirection: 'column',
                    textAlign: 'center',
                  },
                }}
              >
                <Grid item xs={12} md={5}>
                  <Card
                    className="fade-in"
                    sx={{
                      backgroundColor: 'rgba(30, 41, 59, 0.8)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '16px',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 20px 40px rgba(245, 184, 81, 0.2)',
                        borderColor: 'secondary.main',
                      },
                    }}
                  >
                    <CardContent sx={{ p: 4, textAlign: 'center' }}>
                      <Box sx={{ mb: 3 }}>
                        {step.icon}
                      </Box>
                      <Typography
                        variant="h4"
                        sx={{
                          mb: 2,
                          color: 'text.primary',
                          fontWeight: 600,
                        }}
                      >
                        {step.title}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          color: 'text.secondary',
                          lineHeight: 1.6,
                          fontSize: '1.125rem',
                        }}
                      >
                        {step.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>

                <Grid item xs={12} md={2} sx={{ textAlign: 'center' }}>
                  <Box
                    sx={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '50%',
                      backgroundColor: 'secondary.main',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mx: 'auto',
                      mb: 2,
                      '@media (max-width: 768px)': {
                        mb: 2,
                      },
                    }}
                  >
                    <Typography
                      variant="h5"
                      sx={{
                        color: 'white',
                        fontWeight: 700,
                      }}
                    >
                      {step.step}
                    </Typography>
                  </Box>
                </Grid>

                <Grid item xs={12} md={5} />
              </Grid>
            </motion.div>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default HowItWorksPage;
