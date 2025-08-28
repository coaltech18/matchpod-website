import React from 'react';
import { Box, Button, IconButton, useTheme } from '@mui/material';
import { KeyboardArrowDown } from '@mui/icons-material';

interface NavigationProps {
  currentPage: number;
  onPageChange: (pageIndex: number) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentPage, onPageChange }) => {
  const theme = useTheme();

  const pages = [
    { name: 'Home', color: theme.palette.primary.main },
    { name: 'Problem', color: theme.palette.secondary.main },
    { name: 'Solution', color: theme.palette.primary.main },
    { name: 'How It Works', color: theme.palette.secondary.main },
    { name: 'Features', color: theme.palette.primary.main },
  ];

  return (
    <Box
      sx={{
        position: 'fixed',
        top: '50%',
        right: '2rem',
        transform: 'translateY(-50%)',
        zIndex: 1000,
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
      }}
    >
      {pages.map((page, index) => (
        <Box
          key={index}
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
          }}
        >
          <Box
            sx={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              backgroundColor: currentPage === index ? page.color : 'rgba(255, 255, 255, 0.3)',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              '&:hover': {
                backgroundColor: page.color,
                transform: 'scale(1.2)',
              },
            }}
            onClick={() => onPageChange(index)}
          />
          <Box
            sx={{
              color: currentPage === index ? page.color : 'rgba(255, 255, 255, 0.5)',
              fontSize: '0.75rem',
              fontWeight: 500,
              opacity: currentPage === index ? 1 : 0,
              transform: currentPage === index ? 'translateX(0)' : 'translateX(-10px)',
              transition: 'all 0.3s ease',
              whiteSpace: 'nowrap',
            }}
          >
            {page.name}
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default Navigation;
