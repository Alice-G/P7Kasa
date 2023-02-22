import { createGlobalStyle } from 'styled-components'
import colors from '../style/colors'

const StyledGlobalStyle = createGlobalStyle`

    * {
      font-family: Montserrat, Arial, sans-serif;
      text-decoration: none;
      font-weight: 500;
      letter-spacing: 0em;
    
      list-style-type: none;
      color: ${colors.primary}; 
    
      margin: 0;
    }

    // styling margins of pages
    section {
      // smaller screens // from FIGMA
      @media (max-width: 375px) {
        margin: 0;
      } 
      
      // medium screens
      @media (min-width: 375px) and (max-width: 768px)  {
        margin: 0  5%;
      }
      
      // medium large
      @media (min-width:  769px) and (max-width: 1199px) {
        margin: 0  100px;
      }

      // medium large
      @media (min-width: 1200px) and (max-width: 1439px) {
        margin: 0  100px;
      } 

      // for-desktop-up // from FIGMA
      @media (min-width: 1440px) { 
        margin: 0  100px;
      }
    }

    body {
      font-size: 18px;
      background-color: ${colors.backgroundLight};
      max-width: 1440px;
      
      // border: 3px dashed deeppink; // DEV

      // for-desktop-up // from FIGMA
        @media (min-width: 1440px) {
          margin: auto;
        }
      
    }
`

export default StyledGlobalStyle
