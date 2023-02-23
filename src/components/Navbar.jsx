import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const NavContainer = styled.div`
   display: flex;
   flex-direction: row;
   gap: 57px;

   @media (min-width: 769px) and (max-width: 1199px) {
      gap: 30px;
   }

   @media (min-width: 375px) and (max-width: 768px) {
      gap: 10px;
   }

   @media (max-width: 374px) {
      gap: 7px;
   }
`

const NavLinkContainer = styled.div`
   @media (min-width: 1200px) {
      font-size: 24px;
   }

   @media (min-width: 769px) and (max-width: 1199px) {
      font-size: 19px;
   }

   @media (min-width: 375px) and (max-width: 768px) {
      font-size: 14px;
   }

   @media (max-width: 375px) {
      font-size: 12px;
   }
`

function NavBar() {
   return (
      <nav>
         <NavContainer>
            <NavLinkContainer>
               <NavLink
                  to="/"
                  className={({ isActive }) =>
                     isActive ? 'activeStyle' : 'link'
                  }
                  end
               >
                  Accueil
               </NavLink>
            </NavLinkContainer>
            <NavLinkContainer>
               <NavLink
                  className={({ isActive }) =>
                     isActive ? 'activeStyle' : 'link'
                  }
                  to="/about"
                  end
               >
                  A Propos
               </NavLink>
            </NavLinkContainer>
         </NavContainer>
      </nav>
   )
}

export default NavBar
