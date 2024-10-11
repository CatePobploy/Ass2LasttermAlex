import { globalStyle, style } from "@vanilla-extract/css";

globalStyle("@font-face", {
  fontFamily: "Patriot-Regular",
  src: 'url("/fonts/Patriot-Regular.otf") format("opentype")',
  fontWeight: "normal",
  fontStyle: "normal",
});
globalStyle("@font-face", {
  fontFamily: "Neuton-Regular",
  src: 'url("/fonts/Neuton-Regular.ttf") format("truetype")',
  fontWeight: "normal",
  fontStyle: "normal",
});

// Top notification bar style (optional, if you have a notification bar above the header)
export const topBar = style({
  fontFamily: '"Soria", sans-serif',
  backgroundColor: "#faf3e0",
  textAlign: "center",
  padding: "10px 0",
  fontSize: "14px",
  color: "#000",
});

// Main header container
export const headerContainer = style({
  fontFamily: '"BrolimoRegular", sans-serif',
  position: "fixed", // Fixed at the top of the page
  top: 0,
  padding: "30px",
  width: "100%",
  backgroundColor: "rgba(255, 255, 255, 0.2)", // Semi-transparent background
  zIndex: 1, // Ensure header stays above content
  // borderBottom: '2px solid #eee',
  transition: "opacity 0.5s ease", // Smooth transition for opacity (optional for fading)
  height: "80px", // Set a specific height for the navbar
});

// Main navigation bar
export const navBar = style({
  fontFamily: '"BrolimoRegular", sans-serif',
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "20px 50px",
  zIndex: 1, // Make sure nav items stay on top of content
});

// Logo style (centered)
export const logo = style({
  fontFamily: "Patriot-Regular, Arial, sans-serif",
  fontSize: "10vh",
  fontWeight: "bold",
  background:
    "linear-gradient(90deg, #DE71BB, #FF7AA3, #FF9088, #FFB070, #FFD464, #F9F871)", // Gradient colors
  backgroundClip: "text",
  WebkitBackgroundClip: "text", // For Safari support
  color: "transparent", // Text color set to transparent to show the gradient
  textAlign: "center",
});

// Navigation link styles
export const navLink = style({
  fontFamily: '"Neuton-Regular", sans-serif',
  backgroundImage:
    "linear-gradient(to right top, #ff7aa3, #ff898c, #ff9f76, #ffb967, #ffd464)", // Gradient background
  backgroundClip: "text",
  WebkitBackgroundClip: "text", // For Safari support
  color: "transparent", // Make the text color transparent to show the gradient
  textDecoration: "none",
  fontSize: "18px",
  padding: "15px 15px",

  ":hover": {
    textDecoration: "underline",
  },
});

// Left and Right link containers
export const leftLinks = style({
  fontFamily: '"BrolimoRegular", sans-serif',
  display: "flex",
  gap: "20px",
});

export const rightLinks = style({
  fontFamily: '"BrolimoRegular", sans-serif',
  display: "flex",
  gap: "20px",
});

// Banner (this part seems to be below the header, so ensure it's properly spaced)
export const banner = style({
  fontFamily: '"BrolimoRegular", sans-serif',
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "50px 80px",
  backgroundColor: "transparent", // Transparent background
  marginTop: "80px", // Ensure content starts after the header (match height of header)
});
