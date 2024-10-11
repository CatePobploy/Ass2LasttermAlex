import { style } from '@vanilla-extract/css';

export const headerContainer = style({
  fontFamily: '"BrolimoRegular", sans-serif',
  backgroundColor: 'rgba(255, 255, 255, 0.4)',  // Initial transparent background
  position: 'fixed',  // Fix header to the top
  top: 0,
  width: '100%',
  zIndex: 1000,
  transition: 'opacity 0.5s ease',  // Smooth transition for opacity
  height: '80px',  // Adjust height as needed
});

// Apply margin-top to the main content (under the navbar) to avoid overlap
export const contentUnderNavbar = style({
  marginTop: '80px',  // Push content down (same as header height)
  width: '100%',
});

export const homeContainer = style({
  // other styles for the container if needed
});

export const homeImage = style({
  width: '100%',  // Full width
  height: 'auto',  // Maintain aspect ratio
  display: 'block',  // Remove extra spacing around image
  objectFit: 'cover'  // Ensure the image fills its container
});

// Setting a specific size for the product images
export const productImage = style({
  width: '100%',  // Make the image take up the full width of its container
  height: '100%',  // Set the image to fill the height of the container
  objectFit: 'contain',  // Ensure the full image is shown without cropping
  borderRadius: '15px 15px 0 0',  // Round the top corners
});

export const bannerImage = style({
  maxWidth: '49%',
  borderRadius: '10px',
  margin: '5px',
  transition: 'transform 0.3s cubic-bezier(0.68, -0.55, 0.27, 1.55)',  // Overshoot easing function

  ':hover': {
    transform: 'scale(1.1)', // Slightly enlarge the image to create a bulging effect
  },
});

export const welcomeSection = style({
  fontFamily: '"BrolimoRegular", sans-serif',
  textAlign: 'center',
  paddingBottom: '10px',

  h1: {
    fontSize: '48px',
    color: '#2a5934',
  },

  p: {
    fontSize: '18px',
    color: '#4a4a4a',
    lineHeight: '1.6',
    fontFamily: ''
  },
});

export const bannerText = style({
  fontFamily: '"BrolimoRegular", sans-serif',

  h1: {
    fontSize: '36px',
    color: '#2a5934',
  },

  p: {
    fontSize: '18px',
    color: '#4a4a4a',
    lineHeight: '1.6',
  },
});

export const featuredSection = style({
  fontFamily: '"Patriot-Regular", sans-serif',
  textAlign: 'center',
  padding: '50px 20px',
  color: '#D19B51',
 
  

  h2: {
    borderTop: '1px solid #000000',
    borderBottom: '1px solid #000000',
    fontSize: '36px',
    color: "red",
    marginBottom: '30px',
    padding: '10px 0',
    
    
  },
});
export const h2Section = style({
  color: "linear-gradient(90deg, #DE71BB, #FF7AA3, #FF9088, #FFB070, #FFD464, #F9F871)"  ,

});

export const productGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',  // Responsive grid with min-width
  gap: '30px',
  justifyContent: 'center',
  padding: '20px 0',
});

export const productCard = style({
  // backgroundColor: '#faf3e0',
  // border: '1px solid #000',
  // borderRadius: '15px',
  padding: '0',  // Remove padding so the image takes full space
  textAlign: 'center', // Center-align text
  transition: 'transform 0.3s ease-in-out',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  height: 'auto',  // Allow dynamic height based on content
  ':hover': {
    transform: 'scale(1.03)', // Slightly scale up on hover
  },
});

export const productDetails = style({
  padding: '10px',  // Add padding for the text part
  width: '100%',
  textAlign: 'center',  // Center the text
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const productTitle = style({
  fontSize: '18px',
  fontWeight: '500',
  color: '#2a5934',
  marginBottom: '10px',
});

export const productPrice = style({
  fontSize: '16px',
  fontWeight: 'normal',
  color: '#000',
  marginBottom: '10px',
});

export const addToCartButton = style({
  display: 'block',
  marginTop: '10px',
  padding: '12px 30px',
  backgroundColor: '#fff',
  color: '#000',
  border: '1px solid #000',
  borderRadius: '25px',
  fontSize: '14px',
  cursor: 'pointer',
  textTransform: 'uppercase',
  letterSpacing: '1px',
  transition: 'background-color 0.3s',

  ':hover': {
    background: 'linear-gradient(90deg, #DE71BB, #FF7AA3, #FF9088, #FFB070, #FFD464, #F9F871)',
    color: '#fff',
    borderColor: 'white'
  },
});

export const infoFirstClipart = style({
  display: 'grid',
  gridTemplateColumns: '1.5fr 1fr 1.5fr',  // Create 3 columns with 1.5 : 1 : 1.5 ratio
  gap: '20px',
  padding: '40px 20px',
  alignItems: 'center',
  justifyContent: 'center',
});

export const infoTextSection = style({
  fontSize: '24px',
  fontWeight: 'bold',
  fontFamily: '"Patriot-Regular", sans-serif',
  color: '#333',
});


export const SubTextSection = style({
  fontSize: '24px',
  // fontWeight: 'bold',
  fontFamily: '"Neuton-Regular", sans-serif',
  color: '#333',
});




export const infoImageLarge = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: 'auto',
});

export const infoImageSmall = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: 'auto',
});


export const sectionImage =style({
  width:'350px',
  height:'350px'
})

export const sectionImage1 =style({
  width:'480px',
  height:'350px'
})


