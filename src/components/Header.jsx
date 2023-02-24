import React from 'react'
import { Link } from 'react-router-dom'

import styled from 'styled-components'
import colors from '../style/colors'

import Navbar from './Navbar'
import imgLogo from '../assets/logoKasa.jpg'

const HeaderContainer = styled.header`
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: space-between;
   padding: 10px 0;
   color: ${colors.primary};
   background-color: ${colors.light};
   height: 128px;
   width: 100%;
`
const Logo = styled.img`
   height: 62px;

   @media (min-width: 769px) and (max-width: 1199px) {
      height: 52px;
   }

   @media (min-width: 375px) and (max-width: 768px) {
      height: 48px;
   }

   @media (max-width: 375px) {
      height: 43px;
   }
`

export default function Header() {
   return (
      <HeaderContainer>
         <Link to={`/`}>
            <Logo src={imgLogo} alt="Kasalogo" />
         </Link>

         {/* <Route path="/" element={<Home />} /> */}

         <Navbar />
      </HeaderContainer>
   )
}
