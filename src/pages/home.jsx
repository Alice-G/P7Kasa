import React from 'react'
import { Link } from 'react-router-dom'

import GlobalStyle from '../style/GlobalStyle'
import styled from 'styled-components'
import colors from '../style/colors'

import Header from '../components/Header'
import Footer from '../components/Footer'

import homeBannerBackground from '../assets/eric-muhr-P_XxsdVgtpQ-unsplash.png'
import jsonFlats from '../datas/logements.json'

// full page
const Page = styled.div`
   // border: 3px dashed green; // DEV
`
// page minus footer
const HomeContainer = styled.section`
   // import padding from GlobalStyle

   @media (max-width: 375px) {
      display: flex;
      flex-direction: column;
      align-items: center;
   }
`

// Banner
const ImageContainer = styled.div`
   display: flex;
   justify-content: center;
   background-size: cover;
   height: 223px;
   border-radius: 25px;
   margin-bottom: 43px;

   background-position-y: center;

   @media (min-width: 375px) and (max-width: 768px) {
      margin-bottom: 25px;
   }

   @media (max-width: 375px) {
      height: 111px;
      width: 335px;

      margin-bottom: 10px;
   }
`

const ImageTextContainer = styled.div`
   display: flex;
   align-items: center;
   width: 100%;
   border-radius: 25px;
   background-color: rgba(0, 0, 0, 0.6);
`
const ImageText = styled.p`
   color: ${colors.light};
   text-align: center;
   font-size: 48px;

   background-position-y: center;
   margin: auto;

   @media (min-width: 375px) and (max-width: 768px) {
      font-size: 32px;
   }

   @media (max-width: 375px) {
      font-size: 24px;
   }
`

// Bulk of page
const FlexListContainer = styled.div`
   display: flex;
   flex-direction: row;
   flex-wrap: wrap;
   justify-content: space-evenly;
   gap: 56px 50px;
   padding: 56px 50px;

   background-color: ${colors.shade};
   border-radius: 10px;

   color: ${colors.primary};

   @media (min-width: 375px) and (max-width: 768px) {
      flex-direction: column;
      align-items: center;

      gap: 30px;

      padding: 0;

      background-color: ${colors.light};
   }

   @media (max-width: 375px) {
      flex-direction: column;
      align-items: center;

      gap: 20px;

      padding: 0;

      background-color: ${colors.light};
   }
`
// did not make it an a element so that there aren't any errors in chrome console. firefox adjusts for this
const FlatContainer = styled.div`
   display: flex;

   height: 340px;
   width: 340px;
   border-radius: 10px;

   background-size: cover;

   @media (min-width: 375px) and (max-width: 768px) {
      height: 280px;
   }

   @media (max-width: 375px) {
      height: 255px;
      // width: 335px;
   }
`

const FlatItem = styled.div`
   display: flex;
   width: 100%;
   height: 100%;

   // overlay
   border-radius: 10px;
   background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(0, 0, 0, 0.5) 100%
   );
`
const FlatName = styled.h3`
   color: ${colors.light};

   margin: 20px;
   margin-top: auto;

   font-size: 18px;
`

function Flat(props) {
   return (
      <FlatContainer
         key={props.id}
         style={{
            backgroundImage: `url(${props.cover})`,
         }}
      >
         <FlatItem>
            <FlatName>{props.title}</FlatName>
         </FlatItem>
      </FlatContainer>
   )
}

// constructing the page

function Home() {
   return (
      <Page>
         <GlobalStyle />
         <HomeContainer>
            <Header />

            <ImageContainer
               style={{ backgroundImage: `url(${homeBannerBackground})` }}
            >
               <ImageTextContainer>
                  <ImageText>Chez vous, partout et ailleurs</ImageText>
               </ImageTextContainer>
            </ImageContainer>

            <FlexListContainer>
               {jsonFlats.map((flat) => (
                  <Link key={flat.id} to={`/logement/${flat.id}`}>
                     <Flat
                        key={flat.id}
                        title={flat.title}
                        cover={flat.cover}
                     />
                  </Link>
               ))}
            </FlexListContainer>
         </HomeContainer>

         <Footer />
      </Page>
   )
}

export default Home
