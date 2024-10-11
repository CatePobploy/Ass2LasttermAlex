import { globalStyle,style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
});

export const leadCard = style({
  background: '#fff',
  padding: '40px',
  borderRadius: '10px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  width: '100%',
  maxWidth: '500px',
  textAlign: 'center',
});

export const authForm = style({
  marginTop: '20px',
});

export const cardTitle = style({
  fontFamily: '"BrolimoRegular", sans-serif',
  fontSize: '24px',
  fontWeight: 'bold',
  marginBottom: '20px',
  color: '#2a5934',
});
