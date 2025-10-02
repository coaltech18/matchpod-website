import React, { useEffect, useRef } from 'react';
import { Box, Typography, Container, Card, CardContent, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { Verified, Psychology, LocationOn } from '@mui/icons-material';

const SolutionPage: React.FC = () => {
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

  const pillars = [
    {
      icon: <Verified sx={{ fontSize: 48, color: 'primary.main' }} />,
      title: "Safety isn't a feature, it's our foundation.",
      description: "With multi-layer verification, we eliminate guesswork and build a verifiable circle of trust. Every connection you make is with a real, authenticated individual.",
      color: 'primary.main'
    },
    {
      icon: <Psychology sx={{ fontSize: 48, color: 'primary.main' }} />,
      title: "The right match matters more than the quick match.",
      description: "Our AI-powered scoring goes beyond demographics to match you on deep lifestyle habits and core values for a harmonious home.",
      color: 'primary.main'
    },
    {
      icon: <LocationOn sx={{ fontSize: 48, color: 'primary.main' }} />,
      title: "Built by Bangaloreans, for Bangaloreans.",
      description: "We understand the city's unique pulse. Matchpod is your social launchpad to truly belong.",
      color: 'primary.main'
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
              Our Foundation: Trust, Compatibility, Community.
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
              We're not just solving a housing problem—we're redefining what it means to live together.
            </Typography>
          </motion.div>
        </Box>

        <Grid container spacing={4} justifyContent="center">
          {pillars.map((pillar, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 + index * 0.2 }}
              >
                <Card
                  className="fade-in"
                  sx={{
                    height: '100%',
                    backgroundColor: 'rgba(30, 41, 59, 0.8)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '16px',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 20px 40px rgba(138, 79, 255, 0.2)',
                      borderColor: 'primary.main',
                    },
                  }}
                >
                  <CardContent sx={{ p: 4, textAlign: 'center' }}>
                    <Box sx={{ mb: 3 }}>
                      {pillar.icon}
                    </Box>
                    <Typography
                      variant="h4"
                      sx={{
                        mb: 2,
                        color: 'text.primary',
                        fontWeight: 600,
                        fontSize: '1.5rem',
                      }}
                    >
                      {pillar.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: 'text.secondary',
                        lineHeight: 1.6,
                        fontSize: '1.125rem',
                      }}
                    >
                      {pillar.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default SolutionPage;
