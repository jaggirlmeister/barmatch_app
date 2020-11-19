import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
html,
body {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
    sans-serif;
}

h1{ color:#000;}

.inner {max-width:1200px; margin: 0 auto;}

button { width: 140px; cursor: pointer; opacity: .8; background: #fff; border:0; text-transform: uppercase; padding:20px 20px!important; color:#fff; background-color:#000; margin:0 auto;margin-left:20px; border-radius:20px; font-weight:800; text-align:center;}

button:first-child {margin-left:0;}

.red {background-color: #ff0000;}
.orange {background-color: #FF5000!important;}
.hightlight {background-color: #F0B40A; color: #320A46;}
.hightlight_over {background-color: #eee; color: #320A46;}

.purple { background-color:#160932; }
.light_purple { background-color:#514075; }
.magenta { background-color: #631B5C; }
.cyan { background-color: #34BBBB; }
.salmon { background-color: #EF8457; }


* {
  box-sizing: border-box;
}

@media (max-width: 860px) {
    .inner {padding:0 30px;}
}
`;


export default GlobalStyle;