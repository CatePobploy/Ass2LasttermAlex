import { globalStyle, style } from '@vanilla-extract/css';

// Container for the GIF background
export const gifBackgroundContainer = style({
  position: 'relative',  // Ensure it serves as the context for positioning
  width: '100%',
  height: '100vh',        // Full viewport height
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundImage: 'url("/Users/catcate/Desktop/Holmesglen/Div/Term2/AlexThursday/last term/Ass2 term4/Ass2/clipology/client/public/pictures/sky-clouds.gif")',  // Set GIF background
  backgroundSize: 'cover',                         // Cover the entire container
  backgroundPosition: 'center',                    // Center the background
  backgroundRepeat: 'no-repeat',                   // Prevent repeating
});


// Rest of the styling remains the same
export const styledLabel = style({
  fontSize: '14px',
  fontFamily: '"BrolimoRegular", sans-serif',
  fontWeight: 'bold',
  color: '#2a5934',
  marginBottom: '10px',
});

export const styledInput = style({
  fontFamily: '"BrolimoRegular", sans-serif',
  width: '100%',
  padding: '10px',
  fontSize: '16px',
  border: '1px solid #ccc',
  borderRadius: '5px',
  marginBottom: '20px',
  transition: 'border-color 0.3s ease',

  ':focus': {
    borderColor: '#2a5934',
  },
});

export const userNav = style({
  fontFamily: '"BrolimoRegular", sans-serif',
  marginTop: '20px',
  fontSize: '14px',

  a: {
    color: '#2a5934',
    textDecoration: 'none',
    fontWeight: 'bold',
  },

  'a:hover': {
    textDecoration: 'underline',
  },
});
