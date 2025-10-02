import React, { useEffect, useRef } from 'react';
import { Box, Typography, Container, Card, CardContent, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { Security, Psychology, People } from '@mui/icons-material';

const ProblemPage: React.FC = () => {
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

  const problems = [
    {
      icon: <Security sx={{ fontSize: 48, color: 'secondary.main' }} />,
      title: "A Crisis of Trust",
      description: "Your safety should never be a matter of luck. The digital world is saturated with fake profiles and potential scams, creating immense stress.",
      color: 'secondary.main'
    },
    {
      icon: <Psychology sx={{ fontSize: 48, color: 'secondary.main' }} />,
      title: "The Compatibility Gamble",
      description: "60% of renters face conflicts from lifestyle clashes. Basic filters do nothing to prevent the frustration of a mismatched home.",
      color: 'secondary.main'
    },
    {
      icon: <People sx={{ fontSize: 48, color: 'secondary.main' }} />,
      title: "The Challenge of Urban Isolation",
      description: "Moving to a new city often means leaving your support system behind. The impersonal nature of finding a room only deepens the feeling of being alone.",
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
              The Old Way is Broken.
              <br />
              We Lived It Too.
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
              The search for a roommate is filled with anxiety. We built Matchpod to solve 
              the real-world problems we faced ourselves.
            </Typography>
          </motion.div>
        </Box>

        <Grid container spacing={4} justifyContent="center">
          {problems.map((problem, index) => (
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
                      boxShadow: '0 20px 40px rgba(245, 184, 81, 0.2)',
                      borderColor: 'secondary.main',
                    },
                  }}
                >
                  <CardContent sx={{ p: 4, textAlign: 'center' }}>
                    <Box sx={{ mb: 3 }}>
                      {problem.icon}
                    </Box>
                    <Typography
                      variant="h4"
                      sx={{
                        mb: 2,
                        color: 'text.primary',
                        fontWeight: 600,
                      }}
                    >
                      {problem.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: 'text.secondary',
                        lineHeight: 1.6,
                        fontSize: '1.125rem',
                      }}
                    >
                      {problem.description}
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

export default ProblemPage;
