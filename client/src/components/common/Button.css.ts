import { globalStyle,style } from '@vanilla-extract/css';

export const button = style({
  fontFamily: '"BrolimoRegular", sans-serif',
  backgroundColor: '#FF9283',
  color: '#fff',
  padding: '10px 20px',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  fontSize: '16px',
  fontWeight: 'bold',
  transition: 'background-color 0.3s ease',
  background: 'linear-gradient(90deg, #DE71BB, #FF7AA3, #FF9088, #FFB070, #FFD464, #F9F871)',

  ':hover': {
    backgroundColor: '#1e4430',
  },

  ':disabled': {
    backgroundColor: '#ccc',
    cursor: 'not-allowed',
  },
});
