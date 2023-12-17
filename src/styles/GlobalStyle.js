import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*, *::after, *::before {
  font-family: 'Poppins', sans-serif;
}
*{
  ::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }
  
  ::-webkit-scrollbar-track {
    background-color: #f5f5f5;
  }
  
  ::-webkit-scrollbar-thumb {
    background-color: rgba(11, 128, 129, 1);
    border-radius: 4px;
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background-color: #555555;
  }
}
html,
  /* body {
    height: 100%;
    width: 100%;
  } */
 
  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    box-sizing: border-box;
    width: 100vw;
    margin:0;
    padding:0;
    /* min-height:100vh; */
    overflow-x:hidden;
    overflow-y:auto;
    background-color:'#f6f6f9';
  }

	a {
		text-decoration: none;
	}

  #root {
    min-height: 100%;
    min-width: 100%;
  }

  label {
    font-family: 'Mulish', sans-serif;
    line-height: 1.5em;
  }

  input{
    font-family: 'Nunito', sans-serif;
  }

  input, textarea{
    :focus {
      outline: none;
    
    }
  }

  select {
    font-family: inherit;
    font-size: inherit;
  }@font-face {
	font-family: "Inter";
	font-weight: 300;
	src: local("Inter"), url('assets/fonts/Inter/static/Inter-Light.ttf') format("truetype");
}
@font-face {
	font-family: "Inter";
	font-weight: 400;
	src: local("Inter"), url('assets/fonts/Inter/static/Inter-Regular.ttf') format("truetype");
}

@font-face {
	font-family: "Inter";
	font-weight: 500;
	src: local("Inter"), url('assets/fonts/Inter/static/Inter-Medium.ttf');
}

@font-face {
	font-family: "Inter";
	font-weight: 600;
	src: local("Inter"), url('assets/fonts/Inter/static/Inter-SemiBold.ttf') format("truetype");
}

@font-face {
	font-family: "Inter";
	font-weight: 700;
	src: local("Inter"), url('assets/fonts/Inter/static/Inter-Bold.ttf') format("truetype");
}

.skeleton-bg::before {
  content: '';
  display: block;
  background-repeat: no-repeat;
  background-image: linear-gradient(
    90deg,
    #ccc,
    #eee,
    #ccc
  );
  animation: loading-skeleton 2s ease-in-out infinite;
  transform: translateX(-100%);
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

@keyframes loading-skeleton {
  100% {
    transform: translateX(100%);
  }
}



`;
