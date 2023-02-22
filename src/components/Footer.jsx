import React from 'react'
import LogoWhite from '../assets/logoKasaWhite.svg'
import styled from 'styled-components'
import colors from '../utils/style/colors'

const FooterContainer = styled.footer`
   display: flex;
   flex-direction: column;

   justify-content: center;
   align-items: center;
   gap: 30px;

   height: 209px;

   margin-top: 51px;

   color: ${colors.light};
   background-color: ${colors.backgroundDark};

   @media (min-width: 770px) and (max-width: 1199px) {
      font-size: 20px;
   }

   @media (min-width: 375px) and (max-width: 768px) {
      font-size: 18px;
      margin-top: 30px;
      gap: 20px;
   }

   @media (max-width: 375px) {
      font-size: 12px;
      margin-top: 20px;
      gap: 15px;
   }
`

const Logo = styled.img`
   height: 36px;
`

const Text = styled.p`
   color: ${colors.light};
`

export default function Footer() {
   return (
      <FooterContainer>
         <Logo src={LogoWhite} alt="logo"></Logo>
         <Text>© 2020 Kasa. All rights reserved</Text>
      </FooterContainer>
   )
}
