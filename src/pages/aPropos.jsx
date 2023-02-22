import React from 'react'

import GlobalStyle from '../style/GlobalStyle'
import styled from 'styled-components'

import Header from '../components/Header'
import Collapse from '../components/Collapse'
import Footer from '../components/Footer'

import aboutBannerBackground from '../assets/kalen-emsley-Bkci_8qcdvQ-unsplash.png'

// full page
const Page = styled.div`
   // border: 3px dashed green; // DEV
`
// page minus footer
const AboutContainer = styled.section`
   // import padding from GlobalStyle
`

const BannerContainer = styled.div`
   //
`

const BannerImage = styled.div`
   display: flex;
   justify-content: center;
   background-size: cover;
   background-position-y: center;

   border-radius: 25px;
   margin-bottom: 43px;

   max-width: 1240px;

   margin: 0 auto;

   height: 415px;

   // medium large
   @media (min-width: 770px) and (max-width: 1199px) {
      border-radius: 20px;

      height: 350px;
   }

   // medium screens
   @media (min-width: 375px) and (max-width: 768px) {
      border-radius: 15px;
      height: 300px;
   }

   // small screens
   @media (max-width: 375px) {
      height: 255px;
      border-radius: 10px;
   }
`

const OverShadow = styled.div`
   display: flex;
   align-items: center;
   width: 100%;
   border-radius: 25px;
   background-color: rgba(0, 0, 0, 0.3);

   // medium large
   @media (min-width: 770px) and (max-width: 1199px) {
      border-radius: 20px;
   }

   // medium screens
   @media (min-width: 375px) and (max-width: 768px) {
      border-radius: 15px;
   }

   // small screens
   @media (max-width: 375px) {
      border-radius: 10px;
   }
`

const ContentContainer = styled.div`
   display: flex;
   flex-direction: column;

   align-items: center;

   border-radius: 10px;
`

function APropos() {
   return (
      <Page>
         <GlobalStyle />
         <AboutContainer>
            <Header />

            <BannerContainer>
               <BannerImage
                  style={{ backgroundImage: `url(${aboutBannerBackground})` }}
               >
                  <OverShadow />
               </BannerImage>
            </BannerContainer>
            <ContentContainer>
               <Collapse
                  title="Fiabilité"
                  text="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
               />
               <Collapse
                  title="Respect"
                  text="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
               ></Collapse>
               <Collapse
                  title="Sécurité"
                  text="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
               />
               <Collapse
                  title="Responsabilité"
                  text="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
               />
            </ContentContainer>
         </AboutContainer>

         <Footer />
      </Page>
   )
}

export default APropos
