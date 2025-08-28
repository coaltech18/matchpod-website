import React, { useState, useEffect } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import ThreeBackground from './components/ThreeBackground';
import HomePage from './pages/HomePage';
import ProblemPage from './pages/ProblemPage';
import SolutionPage from './pages/SolutionPage';
import HowItWorksPage from './pages/HowItWorksPage';
import FeaturesPage from './pages/FeaturesPage';
import Navigation from './components/Navigation';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#8A4FFF',
    },
    secondary: {
      main: '#F5B851',
    },
    background: {
      default: '#121826',
      paper: '#1E293B',
    },
    text: {
      primary: '#F3F4F6',
      secondary: '#A9B4C2',
    },
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
    h1: {
      fontSize: '3.5rem',
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 600,
      lineHeight: 1.3,
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 600,
      lineHeight: 1.4,
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 500,
      lineHeight: 1.5,
    },
    body1: {
      fontSize: '1.125rem',
      lineHeight: 1.6,
    },
    body2: {
      fontSize: '1rem',
      lineHeight: 1.6,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
          textTransform: 'none',
          fontWeight: 600,
          padding: '12px 24px',
        },
      },
    },
  },
});

function App() {
  const [currentPage, setCurrentPage] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Calculate current page based on scroll position
      const windowHeight = window.innerHeight;
      const currentPageIndex = Math.round(window.scrollY / windowHeight);
      setCurrentPage(Math.max(0, Math.min(currentPageIndex, 4)));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToPage = (pageIndex: number) => {
    window.scrollTo({
      top: pageIndex * window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div style={{ position: 'relative', minHeight: '100vh' }}>
        <ThreeBackground currentPage={currentPage} scrollY={scrollY} />
        <Navigation currentPage={currentPage} onPageChange={scrollToPage} />
        
        <HomePage />
        <ProblemPage />
        <SolutionPage />
        <HowItWorksPage />
        <FeaturesPage />
      </div>
    </ThemeProvider>
  );
}

export default App;
