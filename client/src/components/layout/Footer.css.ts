import { globalStyle, style } from '@vanilla-extract/css';

globalStyle('@font-face', {
  fontFamily: 'BrolimoRegular',
  src: 'url("/fonts/BrolimoRegular.ttf") format("truetype")',
  fontWeight: 'normal',
  fontStyle: 'normal',
});

export const footerContainer = style({
  fontFamily: '"BrolimoRegular", sans-serif',
  backgroundColor: '#f0f8ff',  // Light pastel blue, similar to the sky in the picture
  padding: '40px',
});

export const footerTop = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  paddingBottom: '40px',
  borderBottom: '1px solid #c3d8e0',  // Soft blue for the border to match the sky tones
});

export const footerBottom = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginTop: '20px',
  fontSize: '14px',
  color: '#6e7c85',  // Muted soft blue-gray tone
});

export const linksSection = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
});

export const addressSection = style({
  textAlign: 'center',
  fontSize: '14px',
  color: '#6e7c85',  // Consistent text color
});

export const socialSection = style({
  textAlign: 'center',
  fontSize: '14px',
  color: '#6e7c85',
});

export const newsletterSection = style({
  textAlign: 'right',
});

export const newsletterForm = style({
  display: 'flex',
  gap: '10px',
  alignItems: 'center',
});

export const emailInput = style({
  padding: '8px',
  fontSize: '14px',
  borderRadius: '4px',
  border: '1px solid #d0e7f5',  // Light blue to match the overall theme
  width: '200px',
  backgroundColor: '#e6f2fa',  // Soft pastel blue to reflect the castle’s sky
});

export const submitButton = style({
  padding: '8px',
  backgroundColor: '#7db9e8',  // Muted blue, similar to the turrets in the picture
  color: '#fff',
  fontSize: '18px',
  border: 'none',
  cursor: 'pointer',
  borderRadius: '4px',

  ':hover': {
    backgroundColor: '#6da1c9',  // Slightly darker blue for hover effect
  },
});

export const footerLink = style({
  fontSize: '16px',
  color: '#7db9e8',  // Soft blue for links
  textDecoration: 'none',

  ':hover': {
    textDecoration: 'underline',
    color: '#6da1c9',  // Hover effect with a darker muted blue
  },
});
