import { style } from '@vanilla-extract/css';

export const signupContainer = style({
  display: 'flex',
  minHeight: '100vh',
  // No background color to make the image stand out
});

export const imageSection = style({
  flex: '3', // Takes up 3/4 of the width
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const elfImage = style({
  maxWidth: '100%',
  height: 'auto',
});

export const formSection = style({
  flex: '1', // Takes up 1/4 of the width
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: '40px',
  backgroundColor: '#2c6e49', // Dark green to make form stand out
  borderTopLeftRadius: '40px',
  borderBottomLeftRadius: '40px',
  color: '#fff',
});

export const formTitle = style({
  fontSize: '24px',
  marginBottom: '30px',
  textAlign: 'center',
});

export const formGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '20px',
  marginBottom: '30px',
});

export const styledLabel = style({
  color: '#fff', // White text for the form labels
  fontSize: '14px',
  marginBottom: '5px',
});

export const styledInput = style({
  padding: '12px',
  fontSize: '14px',
  borderRadius: '20px',
  border: '1px solid #ddd',
  width: '100%',
  marginBottom: '10px',
  backgroundColor: '#f0f4f3', // Lighter input background
  outline: 'none',
  transition: 'border 0.3s',

  ':focus': {
    borderColor: '#7db9e8', // Soft blue border on focus
  },
});

export const termsGroup = style({
  marginBottom: '20px',
  color: '#fff',
  fontSize: '14px',

  a: {
    color: '#cce3d3',
    textDecoration: 'underline',

    ':hover': {
      color: '#f0f4f3',
    },
  },
});

export const submitButton = style({
  width: '100%',
  padding: '12px',
  fontSize: '16px',
  backgroundColor: 'red !important', // Force the background color to be red
  color: 'blue !important',          // Force the text color to be blue
  border: 'none',
  borderRadius: '20px',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',

  ':hover': {
    backgroundColor: '#98c1c9',      // Darker hover state
  },
});

