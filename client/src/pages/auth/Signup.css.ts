import { style } from '@vanilla-extract/css';

export const signupContainer = style({
  display: 'flex',
  minHeight: '100vh',
  marginTop: '20vh',
  marginBottom: '10vh'
});

export const imageSection = style({
  flex: '2.5', // Takes up 3/4 of the width
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
  backgroundColor: '#F6DBCA', 
  borderTopLeftRadius: '40px',
  borderBottomLeftRadius: '40px',
  color: '#fff',
  margin: '10px',
  marginRight:'30px'
});

export const formTitle = style({
  fontSize: '24px',
  marginBottom: '30px',
  textAlign: 'center',
});

export const formGrid = style({
  display: 'grid',
  gridTemplateColumns: '1fr', // Single column layout for one field per line
  gap: '30px', // Space between input fields
  marginBottom: '40px',
  width:'310px'
});

export const styledLabel = style({
  color: '#fff', // White text for the form labels
  fontSize: '14px',
  marginBottom: '5px',
});

export const styledInput = style({
  padding: '16px', // Increased padding for more space inside the input fields
  fontSize: '14px',
  borderRadius: '20px',
  border: '1px solid #ddd',
  width: '100%',
  marginBottom: '20px', 
  backgroundColor: '#f0f4f3', // Lighter input background
  outline: 'none',
  transition: 'border 0.3s',

  ':focus': {
    borderColor: '#7db9e8', // Soft blue border on focus
  },
});

export const termsGroup = style({
  marginBottom: '30px', // Added space for the checkbox group
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
  color: 'blue !important',          // Force the text color to be blue
  border: 'none',
  borderRadius: '20px',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',

  ':hover': {
    backgroundColor: '#98c1c9',      // Hover state
  },
});
