import { style } from '@vanilla-extract/css';

export const app = style({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  width: '100%',  
  margin: '0',     
  padding: '0',
  boxSizing: 'border-box',
  backgroundColor: '#faf8f4',
});

export const appContent = style({
  flex: '1',
  width: '100%',    
  padding: '0',     
});
