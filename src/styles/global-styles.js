import { createGlobalStyle } from 'styled-components';
import {colors} from "./variables"
export const GlobalStyles = createGlobalStyle`
*, *::before, *::after {
    box-sizing: border-box;
    margin:0;
    padding: 0;
} 

:root {
    --gray1: #a1a2a4;
    --bg-hover-gray: #161819;
}

html, 
body {  
        background: ${colors.commonBg};
        color: #fff;
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
        font-size: 16px;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        -webkit-overflow-scrolling: touch;
    }
   
    #root {
        min-height: calc(100vh - 72px);
        position: relative;
    }

    li {
        list-style: none;
    }
    button {
        border: none;
        cursor: pointer;
    }

    a {
        text-decoration: none;
    }

    p {
        line-height: 1.4em;
    }

    img {
        max-width: 100%;
    }

    [type="search"]::-webkit-search-cancel-button,
    [type="search"]::-webkit-search-decoration {
        -webkit-appearance: none;
        appearance: none;

}
`;
