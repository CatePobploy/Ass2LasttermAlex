import { style } from '@vanilla-extract/css';

// Container for the 404 message
export const notFoundContainer = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  backgroundColor: '#f5f5f5', // Light background color
  textAlign: 'center',
  padding: '20px',
});

// Title for the 404 message
export const notFoundTitle = style({
  fontSize: '72px',
  fontFamily: '"Patriot-Regular", sans-serif',
  fontWeight: 'bold',
  color: '#DE71BB', // Primary color
  marginBottom: '20px',
});

// Text for additional information
export const notFoundText = style({
  fontSize: '24px',
  color: '#4a4a4a',
  marginBottom: '30px',
});

// Button to go back home
export const homeButton = style({
  padding: '12px 30px',
  fontSize: '18px',
  backgroundColor: '#FF9088', // Button color
  color: '#fff',
  textDecoration: 'none',
  borderRadius: '25px',
  transition: 'background-color 0.3s ease',

  ':hover': {
    backgroundColor: '#FF7AA3', // Darker button color on hover
  },
});
