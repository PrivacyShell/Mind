import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=PT+Sans:400,700&display=swap');
  * {
    box-sizing: border-box;
  }
  html {
    margin: 0;
    padding: 0;
    font-family: 'PT Sans', sans-serif;
    font-size: 62.5%;
  }
  body {
    margin: 0;
    padding: 0; 
    background-color: #171C27; 
  }
  h1 {
    font-weight: 300;
    color: #fff;
    margin: 0;
    padding: 0;
  }
  h2 {
    font-weight: 400;
    margin: 0;
    padding: 0;
  }
  h3,h4,h5,h6,p,span,a,input,label,button,td,th {
    font-weight: 400;
    margin: 0;
    padding: 0;
    text-decoration: none;
  }

  button {
    border: none;
    background: none;
  }

  button:focus {
    outline: none;
  }

  .visuallyhidden {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }

  /* custom styling for all font awesome icons */
  .fa-plus-square {
      font-size: 2rem;
      color: #fff;
  }

`;
export default GlobalStyle;
