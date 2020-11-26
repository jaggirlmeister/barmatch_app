import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

@font-face {
  font-family: 'ReemKufi';
  src: local('ReemKufi'), url(fonts/ReemKufi-Regular.ttf) format('truetype');
}

@font-face {
  font-family: 'Raleway';
  src: local('Raleway'), url(fonts/Raleway-Light.ttf) format('truetype');
}

html,
body {
  padding: 0;
  margin: 0;
  font-family: 'Raleway';
  background-image: url("back-blur.png");
  background-repeat: no-repeat;
  background-position: 0% 100%;
  background-color: #000;
  backdrop-filter: blur(50px);
}

h1{ color:#fff; font-family: 'ReemKufi'; letter-spacing: .7px; font-size: 37px; font-weight: normal;}

.inner {max-width:1200px; margin: 0 auto;}

button { width: 140px; cursor: pointer; background: #fff; border:0; text-transform: uppercase; padding:20px 20px!important; color:#fff; background-color:#000; margin:0 auto;margin-left:20px; border-radius:20px; text-align:center;}
button:hover{ opacity: .8; }

button:first-child {margin-left:0;}

.red {background-color: #ff0000;}
.orange {background-color: #FF5000!important;}
.hightlight {background-color: #F0B40A; color: #320A46;}
.hightlight_over {background-color: #eee; color: #320A46;}

.purple { background-color:#160932!important; }
.light_purple { background-color:#514075!important; }
.magenta { background-color: #631B5C!important; }
.cyan { background-color: #34BBBB!important; }
.salmon { background-color: #EF8457!important; }


* {
  box-sizing: border-box;
}

@media (max-width: 860px) {
    .inner {padding:0 30px;}
}
`;


export default GlobalStyle;